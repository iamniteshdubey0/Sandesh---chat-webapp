import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaBell, FaClock } from "react-icons/fa";

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const notificationRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative ml-4" ref={notificationRef}>
      <button
        className="relative flex items-center space-x-2 focus:outline-none cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaBell className="text-xl text-text-muted" />
        <span className="absolute -top-2 -right-2 bg-highlight text-text text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 max-h-86 bg-bg border border-border rounded-lg shadow-lg z-50 cursor-pointer px-2 py-3">
          <h2 className="text-md font-semibold mb-4">Notifications</h2>
          <div className="space-y-4 ">
            {/* Notification List */}
            <div className="space-y-2 max-h-70 overflow-x-auto">
              {/* chat list */}
              <div className="flex items-center justify-between bg-bg-light px-3 py-2 rounded-lg border hover:bg-bg-dark/80">
                <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Aaron Stanley"
                    className="w-9 h-9 rounded-full border"
                  />
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-sm font-semibold text-text">
                      Aaron Stanley
                    </span>
                    <span className="text-xs text-text-muted">
                      hey there! let play Bgmi,..
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-text-muted">15s</span>
                  <FaClock size={12} className="text-text-muted"></FaClock>
                </div>
              </div>


              <div className="flex items-center justify-between bg-bg-light px-3 py-2 rounded-lg border hover:bg-bg-dark/80">
                <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Aaron Stanley"
                    className="w-9 h-9 rounded-full border"
                  />
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-sm font-semibold text-text">
                      Aaron Stanley
                    </span>
                    <span className="text-xs text-text-muted">
                      hey there! let play Bgmi,..
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-text-muted">15s</span>
                  <FaClock size={12} className="text-text-muted"></FaClock>
                </div>
              </div>

              <div className="flex items-center justify-between bg-bg-light px-3 py-2 rounded-lg border hover:bg-bg-dark/80">
                <div className="flex items-center space-x-2 focus:outline-none cursor-pointer">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Aaron Stanley"
                    className="w-9 h-9 rounded-full border"
                  />
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-sm font-semibold text-text">
                      Aaron Stanley
                    </span>
                    <span className="text-xs text-text-muted">
                      hey there! let play Bgmi,..
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-text-muted">15s</span>
                  <FaClock size={12} className="text-text-muted"></FaClock>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
