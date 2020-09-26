import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

export default function App() {
  const { number, rotate, color } = useSpring({
    from: { number: 0, rotate: 0, color: "red" },
    number: 100,
    rotate: 100,
    color: "green"
  });
  return (
    <animated.div style={{}}>
      <div className="container">
        <div className="wrapper">
          <svg>
            <circle className="progress" cx="90" cy="90" r="80"></circle>
            <circle cx="90" cy="90" r="60"></circle>
          </svg>
          <div className="number">
            <h2>65$</h2>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
