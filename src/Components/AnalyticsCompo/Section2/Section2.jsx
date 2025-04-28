import React, { useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

// Sample data
const weeklyData = [
  { name: "Mon", uv: 400, pv: 240, amt: 240 },
  { name: "Tue", uv: 300, pv: 139, amt: 221 },
  { name: "Wed", uv: 200, pv: 980, amt: 229 },
  { name: "Thu", uv: 278, pv: 390, amt: 200 },
  { name: "Fri", uv: 189, pv: 480, amt: 218 },
  { name: "Sat", uv: 239, pv: 380, amt: 250 },
  { name: "Sun", uv: 349, pv: 430, amt: 210 },
  { name: "Mon", uv: 400, pv: 240, amt: 240 },
  { name: "Tue", uv: 300, pv: 139, amt: 221 },
  { name: "Wed", uv: 200, pv: 980, amt: 229 },
  { name: "Thu", uv: 278, pv: 390, amt: 200 },
  { name: "Fri", uv: 189, pv: 480, amt: 218 },
  { name: "Sat", uv: 239, pv: 380, amt: 250 },
  { name: "Sun", uv: 349, pv: 430, amt: 210 },
  { name: "Mon", uv: 400, pv: 240, amt: 240 },
  { name: "Tue", uv: 300, pv: 139, amt: 221 },
  { name: "Wed", uv: 200, pv: 980, amt: 229 },
  { name: "Thu", uv: 278, pv: 390, amt: 200 },
  { name: "Fri", uv: 189, pv: 480, amt: 218 },
  { name: "Sat", uv: 239, pv: 380, amt: 250 },
  { name: "Sun", uv: 349, pv: 430, amt: 210 },
  { name: "Mon", uv: 400, pv: 240, amt: 240 },
  { name: "Tue", uv: 300, pv: 139, amt: 221 },
  { name: "Wed", uv: 200, pv: 980, amt: 229 },
  { name: "Thu", uv: 278, pv: 390, amt: 200 },
  { name: "Fri", uv: 189, pv: 480, amt: 218 },
  { name: "Sat", uv: 239, pv: 380, amt: 250 },
  { name: "Sun", uv: 349, pv: 430, amt: 210 },
];

const monthlyData = [
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
  { name: "Week 1", uv: 2400 },
  { name: "Week 2", uv: 1398 },
  { name: "Week 3", uv: 9800 },
  { name: "Week 4", uv: 3908 },
];

const yearlyData = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
];

const Section2 = () => {
  const [filter, setFilter] = useState("weekly");

  const getData = () => {
    if (filter === "weekly") return weeklyData;
    if (filter === "monthly") return monthlyData;
    if (filter === "yearly") return yearlyData;
    return [];
  };

  return (
    <div className="w-full p-4 space-y-6 px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md">
      {/* Header with Title and Filter */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-base-content">
            Traffic Overview
          </h1>
          <p>Visitor analytics of last 30 days</p>
        </div>
        <select
          className="border rounded-md p-2 shadow-sm text-gray-700"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getData()}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Section2;
