import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainInfo from "./Components/MainInfo";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";
import Project from "./Components/Project";
import Portfolio from "./Components/Portfolio";
import Client from "./Components/Client";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="d-grid" style={{gap: "150px", backgroundColor:"#F9F9FF"}}>
      <MainInfo />
      <Services />
      <WhyUs />
      <Project />
      <Portfolio />
      <Client/>
      <Contact/>
    </div>
  );
}

export default App;
