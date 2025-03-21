import About from "./components/About";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Usage from "./components/Usage";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Features/>
      <Usage/>
      <Benefits/>
      <Footer/>
    </div>
    
    
  )
}

export default App;