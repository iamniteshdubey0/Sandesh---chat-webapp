import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const InputBar = ({value, onChange, onSend}) => {
  const [input, setInput] = useState(value || "");

  const handleSend = e => {
    e.preventDefault();
    if (input.trim().length) {
      onSend(input);
      setInput("");
    }
  };
  return (
     <form className="bg-bg-light rounded-md p-2 flex items-center gap-2 mx-4 my-1"
          onSubmit={handleSend}>
      <input
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          onChange && onChange(e.target.value);
        }}
        className="flex-1 px-4 py-2 text-text-muted rounded-full bg-bg-light focus:outline-none transition text-sm"
        placeholder="Type in your messages..."
      />
      <button type="submit" className="p-3 bg-highlight/30 rounded-full hover:bg-highlight transition cursor-pointer">
        <FaPaperPlane className="text-text text-md" />
      </button>
    </form>
  );
};

export default InputBar;
