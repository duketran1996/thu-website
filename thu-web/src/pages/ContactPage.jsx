import React, { useState, useEffect, useRef } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
import Box from "../animatedcomponents/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { isTablet, isMobileOnly } from "react-device-detect";
import TextField from "@material-ui/core/TextField";
import NeonText from "../animatedcomponents/NeonText";
import Button from "@material-ui/core/Button";
import { useTrail, animated } from "react-spring";
import NYC from "../pictures/nyc.jpg";
import Intro from "../animatedcomponents/Intro";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    //position: "relative"
  },

  layer_one: {
    position: "absolute",
    zIndex: 1,
    backgroundImage: `url(${NYC})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh"
  },

  box_one: {
    position: "absolute",
    zIndex: 2
  },

  box_two: {
    position: "absolute",
    zIndex: 2
  },

  neon_text_container_desktop_lanscape: {
    position: "absolute",
    zIndex: 4,
    width: "450px",
    height: "500px",
    top: "30%",
    left: "5%",
    transform: "translate(-5%, -30%)"
  },

  neon_text_container_mobile_lanscape: {
    position: "absolute",
    zIndex: 4,
    width: "280px",
    height: "300px",
    top: "90%",
    left: "5%",
    transform: "translate(-5%, -90%)"
  },

  neon_text_container_tablet_lanscape: {
    position: "absolute",
    zIndex: 4,
    width: "360px",
    height: "450px",
    top: "30%",
    left: "5%",
    transform: "translate(-5%, -30%)"
  },

  neon_text_one: {
    position: "absolute",
    zIndex: 4,
    width: "100px",
    height: "100px",
    top: "10%",
    left: "5%",
    transform: "translate(-5%, -10%)"
  },

  neon_text_two: {
    position: "absolute",
    zIndex: 4,
    width: "100px",
    height: "100px",
    top: "12%",
    left: "60%",
    transform: "translate(-60%, -12%)"
  },

  neon_text_three: {
    position: "absolute",
    zIndex: 4,
    width: "100px",
    height: "100px",
    top: "40%",
    left: "40%",
    transform: "translate(-40%, -40%)"
  },

  neon_text_four: {
    position: "absolute",
    zIndex: 4,
    width: "100px",
    height: "100px",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -60%)"
  },

  container_form_desktop_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "600px",
    display: "flex",
    flexWrap: "wrap",
    top: "30%",
    left: "85%",
    transform: "translate(-85%, -30%)"
  },

  container_form_tablet_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "400px",
    display: "flex",
    flexWrap: "wrap",
    top: "30%",
    left: "90%",
    transform: "translate(-90%, -30%)"
  },

  container_form_tablet_ipad_pro_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "500px",
    display: "flex",
    flexWrap: "wrap",
    top: "30%",
    left: "90%",
    transform: "translate(-90%, -30%)"
  },

  name: {
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "5px"
  },

  email: {
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "5px"
  },

  phone: {
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "5px"
  },

  message: {
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "5px"
  },

  send_button: {
    marginTop: "230px",
    fontWeight: "600"
  },

  send_not_support: {
    position: "absolute",
    zIndex: 8,
    width: 280,
    top: "40%",
    left: "90%",
    transform: "translate(-90%, -40%)"
  },

  circular_progress: {
    position: "absolute",
    zIndex: 9,
    width: "100 !important",
    height: "100 !important",
    color: "#FCF4A3",
    top: "40%",
    left: "45%"
  }
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#000000"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFFFFF"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000000"
      },
      // "&:hover fieldset": {
      //   borderColor: "#FFFFFF",
      //   boxShadow: "0 0 40px #FFDD1B"
      // },
      "&.Mui-focused fieldset": {
        borderColor: "#000000"
        //borderColor: "#FFFFFF",
        //boxShadow: "0 0 40px #FFDD1B"
      }
    }
  }
})(TextField);

const ColorButton = withStyles(theme => ({
  root: {
    color: "#000000",
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      boxShadow: "0 0 40px #FFDD1B"
    }
  }
}))(Button);

export default function ContactPage() {
  const classes = useStyles();
  const [notSupportMsg, setNotSupportMsg] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMsg, setDialogMsg] = useState("");
  const [dialogTitleSuccess, setDialogTitleSuccess] = useState("");
  const [dialogMsgSuccess, setDialogMsgSuccess] = useState("");
  const [dialogTitleError, setDialogTitleError] = useState("Sorry!");
  const [dialogMsgError, setDialogMsgError] = useState(
    "Something is wrong. Please try again."
  );
  const [progressCircular, setProgressCircular] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleOnSend = () => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "/send",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: messageRef.current.value
        },
        {
          headers: { Authorization: process.env.JWT_TOKEN }
        },
        setProgressCircular(false)
      )
      .then(function(response) {
        setProgressCircular(true);
        if (response.status === 200) {
          setDialogTitle(dialogTitleSuccess);
          setDialogMsg(dialogMsgSuccess);
          handleClickOpenAlert();
        } else {
          setDialogTitle(dialogTitleError);
          setDialogMsg(dialogMsgError);
          handleClickOpenAlert();
        }
      })
      .catch(function(error) {
        console.log(error);
        setProgressCircular(true);
        setDialogTitle(dialogTitleError);
        setDialogMsg(dialogMsgError);
        handleClickOpenAlert();
      });
  };

  var containerFormClass =
    window.outerHeight >= 1024
      ? classes.container_form_tablet_ipad_pro_landscape
      : classes.container_form_tablet_landscape;
  var textFieldWidthTablet = window.outerHeight >= 1024 ? 500 : 400;

  const compatible = isMobileOnly
    ? {
        neonTextContainer: classes.neon_text_container_mobile_lanscape,
        textOneFontSize: 50,
        textTwoFontSize: 90,
        textThreeFontSize: 50,
        textFourFontSize: 90,
        formToggle: true,
        notSupportToggle: false,
        introFontSize: 28,
        introTrailTextHeight: "40px",
        introTrailHeight: 80
      }
    : isTablet
    ? {
        neonTextContainer: classes.neon_text_container_tablet_lanscape,
        textOneFontSize: 80,
        textTwoFontSize: 130,
        textThreeFontSize: 80,
        textFourFontSize: 130,
        formToggle: false,
        notSupportToggle: true,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        containerForm: containerFormClass,
        textFieldWidth: textFieldWidthTablet
      }
    : window.outerWidth === 1112
    ? {
        neonTextContainer: classes.neon_text_container_tablet_lanscape,
        textOneFontSize: 80,
        textTwoFontSize: 130,
        textThreeFontSize: 80,
        textFourFontSize: 130,
        formToggle: false,
        notSupportToggle: true,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        containerForm: containerFormClass,
        textFieldWidth: textFieldWidthTablet
      }
    : {
        neonTextContainer: classes.neon_text_container_desktop_lanscape,
        textOneFontSize: 100,
        textTwoFontSize: 150,
        textThreeFontSize: 100,
        textFourFontSize: 150,
        formToggle: false,
        notSupportToggle: true,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        containerForm: classes.container_form_desktop_landscape,
        textFieldWidth: 600
      };

  const items = [
    <CssTextField
      className={classes.name}
      placeholder="Name"
      name="name"
      type="text"
      variant="outlined"
      required
      fullWidth
      id="custom-css-outlined-input"
      inputRef={nameRef}
    />,
    <CssTextField
      className={classes.email}
      placeholder="Email"
      name="email"
      type="email"
      variant="outlined"
      required
      fullWidth
      id="custom-css-outlined-input"
      inputRef={emailRef}
    />,
    <CssTextField
      className={classes.phone}
      placeholder="Phone"
      name="phone"
      type="text"
      variant="outlined"
      fullWidth
      id="custom-css-outlined-input"
      inputRef={phoneRef}
    />,
    <CssTextField
      className={classes.message}
      placeholder="Your messages"
      name="message"
      type="text"
      variant="outlined"
      required
      fullWidth
      id="custom-css-outlined-input"
      multiline
      rows={10}
      inputRef={messageRef}
    />,
    <ColorButton
      className={classes.send_button}
      variant="outlined"
      color="primary"
      type="submit"
      disableRipple={true}
      fullWidth
    >
      Send
    </ColorButton>
  ];

  const toggle = true;
  const trail = useTrail(items.length, {
    delay: 1000,
    config: config.gentle,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 300,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 300, height: 80 }
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/contact", {
        headers: { Authorization: process.env.JWT_TOKEN }
      })
      .then(function(response) {
        // handle success
        setNotSupportMsg(response.data.mobile_not_supported);
        setDialogTitleSuccess(response.data.dialog_title_success);
        setDialogMsgSuccess(response.data.dialog_msg_success);
        setDialogTitleError(response.data.dialog_title_error);
        setDialogMsgError(response.data.dialog_msg_error);
      })
      .catch(function(error) {
        // handle error
        console.log("Failed to get data from firebase: " + error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.layer_one} />
        <div className={classes.box_one}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="scaleY(-1)"
            leftFrom="0%"
            widthFrom="45%"
            heightFrom="0%"
            colorFrom="black"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo="45%"
            heightTo="85%"
            colorTo="black"
            opacityTo="0.5"
            boxShadowTo="unset"
            configType={config.molasses}
            backgroundImageFrom="unset"
            backgroundRepeatFrom="unset"
            backgroundSizeFrom="unset"
          />
        </div>
        <div className={classes.box_two}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="scaleX(-1)"
            leftFrom="0%"
            widthFrom="0%"
            heightFrom="90%"
            colorFrom="black"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo="50%"
            heightTo="90%"
            colorTo="black"
            opacityTo="0.5"
            boxShadowTo="unset"
            configType={config.molasses}
            backgroundImageFrom="unset"
            backgroundRepeatFrom="unset"
            backgroundSizeFrom="unset"
          />
        </div>
        <div className={compatible.neonTextContainer}>
          <div className={classes.neon_text_one}>
            <NeonText
              message={"Let's"}
              fontSize={compatible.textOneFontSize}
              textHeight={"100px"}
            />
          </div>
          <div className={classes.neon_text_two}>
            <NeonText
              message={"get"}
              fontSize={compatible.textTwoFontSize}
              textHeight={"100px"}
            />
          </div>
          <div className={classes.neon_text_three}>
            <NeonText
              message={"in"}
              fontSize={compatible.textThreeFontSize}
              textHeight={"100px"}
            />
          </div>
          <div className={classes.neon_text_four}>
            <NeonText
              message={"touch"}
              fontSize={compatible.textFourFontSize}
              textHeight={"100px"}
            />
          </div>
        </div>
        <div hidden={compatible.formToggle}>
          <form
            className={compatible.containerForm}
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              handleOnSend();
              e.target.reset();
            }}
          >
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={"text_" + index}
                className="trails-text"
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
                }}
              >
                <animated.div
                  style={{ height, width: compatible.textFieldWidth }}
                >
                  {items[index]}
                </animated.div>
              </animated.div>
            ))}
          </form>
        </div>
        <div
          className={classes.send_not_support}
          hidden={compatible.notSupportToggle}
        >
          <Intro
            toggle={true}
            messages={notSupportMsg}
            delay={0}
            configType={config.molasses}
            heightTrail={compatible.introTrailHeight}
            trailsTextHeight={compatible.introTrailTextHeight}
            trailsTextLetterSpacing="0.011em"
            trailTextFontSize={compatible.introFontSize}
            trailTextFontWeight={400}
            trailTextColor="white"
          />
        </div>
        <Dialog
          open={openAlert}
          hidden={!openAlert}
          TransitionComponent={Transition}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: {
              color: "white",
              backgroundColor: "black",
              borderRadius: 10
            }
          }}
        >
          <DialogTitle id="alert-dialog-slide-title">{dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              style={{ color: "white" }}
            >
              {dialogMsg}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert} style={{ color: "#EDB94C" }}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <div hidden={progressCircular}>
          <CircularProgress
            size={50}
            thickness={6}
            className={classes.circular_progress}
          />
        </div>
      </div>
    </>
  );
}
