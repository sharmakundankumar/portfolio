import React from "react";
import './App.css';
// import Button from "../Buttons/Index.js";
import Button1 from "../Buttons/Log In";
import Button2 from "../Buttons/Sign Up";


const Index = () => {
  return (
    <>
      <nav>
          <span> <img src="/Images/logo.png" alt="" /> Gilded</span>
        <div className="nav nav-left">
          <a href="Home">Home</a>
          <a href="Posts">Posts</a>
          <a href="Services">Services</a>
          <a href="Projects">Projects</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
        </div>
        <div className="nav nav-right">
          <Button1/>
          <Button2/>
        </div>
      </nav>
    </>
  );
};

export default Index;
