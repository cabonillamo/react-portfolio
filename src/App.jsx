import { useSpring, animated } from "react-spring";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

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
      <Skills />
    </animated.div>
  );
}

export default App;
