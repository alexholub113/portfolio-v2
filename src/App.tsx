import './App.css'
import NavBar from './components/NavBar.tsx';
import Intro from './sections/Intro/Intro.tsx';
import SectionDivider from './components/SectionDivider.tsx';
import About from './sections/About/About.tsx';
import Projects from './sections/Projects/Projects.tsx';
import Footer from './components/Footer.tsx';
import { ActiveSectionContextProvider } from './context/ActiveSectionContext.tsx';

function App() {

  return (
    <div className="pt-28 sm:pt-36 flex flex-col items-center">
        <ActiveSectionContextProvider>
            <NavBar />
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Footer />
        </ActiveSectionContextProvider>
    </div>
  )
}

export default App
