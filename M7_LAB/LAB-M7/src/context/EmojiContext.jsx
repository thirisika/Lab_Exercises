import React, { createContext, useContext, useState } from "react";


// Create a context for the emoji state
const EmojiContext = createContext();

export default function EmojiProvider (props)  {
  const [emoji, setEmoji] = useState("😀");
  
  const changeMood = () => {
    setEmoji((prevEmoji) => (prevEmoji === "😀" ? "😢" : "😀"));
  };
  
  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {props.children}
    </EmojiContext.Provider>
  );
};

export function useEmoji() {
   return useContext(EmojiContext);
}