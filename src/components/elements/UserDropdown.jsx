import { useState, useRef, useEffect } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="relative ml-4" ref={menuRef}>
      <button
        className="flex items-center space-x-2 focus:outline-none cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img 
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Aaron Stanley"
          className="w-9 h-9 rounded-full border"
        />
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-sm font-semibold text-text">
            Aaron Stanley
          </span>
          <span className="text-xs text-text-muted">Sales Manager</span>
        </div>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-10 mt-2 w-44 bg-bg border border-border rounded-lg shadow-lg z-50 cursor-pointer">
          <button
            className="flex items-center w-full px-4 py-2 text-text hover:bg-bg-light rounded-lg cursor-pointer"
            onClick={() => {
              /* handle Profile */
            }}
          >
            <FaUser className="mr-2" />
            Profile
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-text hover:bg-bg-light rounded-lg cursor-pointer"
            onClick={() => {
              /* handle Logout */
            }}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
