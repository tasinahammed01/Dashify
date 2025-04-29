import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      {/* Example chat list */}
      <div className="mb-2 p-2 bg-white rounded shadow hover:bg-gray-200 cursor-pointer">
        John Doe
      </div>
      <div className="mb-2 p-2 bg-white rounded shadow hover:bg-gray-200 cursor-pointer">
        Jane Smith
      </div>
    </div>
  );
};

export default SideBar;
