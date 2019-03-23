import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ToolbarView from "../shared/ToolbarView";
import TrianglifyAbout from "../svg/trianglifyAbout.svg";
import ThuCorgie from "../pictures/thucorgie.JPG";

const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${TrianglifyAbout})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      height: "100%",
      width: "100%"
    },
    html: {
      height: "100%"
    }
  },

  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },

  cover: {
    borderRadius: 10,
    width: 450
  },

  card: {
    display: "flex",
    borderRadius: 20,
    height: 600,
    marginTop: theme.spacing.unit * 20,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  title: {
    fontFamily: "La Belle Aurore",
    fontSize: "2.5em",
    fontWeight: "bold",
    marginLeft: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },

  contentabout: {
    width: 450,
    lineHeight: "2em",
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "Neue Helvetica",

    letterSpacing: ".011em",
    marginLeft: theme.spacing.unit * 3
  }
});

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <ToolbarView />
        <main className={classes.content}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={ThuCorgie}
              title="Thu and Corgie"
            />
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.title}>
                Nice to meet you !
              </Typography>
              <Typography className={classes.contentabout}>
                I am a biology and chemistry student with experience in
                molecular biology including DNA cloning, protein expression,
                purification, and characterization. I am engaged in community
                volunteering services though UNICEF as well as instructing
                advanced high school mathematics as an assistant teacher at
                Fairmont Preparatory Academy. I am passionate about drug
                development and saving people’s lives through science. As an
                undergraduate student at University of California, Irvine, I am
                currently working for Professor Gregory Weiss on structural
                characterization for a quinone synthetase.
              </Typography>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutPage);
