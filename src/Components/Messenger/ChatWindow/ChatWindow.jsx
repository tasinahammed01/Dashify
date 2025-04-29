import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import MessageInput from "../MessageInput/MessageInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", text: "Hey! How's it going?" },
    { id: 2, sender: "You", text: "Good! You?", isOwnMessage: true },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSendMessage = (newMessage) => {
    setMessages([
      ...messages,
      { id: Date.now(), sender: "You", text: newMessage, isOwnMessage: true },
    ]);
  };

  return (
    <div className="flex flex-col w-3/4 bg-gray-50">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            isOwnMessage={msg.isOwnMessage}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
