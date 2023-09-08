import './App.css'
import NavBar from './components/NavBar.tsx';
import Intro from './sections/Intro/Intro.tsx';
import SectionDivider from './components/SectionDivider.tsx';
import About from './sections/About/About.tsx';
import Projects from './sections/Projects/Projects.tsx';

function App() {

  return (
    <div className="pt-28 sm:pt-36 flex flex-col items-center">
        <NavBar />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
    </div>
  )
}

export default App
