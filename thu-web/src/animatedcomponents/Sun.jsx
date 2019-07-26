import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  root: {
    width: "150px",
    height: "200px",
    background: "none"
  },

  sun: {
    position: "relative",
    width: "150px",
    height: "120px"
    // top: "calc(50% - 75px)",
    // left: "calc(50% - 75px)"
  },

  sun__part: {
    position: "absolute",
    width: "130px",
    height: "120px",
    background: "#f4d37c",
    transformOrigin: "bottom",
    borderRadius: "50%"
  },

  sun__eyes: {
    position: "absolute",
    width: "55px",
    height: "20px",
    top: "40px",
    left: "38px"
  },

  sun__eyeleft: {
    position: "absolute",
    background: "black",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    left: "0",
    transform: "rotate(225deg)"
  },

  sun__eyeleft__hover: {
    position: "absolute",
    background: "transparent",
    borderRadius: "0",
    width: "10px",
    height: "10px",
    borderLeft: "3px solid black",
    borderBottom: "3px solid black",
    left: "0",
    transform: "rotate(225deg)"
  },

  sun__eyeright: {
    position: "absolute",
    background: "black",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    right: "0",
    transform: "rotate(45deg)"
  },

  sun__eyeright__hover: {
    position: "absolute",
    background: "transparent",
    borderRadius: "0",
    width: "10px",
    height: "10px",
    borderLeft: "3px solid black",
    borderBottom: "3px solid black",
    right: "0",
    transform: "rotate(45deg)"
  },

  sun__mouse: {
    position: "absolute",
    width: "20px",
    height: "10px",
    top: "60px",
    left: "55px",
    borderBottom: "2px solid black",
    borderRadius: "50%",
    background: "transparent"
  },

  sun__dimpleleft__hover: {
    position: "absolute",
    background: "#f5e3eb",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    top: "50px",
    left: "20px"
  },

  sun__dimpleright__hover: {
    position: "absolute",
    background: "#f5e3eb",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    top: "50px",
    right: "20px"
  }
});

class Sun extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    const { classes } = this.props;
    const sunEyesLeft = this.state.isHovered
      ? classes.sun__eyeleft__hover
      : classes.sun__eyeleft;
    const sunEyesRight = this.state.isHovered
      ? classes.sun__eyeright__hover
      : classes.sun__eyeright;
    const sunDimpleLeft = this.state.isHovered
      ? classes.sun__dimpleleft__hover
      : "";
    const sunDimpleRight = this.state.isHovered
      ? classes.sun__dimpleright__hover
      : "";
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div
          className={classes.sun}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <div className={classes.sun__part}>
            <div className={classes.sun__eyes}>
              <div className={sunEyesLeft} />
              <div className={sunEyesRight} />
            </div>
            <div className={sunDimpleLeft} />
            <div className={sunDimpleRight} />
            <div className={classes.sun__mouse} />
          </div>
        </div>
      </div>
    );
  }
}

Sun.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sun);
