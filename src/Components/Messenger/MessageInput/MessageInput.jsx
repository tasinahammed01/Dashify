import React, { useState } from "react";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="p-4 border-t flex">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
