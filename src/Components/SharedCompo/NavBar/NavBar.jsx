import React from "react";
import { BiSupport } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa"; // Added icon for custom arrow
import { BsMotherboard } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="w-64 bg-base-300 min-h-screen p-4 shadow-md">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          className="w-full h-[100px] object-contain"
          src="https://i.ibb.co.com/7drs5pQg/Screenshot-466-removebg-preview.png"
          alt="Logo"
        />
      </div>

      {/* Menu Section */}
      <div className="mb-6">
        <h1 className="text-gray-400 font-bold mb-2">Menu</h1>
        <div className="flex items-start gap-2 p-2  rounded-md cursor-pointer">
          <RxDashboard className="text-2xl text-base-content mt-1" />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content hover:bg-base-100 p-1 font-medium list-none">
                Dashboard
                <FaChevronDown className="text-sm transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <ul className="ml-2 mt-2 space-y-1">
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Ecommerce
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Analytics
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Marketing
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mb-6">
        <h1 className="text-gray-400 font-bold mb-2">Support</h1>
        <div className="flex items-start gap-2 p-2  rounded-md cursor-pointer">
          <BiSupport className="text-2xl text-base-content mt-1" />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content hover:bg-base-100 p-1 font-medium list-none">
                Support
                <FaChevronDown className="text-sm transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <ul className="ml-2 mt-2 space-y-1">
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Chat
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Email
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      {/* Others Section */}
      <div>
        <h1 className="text-gray-400 font-bold mb-2">Others</h1>
        <div className="flex items-start gap-2 p-2  rounded-md cursor-pointer">
          <BsMotherboard className="text-2xl text-base-content mt-1" />
          <div className="w-full">
            <details className="group w-full">
              <summary className="flex justify-between items-center cursor-pointer text-base-content hover:bg-base-100 p-1 font-medium list-none">
                Others
                <FaChevronDown className="text-sm transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <ul className="ml-2 mt-2 space-y-1">
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Charts
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  UI Elements
                </li>
                <li className="text-sm font-bold p-2 text-base-content hover:bg-base-100 cursor-pointer">
                  Authentication
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
