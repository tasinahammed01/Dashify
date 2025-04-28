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
      <NavBar isNavOpen={isNavOpen} className="w-[15%] h-[100vh] bg-blue-300" />
      <div className="w-[85%]">
        {/* Passing the isNavOpen state and handleNavOpen function to Header as props */}
        <Header isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
