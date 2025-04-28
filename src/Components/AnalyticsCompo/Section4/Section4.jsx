import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BsThreeDots } from "react-icons/bs";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Section4 = () => {
  const [isOpen4, setisOpen4] = useState(false);
  const [isOpen5, setisOpen5] = useState(false);

  const toggleDropdown4 = () => {
    setisOpen4(!isOpen4); // Fixed the incorrect state toggle
  };
  const toggleDropdown5 = () => {
    setisOpen5(!isOpen5); // Fixed the incorrect state toggle
  };

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map", {
        center: [51.505, -0.09],
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Pie chart data and customization
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="md:flex items-center gap-10">
      <div
        className="relative px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full md:max-w-[50%] mb-6"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-base-content">
              Customers Demographic
            </h1>
            <p>Number of customer based on country</p>
          </div>
          <div className="relative">
            <BsThreeDots
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown4}
            />
            {/* Dropdown menu */}
            {isOpen4 && (
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
        <div id="map" style={{ height: "500px", width: "100%" }}></div>
      </div>

      {/* Pie Chart Section */}
      <div
        className="relative px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full md:max-w-[50%] mb-6"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-base-content">
              Customer Demographics Breakdown
            </h1>
            <p>Distribution of customers by group</p>
          </div>
          <div className="relative">
            <BsThreeDots
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown5}
            />
            {/* Dropdown menu */}
            {isOpen5 && (
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
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Section4;
