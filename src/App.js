import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BackgroundAnimation } from "./components/BackgroundAnimation";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from './components/Experience';
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
