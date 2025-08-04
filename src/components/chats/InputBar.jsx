import React from "react";
import { useState } from "react";

const InputBar = () => {
  const [msg, setMsg] = useState("");
  return (
    <form
      className="flex p-4 bg-white border-t"
      onSubmit={(e) => {
        e.preventDefault(); /* handle send */
      }}
    >
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Send
      </button>
    </form>
  );
};

export default InputBar;
