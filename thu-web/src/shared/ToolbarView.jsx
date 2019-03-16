import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AboutButton from "../components/AboutButton";
import ContactButton from "../components/ContactButton";
import ResearchButton from "../components/ResearchButton";
import Vivus from "vivus";
import ThuSign from "../svg/thusign.svg";

const styles = theme => ({
  root: {
    width: "100%",
    zIndex: "100",
    position: "absolute"
  },

  appCss: {
    height: "128px",
    background: "transparent",
    boxShadow: "none"
  },

  toolCss: {
    marginTop: "30px",
    marginBottom: "30px"
  },

  rowCss: {
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto"
  },

  titleContainerCss: {
    display: "inline-block",
    verticalAlign: "middle",
    width: "30%"
  },

  buttonContainerCss: {
    display: "inline-block",
    verticalAlign: "middle",
    width: "70%"
  },

  thuSignCss: {
    width: "80%"
  }
});

class ToolbarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 0
    };
  }

  componentDidMount() {
    new Vivus(
      "thusign",
      { duration: 150, file: ThuSign },
      function finish() {
        this.setState({ fill: 1 });
      }.bind(this)
    );
  }

  render() {
    const fill = {
      fillOpacity: this.state.fill,
      transition: "fill-opacity 0.2s"
    };
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appCss} position="static">
          <Toolbar className={classes.toolCss}>
            <div className={classes.rowCss}>
              <div className={classes.titleContainerCss}>
                <div id="thusign" className={classes.thuSignCss} style={fill} />
              </div>
              <div className={classes.buttonContainerCss}>
                <ContactButton />
                <ResearchButton />
                <AboutButton />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ToolbarView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolbarView);
