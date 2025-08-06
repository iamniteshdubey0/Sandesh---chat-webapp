import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  FaInfoCircle,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const HelpDropdown = () => {
  const [open, setOpen] = useState(false);
  const helpRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-4" ref={helpRef}>
      <button
        className="relative flex items-center space-x-2 focus:outline-none cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaInfoCircle className="text-xl text-text-muted" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute -right-20 top-10 mt-2 w-80 max-h-86 bg-bg border border-border rounded-lg shadow-lg z-50 cursor-pointer px-2 py-3"
        >
          <h2 className="text-md font-semibold mb-4">Help & Info</h2>
          <div className="space-y-4 ">
            {/* Help & Info container */}
            <div className="space-y-2 max-h-70 overflow-x-auto">
              {/* sub sections */}
              <div className="flex flex-col items-center justify-center bg-bg-light px-3 py-4 rounded-lg border gap-4">
                <div className="flex flex-col items-center justify-center text-center space-y-2 focus:outline-none cursor-pointer">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Aaron Stanley"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-sm font-semibold text-text">
                      Aaron Stanley
                    </span>
                    <span className="text-xs text-text-muted">
                      Web Developer
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGithub
                    size={24}
                    className="text-text-muted hover:text-text"
                  />
                  <FaLinkedin
                    size={24}
                    className="text-text-muted hover:text-text"
                  />
                  <FaInstagram
                    size={24}
                    className="text-text-muted hover:text-text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpDropdown;
