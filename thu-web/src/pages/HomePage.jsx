import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import ToolbarView from "../shared/ToolbarView";
import TrianglifyHome from "../svg/trianglifyHome.svg";
import HomeIntro from "../animatedcomponents/HomeIntro";

const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${TrianglifyHome})`,
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

  homeIntroCss: {
    marginTop: theme.spacing.unit * 40,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class HomePage extends React.Component {
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
          <div className={classes.homeIntroCss}>
            <HomeIntro />
          </div>
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
