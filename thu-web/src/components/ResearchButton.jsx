import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";
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
    color: theme.palette.getContrastText(grey[50]),
    "&:hover": {
      color: "#f48fb1",
      fontWeight: "bold",
      background: "transparent",
      boxShadow: "none"
    }
  }
});

class ResearchButton extends React.PureComponent {
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
      <Zoom in={true}>
        <Button
          variant="contained"
          className={this.state.buttonStyle + " " + classes.margin}
          onClick={this.props.onClick}
        >
          Research
        </Button>
      </Zoom>
    );
  }
}

ResearchButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResearchButton);
