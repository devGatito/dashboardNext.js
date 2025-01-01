"use client";
import React, { useState } from "react";
import SliderBar from "./SliderBar"; 
import Navbar from "./NavBar";

const Layout: React.FC = () => {
  const [isSliderOpen, setSliderOpen] = useState(true);
  const [isCommentSliderOpen, setCommentSliderOpen] = useState(true);

  const toggleSlider = () => {
    setSliderOpen(!isSliderOpen);
    if (isCommentSliderOpen) setCommentSliderOpen(false);
     
  };


  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar/>
      <SliderBar
        isOpen={isSliderOpen}
        toggleSidebar={toggleSlider}
      />
      
    </div>
  );
};

export default Layout;