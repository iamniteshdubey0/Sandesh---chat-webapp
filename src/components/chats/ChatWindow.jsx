import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";
import MessageBubble from "./MessageBubble";
import InputBar from "./InputBar";


const messages = [
  {
    id: 1,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "text",
    content: "Hi Aaron, this is my design i create last night, you can check it",
    time: "12.10",
    me: false,
  },
  {
    id: 2,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "file",
    file: {
      name: "Marketing Brochure.zip",
      size: "8.1 MB",
    },
    time: "12.13",
    me: false,
  },
  {
    id: 3,
    sender: "me",
    type: "text",
    content: "That's quick Audrey! thanks for your work, i will check it now",
    time: "12.15",
    me: true,
  },
  {
    id: 4,
    sender: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "text",
    content: "Thanks Aaron! 🥳 feel free to leave feedback",
    time: "12.34",
    me: false,
  },
  {
    id: 5,
    sender: "me",
    type: "text",
    content: "Hello Audrey, i have some feedback on your design!",
    time: "12.40",
    me: true,
  },
  {
    id: 6,
    sender: "me",
    type: "image",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80"
    ],
    time: "12.41",
    me: true,
  }
];

const ChatWindow = ({ showSettings, onToggleSettings }) => {
  const [allMessages, setAllMessages] = useState(messages);

  const handleSend = (msgText) => {
    setAllMessages([
      ...allMessages,
      {
        id: Date.now(),
        sender: "me",
        me: true,
        type: "text",
        content: msgText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };
  return (
    <div className="bg-bg-dark h-fit flex items-center justify-center mb-1">
      <div className="relative w-full bg-bg-dark/30 flex flex-col h-[88vh]">

        {/* Header */}
        <div className="flex items-center justify-between py-2 px-4 bg-bg-light rounded-md mx-4 my-2">
          <div>
            <div className="font-semibold text-lg text-text">Audrey Kelly</div>
            <div className="flex items-center space-x-1 text-sm text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
          <FaEllipsisH
              className="text-text-muted/60 text-xl cursor-pointer"
              onClick={onToggleSettings}
          />
        </div>

        {/* Messages */}
        <div className="flex-1 px-3 py-4 overflow-y-auto bg-bg-dark space-y-3">
          {allMessages.map(msg => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
        </div>

        {/* Input Bar */}
        <InputBar onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
