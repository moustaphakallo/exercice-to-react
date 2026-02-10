import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { Bloc } from "./components/Bloc";
import { Blogtecnologe } from "./components/Blogtecnologe"; 
import { Home } from "./components/Home";
import { Solutions } from "./components/Solutions";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <Blogtecnologe />
      <Bloc />
      <Home/>
      <Solutions/>
    </>
  );
}

export default App; 
