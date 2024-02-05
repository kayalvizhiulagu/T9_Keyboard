import React, { useState } from 'react';
import './T9Keyboard.css'; 
import Key from "./Keyboard";

const T9Keyboard = () => {
  const [input, setInput] = useState("");
  const [inputIndex, setInputIndex] = useState(0);
  const keys = [
    {
      name: 1,
      content: ["."]
    },
    {
      name: 2,
      content: ["a", "b", "c"]
    },
    {
      name: 3,
      content: ["d", "e", "f"]
    },
    {
      name: 4,
      content: ["g", "h", "i"]
    },
    {
      name: 5,
      content: ["j", "k", "l"]
    },
    {
      name: 6,
      content: ["m", "n", "o"]
    },
    {
      name: 7,
      content: ["p", "q", "r", "s"]
    },
    {
      name: 8,
      content: ["t", "u", "v", "w"]
    },
    {
      name: 9,
      content: ["x", "y", "z"]
    },
    {
      name: "*"
    },
    {
      name: "0",
      content: [" "]
    },
    {
      name: "#",
      content: ["Clear"]
    },
   
  ];

  const handleKeyPress = (event) => {
    if (event.key === "Backspace") {
      setInput(input.slice(0, -1)); 
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="t9-container">
    <div className="t9-keyboard" onKeyDown={handleKeyPress}>
      <input type="text" className='inputBox' value={input} readOnly placeholder="Type here" />
      <div className="buttons">
        {keys.map((key) => (
          <Key
            key={key.name}
            inputIndex={inputIndex}
            setInputIndex={setInputIndex}
            input={input}
            KEY={key}
            setInput={setInput}
            handleClear={handleClear} 
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default T9Keyboard;
