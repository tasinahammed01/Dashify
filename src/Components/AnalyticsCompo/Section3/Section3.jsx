import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {
    Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Visitors Data
const visitorSources = [
  { name: "Google", value: "4.7K", color: "text-green-500" },
  { name: "Facebook", value: "3.4K", color: "text-blue-500" },
  { name: "Threads", value: "2.9K", color: "text-purple-500" },
  { name: "Twitter", value: "1.5K", color: "text-sky-400" },
];

const Section3 = () => {
  const [isOpen1, setisOpen1] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setisOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setisOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setisOpen3(!isOpen3);
  };

  const data1 = [
    { source: "Google", visitors: "4.7K" },
    { source: "Facebook", visitors: "3.4K" },
    { source: "Threads", visitors: "2.9K" },
    { source: "Google", visitors: "1.5K" },
  ];
  const data2 = [
    { source: "tasinPreview", visitors: "4.7K" },
    { source: "fb/tasin.prevview", visitors: "3.4K" },
    { source: "Threads/tasin/31", visitors: "2.9K" },
    { source: "tasin.Google.com", visitors: "1.5K" },
  ];
  const chartData = [
    { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 5000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 3000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 5780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 2890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 6390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Top Traffic Overview Card */}
      <div className="relative px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full mb-6">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-base-content">Top Channels</h1>
          <div className="relative">
            <BsThreeDots
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown1}
            />
            {/* Dropdown menu */}
            {isOpen1 && (
              <div className="absolute right-0 mt-2 w-40 bg-base-100 rounded-lg shadow-lg border p-2 space-y-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-base-content">
                  View More
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-red-500">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Visitor Sources List */}
        <div className="bg-base-200 text-base-content rounded-xl p-6 space-y-6">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Source</span>
            <span>Visitors</span>
          </div>
          <div className="space-y-4">
            {data1.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between space-y-4">
                  <span>{item.source}</span>
                  <span>{item.visitors}</span>
                </div>
                <hr className="opacity-20" />
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center w-full border border-gray-600 text-base-content rounded-lg py-2 hover:bg-base-300 transition">
            Channels Report
            <FaArrowRightLong className="ml-2 h-4 w-4 text-base-content" />
          </button>
        </div>
      </div>
      <div className="relative px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full mb-6">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-base-content">Top Pages</h1>
          <div className="relative">
            <BsThreeDots
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown2}
            />
            {/* Dropdown menu */}
            {isOpen2 && (
              <div className="absolute right-0 mt-2 w-40 bg-base-100 rounded-lg shadow-lg border p-2 space-y-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-base-content">
                  View More
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-red-500">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Visitor Sources List */}
        <div className="bg-base-200 text-base-content rounded-xl p-6 space-y-6">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Source</span>
            <span>Visitors</span>
          </div>
          <div className="space-y-4">
            {data2.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between space-y-4">
                  <span>{item.source}</span>
                  <span>{item.visitors}</span>
                </div>
                <hr className="opacity-20" />
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center w-full border border-gray-600 text-base-content rounded-lg py-2 hover:bg-base-300 transition">
            Channels Report
            <FaArrowRightLong className="ml-2 h-4 w-4 text-base-content" />
          </button>
        </div>
      </div>
      <div className="relative px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full mb-6">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-base-content">Active Users</h1>
          <div className="relative">
            <BsThreeDots
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown3}
            />
            {/* Dropdown menu */}
            {isOpen3 && (
              <div className="absolute right-0 mt-2 w-40 bg-base-100 rounded-lg shadow-lg border p-2 space-y-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-base-content">
                  View More
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-base-300 rounded-md text-red-500">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <FaDotCircle className="text-green-500" />{" "}
            <span className="text-4xl">243</span>{" "}
            <span className="mt-4">live visitor</span>
          </div>
          <div className="h-48 mt-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#4F46E5"
                  fill="#C7D2FE"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
