import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/SharedCompo/NavBar/NavBar";

const LayoutPage = () => {
  return (
    <div className="flex w-full">
      <NavBar className="w-[15%] h-[100vh] bg-blue-300">nav</NavBar>
      <div className="w-[85%]">
        <div>header</div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutPage;
