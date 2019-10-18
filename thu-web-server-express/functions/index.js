const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const serviceAccount = require("./serviceAccount.json");
const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
var jwt = require("jsonwebtoken");
const compression = require("compression");

//Initialize express
const app = express();

//Initialize db
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/home", isTokenVerify, (req, res) => {
  db.collection("home_page").onSnapshot(snapshot => {
    res.send(snapshot.docs[0].data());
  });
});

app.get("/about", isTokenVerify, (req, res) => {
  db.collection("about_page").onSnapshot(snapshot => {
    res.send(snapshot.docs[0].data());
  });
});

app.get("/contact", isTokenVerify, (req, res) => {
  db.collection("contact_page").onSnapshot(snapshot => {
    res.send(snapshot.docs[0].data());
  });
});

app.get("/portrait", isTokenVerify, (req, res) => {
  db.collection("portrait_page").onSnapshot(snapshot => {
    res.send(snapshot.docs[0].data());
  });
});

app.get("/exp", isTokenVerify, (req, res) => {
  db.collection("experience_page")
    .orderBy("order", "desc")
    .onSnapshot(snapshot => {
      res.send(snapshot.docs.map(doc => ({ ...doc.data() })));
    });
});

app.post("/send", isTokenVerify, (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  db.collection("contact_auth").onSnapshot(snapshot => {
    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: snapshot.docs[0].data().email, // generated ethereal user
    //     pass: snapshot.docs[0].data().pass // generated ethereal password
    //   }
    // });

    let transporter = nodemailer.createTransport({
      service: snapshot.docs[0].data().service,
      host: snapshot.docs[0].data().host,
      port: snapshot.docs[0].data().port,
      secure: true,
      auth: {
        type: snapshot.docs[0].data().type,
        user: snapshot.docs[0].data().email,
        clientId: snapshot.docs[0].data().clientId,
        clientSecret: snapshot.docs[0].data().clientSecret,
        refreshToken: snapshot.docs[0].data().refreshToken,
        accessToken: snapshot.docs[0].data().accessToken
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: snapshot.docs[0].data().from, // sender address
      to: snapshot.docs[0].data().to, // list of receivers
      subject: req.body.name + " woud like to contact", // Subject line
      html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ success: false, error: "Sorry error" });
        return console.log(error);
      }
      res.status(200).json({ success: true, error: "None" });
    });
  });
});

function isTokenVerify(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    db.collection("api_auth").onSnapshot(snapshot => {
      jwt.verify(
        token,
        snapshot.docs[0].data().privateKey,
        { algorithm: "HS256" },
        (err, user) => {
          if (err) {
            res.status(500).json({ error: "Not Authorized" });
          } else {
            return next();
          }
        }
      );
    });
  } else {
    res.status(500).json({ error: "Not Authorized" });
  }
}

//Local testing on port 4000
// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Listen on port ${port}...`));

//Server deploy
exports.app = functions.https.onRequest(app);
