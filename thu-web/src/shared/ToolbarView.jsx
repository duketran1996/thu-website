import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolbarButton from "../components/ToolbarButton";
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
    this.handleClickPage = this.handleClickPage.bind(this);
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

  handleClickPage(pageNum) {
    this.props.onCurrentPage(pageNum);
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
              <div
                className={classes.titleContainerCss}
                onClick={() => this.handleClickPage(0)}
              >
                <div id="thusign" className={classes.thuSignCss} style={fill} />
              </div>
              <div className={classes.buttonContainerCss}>
                <ToolbarButton
                  title="Contact"
                  timeout={2000}
                  onClick={() => this.handleClickPage(3)}
                />
                <ToolbarButton
                  title="Experience"
                  timeout={1500}
                  onClick={() => this.handleClickPage(2)}
                />
                <ToolbarButton
                  title="About"
                  timeout={1000}
                  onClick={() => this.handleClickPage(1)}
                />
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
