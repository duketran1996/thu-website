import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

const trailsMain = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const trailsText = {
  position: "relative",
  width: "100%",
  height: "100px",
  lineHeight: "100px",
  color: "black",
  fontSize: "3em",
  fontWeight: "800",
  fontFamily: "La Belle Aurore",
  textAlign: "right",
  willChange: "transform, opacity",
  overflow: "hidden",
  paddingRight: "6px",
  "&>div": { overflow: "hidden" }
};

const items = ["\"I'm a 'blue sky thinker' and dream big.\"", "-Hilary Knight"];
const config = { mass: 5, tension: 2000, friction: 200 };

function HomeIntro() {
  const [toggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <div className="trails-main" style={{ ...trailsMain }}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              ...trailsText,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default HomeIntro;
