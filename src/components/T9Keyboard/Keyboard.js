import { useRef, useState } from "react";

const Key = ({ KEY, input, setInput }) => {
  const [state, setState] = useState(0);
  const timerRef = useRef(null);
  const startRef = useRef();

  const mouseDown = (e) => {
    startRef.current = e.timeStamp;
  };

  const mouseUp = (e, key) => {
    clearTimeout(timerRef.current);
    if (key.content === undefined) {
      setInput((input) => input + key.name);
      return;
    }

      
    setInput((input) => {
      let updatedValue = input.split("");
      if (e.timeStamp - startRef.current > 1000) {
        updatedValue[input.length] = key.name;
      } else {
        updatedValue[input.length] = key.content[state];
      }
      updatedValue = updatedValue.join("");
      return updatedValue;
    });

  
    if (key.content !== undefined) {
      setState((state) => {
        if (state + 1 === key.content.length) return 0;
        return state + 1;
      });
      timerRef.current = setTimeout(() => {
        setState(0);
      }, 1000);
    }

    if (key.name === "#") {
      setInput("");
    }
  };

  return (
    <button
      onMouseDown={(e) => mouseDown(e)}
      onMouseUp={(e) => mouseUp(e, KEY)}
    >
      {KEY.name}
      <br />
      {KEY.content}
    </button>
  );
};

export default Key;
