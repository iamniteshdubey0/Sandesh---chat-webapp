import ChatScreen from "../components/chats/ChatScreen";
import ChatSettings from "../components/chats/ChatSettings";
import ChatSidebar from "../components/chats/ChatSidebar";
import ChatWindow from "../components/chats/ChatWindow";

const ChatPage = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="conatiner max-w-4x mx-auto text-center z-10 mt-16">
        <div className="grid grid-cols-4 space-x-2 ">
          <div className="p-2">
            <ChatSidebar></ChatSidebar>
          </div>
          <div className="col-span-2">
            {/* <ChatScreen /> */}
            <ChatWindow />
          </div>
          <div className="p-2">
            <ChatSettings></ChatSettings>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
