import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated } from "react-spring/renderprops";

const styles = theme => ({});

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { opacity: 0.4, radians: 2 * Math.PI, color: "#F1948A" },
      to: { opacity: 1, radians: 0 }
    });
    await next({
      from: { opacity: 1, radians: 2 * Math.PI, color: "#F1948A" },
      to: { opacity: 0.4, radians: 0 }
    });
  }
});

class CloudTwoSun extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      items: [
        {
          name: "cloud_two_sun",
          width: "200",
          height: "150",
          distance: "50"
        }
      ]
    };
  }

  render() {
    const { items } = this.state;
    const Content = ({ opacity, radians, color }) =>
      this.state.items.map((props, i) => (
        <animated.svg
          key={i}
          style={{
            width: props.width,
            height: props.height,
            willChange: "transform",
            transform: radians.interpolate(
              r =>
                `translate3d(${props.distance *
                  Math.sin(r + (i * 2 * Math.PI) / 5)}px,0, 0)`
            )
          }}
          viewBox="0 0 56 56"
        >
          <animated.g fillOpacity={opacity} fill={color}>
            <path
              id="cloud_two_sun"
              d="M25,46H10.845C4.865,46,0,41.135,0,35.154C0,31,2.705,26.688,6.433,24.901L7,24.63V24c0-0.127,0.008-0.256,0.015-0.386
              l0.009-0.16l-0.012-0.21C7.006,23.163,7,23.082,7,23c0-3.859,3.141-7,7-7c0.309,0,0.614,0.027,0.917,0.067
              c0.078,0.01,0.156,0.023,0.233,0.036c0.267,0.044,0.53,0.102,0.789,0.177c0.035,0.01,0.071,0.017,0.106,0.027
              c0.285,0.087,0.563,0.197,0.835,0.321c0.071,0.032,0.14,0.067,0.21,0.101c0.24,0.119,0.475,0.249,0.702,0.396
              C19.719,18.373,21,20.538,21,23c0,0.553,0.447,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871C22.667,12.379,27.388,10,32.085,10
              c7.745,0,14.177,6.135,14.848,13.888c-1.022-0.072-2.552-0.109-4.083,0.124c-0.546,0.083-0.921,0.593-0.838,1.139
              c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.151-0.012c2.227-0.337,4.548-0.021,4.684-0.002
              C52.49,26.872,56,31.161,56,35.972C56,41.501,51.501,46,45.972,46H33H25z"
            />
          </animated.g>
        </animated.svg>
      ));

    return (
      <>
        <CssBaseline />
        <Container reset native keys={items} config={{ duration: 5000 }}>
          {Content}
        </Container>
      </>
    );
  }
}

CloudTwoSun.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CloudTwoSun);
