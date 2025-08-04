import React from "react";
import MessageBubble from "./MessageBubble";
import InputBar from "./InputBar";

const dummyMessages = [
  { id: 1, sender: "me", content: "Hello!", time: "10:01", isMine: true },
  {
    id: 2,
    sender: "Alice",
    content: "Hi there!",
    time: "10:02",
    isMine: false,
  },
];

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-[84vh] bg-bg border-1 border-border rounded-md">
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {dummyMessages.map((msg) => (
          <MessageBubble
            key={msg.id}
            content={msg.content}
            time={msg.time}
            isMine={msg.isMine}
          />
        ))}
      </div>
      <InputBar />
    </div>
  );
};

export default ChatWindow;
