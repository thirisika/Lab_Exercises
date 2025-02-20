import { useEmoji } from "../context/EmojiContext";

function Emoji(){

    const { emoji, changeMood } = useEmoji();
  
  return (
    <div className="Emoji">
      {/* <span >{emoji}</span> */}
      <button  onClick={changeMood}>Change Mood</button>
    </div>
  )


}


  export default Emoji