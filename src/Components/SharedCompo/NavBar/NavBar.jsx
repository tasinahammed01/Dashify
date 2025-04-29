import React from "react";
import { BiSupport } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { BsMotherboard } from "react-icons/bs";
import { Link } from "react-router";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";

const NavBar = ({ isNavOpen, handleNavOpen }) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-base-300 min-h-screen p-4 shadow-md ${
        isNavOpen
          ? "w-full md:w-80 md:static absolute z-10 top-35 "
          : "lg:block hidden w-20 md:static absolute z-10 top-35 "
      }`} // Adjust width based on isNavOpen
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        {isNavOpen ? (
          <>
            <Link to="/">
              <img
                className={`hidden lg:block w-full h-[100px] object-contain 
              }`} // Hide logo when navbar is collapsed
                src="https://i.ibb.co.com/7drs5pQg/Screenshot-466-removebg-preview.png"
                alt="Logo"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <img
                className={`hidden lg:block w-full h-[50px] object-contain mb-5 
              }`} // Hide logo when navbar is collapsed
                src="https://i.ibb.co.com/6c4zvHYr/Screenshot-466-removebg-preview-1.png"
                alt="Logo"
              />
            </Link>
          </>
        )}
      </div>

      {/* Menu Section */}
      <div className="mb-6">
        <h1
          className={`text-gray-400 font-bold mb-2 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          Menu
        </h1>{" "}
        {/* Hide title when navbar is collapsed */}
        <div
          className={`${
            isNavOpen
              ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
              : ""
          }`}
        >
          <RxDashboard
            onClick={handleNavOpen}
            className={`${
              isNavOpen
                ? "text-2xl text-base-content mt-1"
                : " text-3xl cursor-pointer "
            }`}
          />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                {isNavOpen && "Dashboard"}{" "}
                {/* Show text only when navbar is expanded */}
                <FaChevronDown
                  className={`text-sm transition-transform duration-300 group-open:rotate-180 ${
                    isNavOpen ? "" : "hidden"
                  }`}
                />
              </summary>
              <ul
                className={`ml-2 mt-2 space-y-1 ${isNavOpen ? "" : "hidden"}`}
              >
                {" "}
                {/* Hide menu items when navbar is collapsed */}
                {/* <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link>Ecommerce</Link>
                </li> */}
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link to="/analytics">Analytics</Link>
                </li>
                {/* <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link>Marketing</Link>
                </li> */}
              </ul>
            </details>
          </div>
        </div>
        <div>
          <div
            className={`${
              isNavOpen
                ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
                : ""
            }`}
          >
            <SlCalender
              onClick={handleNavOpen}
              className={`${
                isNavOpen
                  ? "text-2xl text-base-content mt-1"
                  : " text-3xl cursor-pointer mt-5"
              }`}
            />
            <div className="w-full">
              <details className="group w-full">
                <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                  <Link to="/calender">{isNavOpen && "Calender"} </Link>
                </summary>
              </details>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              isNavOpen
                ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
                : ""
            }`}
          >
            <CgProfile
              onClick={handleNavOpen}
              className={`${
                isNavOpen
                  ? "text-2xl text-base-content mt-1"
                  : " text-3xl cursor-pointer mt-5"
              }`}
            />
            <div className="w-full">
              <details className="group w-full">
                <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                  <Link to="/profile">{isNavOpen && "Profile"} </Link>
                </summary>
              </details>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              isNavOpen
                ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
                : ""
            }`}
          >
            <GoTasklist
              onClick={handleNavOpen}
              className={`${
                isNavOpen
                  ? "text-2xl text-base-content mt-1"
                  : " text-3xl cursor-pointer mt-5"
              }`}
            />
            <div className="w-full">
              <details className="group w-full">
                <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                  <Link to="/tasks">{isNavOpen && "Tasks"} </Link>
                </summary>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mb-6">
        <h1
          className={`text-gray-400 font-bold mb-2 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          Support
        </h1>{" "}
        {/* Hide title when navbar is collapsed */}
        <div
          className={`${
            isNavOpen
              ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
              : ""
          }`}
        >
          <BiSupport
            onClick={handleNavOpen}
            className={`${
              isNavOpen
                ? "text-2xl text-base-content mt-1"
                : " text-3xl cursor-pointer"
            }`}
          />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                {isNavOpen && "Support"}{" "}
                {/* Show text only when navbar is expanded */}
                <FaChevronDown
                  className={`text-sm transition-transform duration-300 group-open:rotate-180 ${
                    isNavOpen ? "" : "hidden"
                  }`}
                />
              </summary>
              <ul
                className={`ml-2 mt-2 space-y-1 ${isNavOpen ? "" : "hidden"}`}
              >
                {" "}
                {/* Hide menu items when navbar is collapsed */}
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link to="/chat">Chat</Link>
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link to="/email">Email</Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* Others Section */}
      <div>
        <h1
          className={`text-gray-400 font-bold mb-2 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          Others
        </h1>{" "}
        {/* Hide title when navbar is collapsed */}
        <div
          className={`${
            isNavOpen
              ? "flex items-start gap-2 p-2 rounded-md cursor-pointer"
              : ""
          }`}
        >
          <BsMotherboard
            onClick={handleNavOpen}
            className={`${
              isNavOpen
                ? "text-2xl text-base-content mt-1"
                : " text-3xl cursor-pointer"
            }`}
          />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content  p-1 font-medium list-none">
                {isNavOpen && "Others"}{" "}
                {/* Show text only when navbar is expanded */}
                <FaChevronDown
                  className={`text-sm transition-transform duration-300 group-open:rotate-180 ${
                    isNavOpen ? "" : "hidden"
                  }`}
                />
              </summary>
              <ul
                className={`ml-2 mt-2 space-y-1 ${isNavOpen ? "" : "hidden"}`}
              >
                {" "}
                {/* Hide menu items when navbar is collapsed */}
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link>Charts</Link>
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link>UI Elements</Link>
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  <Link>Authentication</Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
