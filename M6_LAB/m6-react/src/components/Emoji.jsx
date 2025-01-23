import { useState } from "react";
function Emoji(){

    const [emoji, setEmoji] = useState('😊');

    const handleEmoji = () => {
       
                    // Switch between two emojis using if-else
                if (emoji === '😊') {
                    setEmoji('😢'); // Set to sad emoji
                } else {
                    setEmoji('😊'); // Set back to happy emoji
                }
       
        }
    return(

        <div className="Emoji componentBox">
               Emoji: {emoji}
               <button onClick={handleEmoji}>Change Emoji</button>
        </div>

    )
}

export default Emoji