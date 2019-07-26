import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated } from "react-spring/renderprops";

const styles = theme => ({});

const Container = Keyframes.Spring(async next => {
  // await next({
  //   from: { opacity: 0.3, radians: 0, color: "#5DADE2" },
  //   to: { opacity: 1, radians: 1 * Math.PI }
  // });

  while (true) {
    await next({
      from: { opacity: 1, radians: 0, color: "#5DADE2" },
      to: { opacity: 0.3, radians: 0.5 }
    });
    await next({
      from: { opacity: 0.3, radians: 0.5, color: "#5DADE2" },
      to: { opacity: 1, radians: 0 }
    });
  }
});

class CloudOneFadeOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      items: [
        {
          name: "cloud_one_fade_one",
          width: "200",
          height: "100",
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
          viewBox="0 0 400 400"
        >
          <animated.g fillOpacity={opacity} fill={color}>
            <path
              id="cloud_one_fade"
              d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0"
            />
          </animated.g>
        </animated.svg>
      ));

    return (
      <>
        <CssBaseline />
        <Container reset native keys={items} config={{ duration: 2000 }}>
          {Content}
        </Container>
      </>
    );
  }
}

CloudOneFadeOne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CloudOneFadeOne);
