import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import "../App.css";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    display: "inline-block",
    float: "right",
    background: "transparent",
    borderRadius: "30px",
    boxShadow: "none",
    fontFamily: "Bungee Inline",
    fontWeight: "10px",
    fontSize: "18px",
    color: "white",
    "&:hover": {
      color: "#D6A663",
      fontWeight: "bold",
      background: "transparent",
      boxShadow: "none"
    }
  }
});

class ToolbarButton extends React.PureComponent {
  constructor(props) {
    const { classes } = props;
    super(props);
    this.state = {
      buttonStyle: classes.cssRoot
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Zoom in={true} timeout={this.props.timeout}>
        <Button
          variant="contained"
          className={this.state.buttonStyle + " " + classes.margin}
          onClick={this.props.onClick}
        >
          {this.props.title}
        </Button>
      </Zoom>
    );
  }
}

ToolbarButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolbarButton);
