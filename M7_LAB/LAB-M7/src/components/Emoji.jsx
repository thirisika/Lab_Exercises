import { useEmoji } from "../context/EmojiContext";

// jo: code is good, i reformatted using Ctrl-K-F - may seem minor but it makes everything easier to read and maintain
function Emoji() {
  const { emoji, changeMood } = useEmoji();

  return (
    <div className="Emoji">
      {/* <span >{emoji}</span> jo: you can leave this here - the Emoji component should render the emoji. 
        when it's in context, any other component can also render the current emoji */}
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
