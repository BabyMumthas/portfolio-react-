import "./App.css";
import { NavBar } from "./components/navbar/navBar";
import { Hero } from "./components/hero/hero";
import { Image } from "./components/image/image";
import { NavBarMobile } from "./components/navbarmobile/navbarmobile";
import { Education } from "./components/education/education";
function App() {
  return (
    <>
      <div className="main">
        <NavBar />
      </div>
      <div className="navbarmobile">
        <NavBarMobile />
      </div>
      <div className="hero-img">
        <Hero />
        <Image />
      </div>
      <Education />
    </>
  );
}

export default App;
