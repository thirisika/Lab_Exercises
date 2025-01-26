import { useState } from "react";

// jo: great! just watch the indenting

function Emoji() {
  const [emoji, setEmoji] = useState("😊");

  const handleEmoji = () => {
    // Switch between two emojis using if-else
    if (emoji === "😊") {
      setEmoji("😢"); // Set to sad emoji
    } else {
      setEmoji("😊"); // Set back to happy emoji
    }

    // jo: also could use a conditional:
    // setEmoji(prevEmoji => prevEmoji === "😊" ? "😢" : "😊")
  };

  return (
    <div className="Emoji componentBox">
      Emoji: {emoji}
      <button onClick={handleEmoji}>Change Emoji</button>
    </div>
  );
}

export default Emoji;
