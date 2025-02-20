import { useEmojiContext } from "../context/EmojiContext";

import { emojis } from "../context/EmojiContext";

function MoodSwitcher(){
    const{setEmoji,sadMood}=useEmojiContext();

    const handleMoodSwitch=()=>{
        setEmoji(sadMood?emojis.happy:emojis.sad);
    }
    return(
        <label>sadMood:<input type="button" value={sadMood} onChange={handleMoodSwitch}/></label>
    )
}
export default MoodSwitcher