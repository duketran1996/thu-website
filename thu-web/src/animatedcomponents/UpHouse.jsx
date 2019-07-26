import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated } from "react-spring/renderprops";
import upHouse from "../svg/up_house.svg";

const styles = theme => ({
  uphouse: {
    backgroundImage: `url(${upHouse})`,
    backgroundSize: "cover",
    width: "400px",
    height: "400px"
  }
});

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { transform: "rotate(7deg)" },
      to: { transform: "rotate(-5deg)" }
    });

    await next({
      from: { transform: "rotate(-5deg)" },
      to: { transform: "rotate(7deg)" }
    });
  }
});

class UpHouse extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Container reset native config={{ duration: 2000 }}>
          {props => (
            <animated.div className={classes.uphouse} style={{ ...props }} />
          )}
        </Container>
      </>
    );
  }
}

UpHouse.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpHouse);
