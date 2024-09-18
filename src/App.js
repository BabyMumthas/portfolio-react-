import "./App.css";
import { NavBar } from "./components/navbar/navBar";
import { Hero } from "./components/hero/hero";
import { Image } from "./components/image/image";
function App() {
  return (
    <>
      <NavBar />
      <div>
      <Hero />
      <Image />
      </div>
    </>
  );
}

export default App;
