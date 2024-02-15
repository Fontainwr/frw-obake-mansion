import styles from "./App.module.css";
import { About } from "./components/About/About";
import{ Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return ( 
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
  </div>
  );
}

export default App;
