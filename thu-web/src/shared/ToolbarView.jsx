import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AboutButton from "../components/AboutButton";
import ContactButton from "../components/ContactButton";
import ResearchButton from "../components/ResearchButton";
import { ReactComponent as ThuSign } from "../svg/thusign.svg";

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
  }
});

class ToolbarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appCss} position="static">
          <Toolbar className={classes.toolCss}>
            <div className={classes.rowCss}>
              <div className={classes.titleContainerCss}>
                <ThuSign className={classes.thuSignCss} />
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
