import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "80px 0px" }}>
        <Home />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
