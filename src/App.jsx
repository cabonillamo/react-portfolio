import React from "react";
import { useSpring, animated } from "react-spring";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn}>
      <Header />
      <Presentation />
    </animated.div>
  );
}

export default App;
