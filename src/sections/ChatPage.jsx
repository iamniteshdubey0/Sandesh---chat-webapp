import ChatSidebar from "../components/chats/ChatSidebar";
import ChatWindow from "../components/chats/ChatWindow";

const ChatPage = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="conatiner max-w-4x mx-auto text-center z-10 mt-20">
        <div className="grid grid-cols-4 space-x-2 ">
          <div className="">
            <ChatSidebar></ChatSidebar>
          </div>
          <div className="col-span-3">
            <ChatWindow></ChatWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
