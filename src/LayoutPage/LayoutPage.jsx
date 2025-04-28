import React, { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/SharedCompo/NavBar/NavBar";
import Header from "../Components/SharedCompo/Header/Header";

const LayoutPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true); // corrected typo in state name

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen); // use correct state variable
  };

  return (
    <div className="flex w-full">
      {/* Passing the isNavOpen state to NavBar as a prop */}
      <NavBar isNavOpen={isNavOpen} className="h-[100vh] " />
      <div className="w-full">
        {/* Passing the isNavOpen state and handleNavOpen function to Header as props */}
        <Header isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
