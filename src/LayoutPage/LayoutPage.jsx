import React, { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/SharedCompo/NavBar/NavBar";
import Header from "../Components/SharedCompo/Header/Header";

const LayoutPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sticky NavBar */}
      <div className="md:sticky top-0 h-screen">
        <NavBar isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-[100000]">
          <Header isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
