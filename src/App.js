import React from "react";
import { useSpring, animated } from "react-spring";
import useWindowSize from "./asset/useWindowSize";
import "./styles.css";

export default function App() {
  // // Usage
  // function App() {
  //   const size = useWindowSize();

  //   return (
  //     <div>
  //       {size.width}px / {size.height}px
  //     </div>
  //   );
  // }

  return <animated.div></animated.div>;
}
