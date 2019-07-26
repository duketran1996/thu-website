import React from "react";
import { withStyles } from "@material-ui/core/styles";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import ToolbarView from "./shared/ToolbarView";
import Sun from "./animatedcomponents/Sun";
import CloudOneSun from "./animatedcomponents/CloudOneSun";
import CloudTwoSun from "./animatedcomponents/CloudTwoSun";
import CloudOneFadeOne from "./animatedcomponents/CloudOneFadeOne";
import CloudOneFadeTwo from "./animatedcomponents/CloudOneFadeTwo";
import CloudTwoFadeOne from "./animatedcomponents/CloudTwoFadeOne";
import UpHouse from "./animatedcomponents/UpHouse";
import ThuPicOne from "./animatedcomponents/ThuPicOne";
import ThuPicTwo from "./animatedcomponents/ThuPicTwo";
import StarYellowLarge from "./animatedcomponents/StarYellowLarge";
import StarYellowMedium from "./animatedcomponents/StarYellowMedium";
import StarYellowSmall from "./animatedcomponents/StarYellowSmall";
import { debounce } from "lodash-es";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";

const styles = theme => ({
  toolbarContainer: {
    width: "100%",
    height: "128px",
    zIndex: "100",
    position: "absolute"
  },

  thu_pic_one_zindex: {
    zIndex: "500 !important"
  }
});

class AppParallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgba(255,255,255,0)",
      isHovered: false,
      picOneSwitch: false,
      picTwoSwitch: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  listenScrollEvent = debounce(e => {
    //console.log(e.target.scrollTop);
    var pos = e.target.scrollTop;
    if (
      (pos > 100 && pos < 890) ||
      (pos > 1000 && pos < 1730) ||
      (pos > 1950 && pos < 2800)
    ) {
      this.setState({ color: "rgba(255,255,255,0.9)" });
    } else {
      this.setState({ color: "rgba(255,255,255,0)" });
    }
    if (pos > 500) {
      this.setState({ picOneSwitch: true });
    }
    if (pos > 600) {
      this.setState({ picTwoSwitch: true });
    }
  }, 100);

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent.bind(this));
  }

  render() {
    const { classes } = this.props;
    const thu_pic_one_hover = this.state.isHovered
      ? classes.thu_pic_one_zindex
      : "";
    return (
      <div>
        {/* Toolbar Section Start Here */}
        <div
          style={{
            backgroundColor: this.state.color
          }}
          className={classes.toolbarContainer}
        >
          <ToolbarView />
        </div>
        <Parallax ref={ref => (this.parallax = ref)} pages={4}>
          {/* Home Section Start Here */}
          <ParallaxLayer
            id="home"
            offset={0}
            speed={0}
            style={{
              backgroundImage:
                "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
            }}
          />

          <ParallaxLayer offset={0} speed={1}>
            <HomePage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.3}
            style={{
              width: "180px",
              height: "150px",
              display: "block",
              zIndex: "300",
              left: "200px"
            }}
          >
            <Sun />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.25}
            speed={0}
            style={{
              width: "180px",
              height: "100px",
              display: "block",
              zIndex: "200",
              left: "50px"
            }}
          >
            <CloudOneSun />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.21}
            speed={-0.2}
            style={{
              width: "200px",
              height: "150px",
              display: "block",
              zIndex: "400",
              left: "300px"
            }}
          >
            <CloudTwoSun />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.2}
            speed={0.1}
            style={{
              width: "180px",
              height: "100px",
              display: "block",
              zIndex: "400",
              left: "1250px"
            }}
          >
            <CloudOneFadeOne />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.25}
            speed={-0.1}
            style={{
              width: "400px",
              height: "180px",
              display: "block",
              zIndex: "400",
              left: "1350px"
            }}
          >
            <CloudOneFadeTwo />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.7}
            speed={-0.1}
            style={{
              width: "220px",
              height: "140px",
              display: "block",
              zIndex: "400",
              left: "1050px"
            }}
          >
            <CloudTwoFadeOne />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.5}
            speed={0}
            style={{
              width: "500px",
              height: "400px",
              display: "block",
              zIndex: "400",
              left: "200px"
            }}
          >
            <UpHouse />
          </ParallaxLayer>

          {/* About Section Start Here */}
          <ParallaxLayer
            id="about"
            offset={1}
            speed={0}
            style={{
              backgroundImage:
                "linear-gradient(to top, #9890e3 0%, #a8edea 100%)"
            }}
          />

          <ParallaxLayer
            className={thu_pic_one_hover}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            offset={1.22}
            speed={0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "450px",
              height: "500px",
              left: "300px",
              zIndex: "400"
            }}
          >
            <ThuPicOne picOneSwitch={this.state.picOneSwitch} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.6}
            speed={0.3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "480px",
              height: "350px",
              left: "650px",
              zIndex: "400"
            }}
          >
            <ThuPicTwo picTwoSwitch={this.state.picTwoSwitch} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.25}
            style={{ left: "600px", zIndex: "100" }}
          >
            <AboutPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.05}
            speed={-0.2}
            style={{
              width: "180px",
              height: "100px",
              display: "block",
              zIndex: "400",
              left: "1350px"
            }}
          >
            <CloudOneFadeOne />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.05}
            speed={-0.3}
            style={{
              width: "400px",
              height: "180px",
              display: "block",
              zIndex: "400"
            }}
          >
            <CloudOneFadeTwo />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={0.3}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "1300px"
            }}
          >
            <StarYellowLarge />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.85}
            speed={-0.2}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "1400px"
            }}
          >
            <StarYellowLarge />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={-0.5}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "1550px"
            }}
          >
            <StarYellowMedium />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.75}
            speed={0.4}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "50px"
            }}
          >
            <StarYellowSmall />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={-0.3}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "200px"
            }}
          >
            <StarYellowMedium />
          </ParallaxLayer>

          {/* Research Section Start Here */}
          <ParallaxLayer
            id="research"
            offset={2}
            speed={0}
            style={{
              backgroundImage:
                "linear-gradient(to top, #accbee 0%, #9890e3 100%)"
            }}
          />

          <ParallaxLayer offset={2.18} speed={0}>
            <ResearchPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.05}
            speed={0}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "700px"
            }}
          >
            <StarYellowMedium />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.2}
            speed={-0.4}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "300px"
            }}
          >
            <StarYellowSmall />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.1}
            speed={0}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "90px"
            }}
          >
            <StarYellowLarge />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.15}
            speed={0.2}
            style={{
              width: "50px",
              height: "50px",
              display: "block",
              zIndex: "400",
              left: "1300px"
            }}
          >
            <StarYellowSmall />
          </ParallaxLayer>

          {/* Contact Section Start Here */}
          <ParallaxLayer
            id="contact"
            offset={3}
            speed={0}
            style={{
              backgroundImage:
                "linear-gradient(to top, #09203f 0%, #accbee 100%)"
            }}
          />
        </Parallax>
      </div>
    );
  }
}

export default withStyles(styles)(AppParallax);
