import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated } from "react-spring/renderprops";

const styles = theme => ({});

const Container = Keyframes.Spring(async next => {
  // await next({
  //   from: { opacity: 1, radians: 0, color: "#F5B7B1" },
  //   to: { opacity: 0.4, radians: 1 * Math.PI }
  // });

  while (true) {
    await next({
      from: { opacity: 0.4, radians: 1 * Math.PI, color: "#F5B7B1" },
      to: { opacity: 1, radians: 0 }
    });
    await next({
      from: { opacity: 1, radians: 1 * Math.PI, color: "#F5B7B1" },
      to: { opacity: 0.4, radians: 0 }
    });
  }
});

class CloudTwoFadeOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      items: [
        {
          name: "cloud_two_fade_one",
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
          viewBox="0 0 600 600"
        >
          <animated.g fillOpacity={opacity} fill={color}>
            <path
              id="cloud_two_fade"
              d="M524.183,297.065c-15.985-19.893-36.265-32.691-60.815-38.399c7.81-11.993,11.704-25.126,11.704-39.399
		            c0-20.177-7.139-37.401-21.409-51.678c-14.273-14.272-31.498-21.411-51.675-21.411c-18.271,0-34.071,5.901-47.39,17.703
                c-11.225-27.028-29.075-48.917-53.529-65.667c-24.46-16.746-51.728-25.125-81.802-25.125c-40.349,0-74.802,14.279-103.353,42.83
                c-28.553,28.544-42.825,62.999-42.825,103.351c0,2.856,0.191,6.945,0.571,12.275c-22.078,10.279-39.876,25.838-53.389,46.686
                C6.759,299.067,0,322.055,0,347.18c0,35.211,12.517,65.333,37.544,90.359c25.028,25.033,55.15,37.548,90.362,37.548h310.636
                c30.259,0,56.096-10.715,77.512-32.121c21.413-21.412,32.121-47.249,32.121-77.515
                C548.172,339.757,540.174,316.952,524.183,297.065z"
            />
          </animated.g>
        </animated.svg>
      ));

    return (
      <>
        <CssBaseline />
        <Container reset native keys={items} config={{ duration: 4000 }}>
          {Content}
        </Container>
      </>
    );
  }
}

CloudTwoFadeOne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CloudTwoFadeOne);
