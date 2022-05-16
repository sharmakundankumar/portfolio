import React from "react";
import Navbar from "./Components/Navigation/Index";
import Home from "./Components/Pages/Home/index";
import Contact from "./Components/Pages/Contact/index";
import About from "./Components/Pages/About/index";
import Footer from "./Components/Footer/Index";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default App;
