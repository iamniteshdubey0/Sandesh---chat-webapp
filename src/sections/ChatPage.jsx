import { useState } from "react";
import ChatSettings from "../components/chats/ChatSettings";
import ChatSidebar from "../components/chats/ChatSidebar";
import ChatWindow from "../components/chats/ChatWindow";

const ChatPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleOpenChat = (chat) => {
    setSelectedChat(chat);
    setShowChatWindow(true);
  };

  const handleBackToSidebar = () => {
    setShowChatWindow(false);
    setSelectedChat(null);
  };

  return (
    <section className="relative flex flex-col items-center justify-center md:px-4 overflow-hidden">
      {/* Desktop View */}
      <div className="max-sm:hidden conatiner max-w-4x mx-auto text-center z-10 mt-15">
        <div className="grid md:grid-cols-4 space-x-2 ">
          <div className="p-2">
            <ChatSidebar onOpenChat={handleOpenChat}></ChatSidebar>
          </div>
          <div className={!showSettings ? "col-span-3 transition-all duration-500 ease-in-out" : "col-span-2 transition-all duration-500 ease-in-out"}>
            <ChatWindow 
              showSettings={showSettings} 
              onToggleSettings={() => setShowSettings((prev) => !prev)}
              selectedChat={selectedChat}
            />
          </div>
          {!showSettings && (
            <div className="p-2 transition-all duration-500 ease-in-out transform opacity-100 translate-x-0">
              <ChatSettings />
            </div>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden conatiner w-full mt-15">
        <div className="space-x-2">
          {/* Show ChatSidebar when showChatWindow is false */}
          {!showChatWindow && (
            <div className="p-2 transition-all duration-300 ease-in-out">
              <ChatSidebar onOpenChat={handleOpenChat} />
            </div>
          )}
          
          {/* Show ChatWindow when showChatWindow is true */}
          {showChatWindow && (
            <div className="transition-all duration-300 ease-in-out">
              <ChatWindow 
                showSettings={showSettings} 
                onToggleSettings={() => setShowSettings((prev) => !prev)}
                selectedChat={selectedChat}
                onBackToSidebar={handleBackToSidebar}
              />
            </div>
          )}
          
          {!showSettings && showChatWindow && (
            <div className="absolute top-15 w-full left-0 p-2 h-screen bg-bg-dark/60">
              <ChatSettings showSettings={showSettings} onToggleSettings={() => setShowSettings((prev) => !prev)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
