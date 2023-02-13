import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Stats from './components/Stats/Stats';


const App = ()=> {
    return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
    </div>
   )
}

export default App;
