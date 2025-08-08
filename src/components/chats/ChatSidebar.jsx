
import { FaPlus } from "react-icons/fa";

const chatsMock = [
  {
    id: 1,
    name: "David Nolan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Aaron? Are you here?",
    time: "12.10",
    unread: false,
  },
  {
    id: 2,
    name: "Audrey Kelly",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Ok, I will touch up this",
    time: "14.21",
    unread: true,
  },
  {
    id: 3,
    name: "Brian Artemayev",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    lastMessage: "Why you have that stupid idea? i think this is very...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    name: "Jessica Naomi",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    lastMessage: "I will handle that Aaron, Thanks!",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    name: "Albedo Greyhold",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    lastMessage: "Okay fine",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    name: "Amalia Chen",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    lastMessage: "Thank You!",
    time: "11/04",
    unread: false,
  },
  {
    id: 7,
    name: "Rudi Hadisuwarno",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    lastMessage: "Woalah pie to ham",
    time: "11/04",
    unread: true,
  }
];

export default function ChatSidebar({ onOpenChat }) {

  return (
    <div className="md:max-w-xs w-full bg-bg border-1 border-border shadow-xl p-4 flex flex-col h-[90vh] sm:h-[95vh] md:h-[88vh] mx-auto rounded-md">
      {/* Chats Title */}
      <h2 className="font-bold text-md mb-4 text-text-muted text-left">Chats</h2>

      {/* Search */}
      <input
        type="text"
        className="w-full px-4 py-2 text-text-muted rounded-lg border border-border/60 focus:outline-none focus:border-border text-sm mb-4"
        placeholder="Search name, contact, etc"
      />

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto pr-1 mt-2 space-y-1">
        {chatsMock.map((chat, i) => (
          <div
            onClick={() => onOpenChat(chat)}
            key={chat.id}
            className={`
              flex items-center px-1 py-3 rounded-lg cursor-pointer 
              ${chat.unread ? "bg-highlight/80 border-1 border-border" : "hover:bg-highlight/20"}
              transition
            `}
          >
            <img src={chat.avatar} alt={chat.name} className="w-9 h-9 rounded-full object-cover mr-3 border" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-semibold text-text-muted truncate text-sm">{chat.name}</span>
                <span className="text-xs text-text-muted/60">{chat.time}</span>
              </div>
              <span className="block text-xs text-text-muted/60 truncate text-left">{chat.lastMessage}</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Chat Button */}
      <button className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg bg-highlight/70 hover:bg-highlight text-text font-semibold py-2 shadow cursor-pointer">
        <FaPlus className="text-text" />
        New Chat
      </button>
    </div>
  );
}
