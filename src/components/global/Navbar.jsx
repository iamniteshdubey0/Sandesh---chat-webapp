import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import UserDropdown from "../elements/UserDropdown";
import NotificationDropdown from "../elements/NotificationDropdown";
import HelpDropdown from "../elements/HelpDropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-40 transition-all duration-300 py-2 bg-bg backdrop-blur-md shadow-xs">
      <div className="flex items-center justify-between px-4 py-2 md:py-1">
        {/* left: Logo and Brand Name */}
        <div className="flex-1 flex items-center justify-start space-x-2">
          <FaMessage></FaMessage>
          <span className="text-xl font-semibold text-text inline">
            Sandesh
          </span>
        </div>

        {/* Right: Notifications & User */}
        <div className="flex items-center space-x-4">
          <HelpDropdown></HelpDropdown>

          {/* Notification Icon */}
          <NotificationDropdown />

          {/* User Info */}
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
