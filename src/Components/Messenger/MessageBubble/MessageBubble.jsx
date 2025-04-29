import React from "react";

const MessageBubble = ({ sender, text, isOwnMessage }) => {
  return (
    <div
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
