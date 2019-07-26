import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated } from "react-spring/renderprops";

const styles = theme => ({
  neon: {
    //backgroundColor: "black",
    width: 50,
    height: 50
  }
});

function addIntensity(num) {
  const arr = [];
  const id = "star_yellow_medium_";
  for (var i = 0; i < 4; i++) {
    arr.push(<feMergeNode key={id + i} in="blurred" />);
  }
  return arr;
}

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { opacity: 1, color: "#F9E79F" },
      to: { opacity: 0.5, color: "#F4D03F" }
    });
    await next({
      from: { opacity: 1, color: "#F9E79F" },
      to: { opacity: 0.5, color: "#F4D03F" }
    });
    await next({
      from: { opacity: 0.5, color: "#F4D03F" },
      to: { opacity: 1, color: "#F9E79F" }
    });
  }
});

class StarYellowMedium extends React.PureComponent {
  render() {
    const { classes } = this.props;
    //Star blur degree
    const intensity = 4;
    const blur = 12;
    const Content = ({ opacity, color }) => (
      <animated.svg
        style={{
          width: "180",
          height: "120"
        }}
        viewBox="0 0 550 450"
        preserveAspectRatio="xMinYMin"
      >
        <animated.defs>
          <filter
            id="glow_star_yellow_medium"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blur}
              result="blurred"
            />
            <feMerge>{addIntensity(intensity)}</feMerge>
          </filter>
          <animated.g
            id="star_yellow_medium"
            fillOpacity={opacity}
            fill={color}
          >
            <path
              d="M55.093,110.761l6.544,17.743c0.246,0.668,0.882,1.111,1.593,1.111c0.711,0,1.347-0.443,1.593-1.111l6.544-17.743
              c5.297-14.364,16.62-25.687,30.983-30.983l17.743-6.544c0.667-0.246,1.11-0.882,1.11-1.593c0-0.711-0.443-1.347-1.11-1.593
              l-17.744-6.544c-14.363-5.297-25.686-16.619-30.982-30.982l-6.544-17.743c-0.246-0.667-0.882-1.11-1.593-1.11
              c-0.711,0-1.347,0.443-1.593,1.11l-6.544,17.743C49.796,46.885,38.474,58.207,24.11,63.504L6.366,70.048
              c-0.667,0.246-1.11,0.882-1.11,1.593c0,0.711,0.443,1.347,1.11,1.593l17.743,6.544C38.473,85.074,49.796,96.396,55.093,110.761z"
            />
          </animated.g>
        </animated.defs>
        <use xlinkHref="#star_yellow_medium" />
        <use
          xlinkHref="#star_yellow_medium"
          filter="url(#glow_star_yellow_medium)"
        />
      </animated.svg>
    );
    return (
      <div className={classes.neon}>
        <CssBaseline />
        <Container reset native config={{ duration: 1000 }}>
          {Content}
        </Container>
      </div>
    );
  }
}

StarYellowMedium.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StarYellowMedium);
