import styles from "./App.module.css";
import Hero from "./compoponets/Hero/Hero";
import { Navbar } from "./compoponets/Navbar/Navbar";

function App() {
  return ( 
  <div className={styles.App}>
    <Navbar />
    <Hero />
  </div>
  );
}

export default App;
