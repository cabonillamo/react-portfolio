import React from "react";
import { useSpring, animated } from "react-spring";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import About from "./components/About";

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
      <About />
    </animated.div>
  );
}

export default App;
