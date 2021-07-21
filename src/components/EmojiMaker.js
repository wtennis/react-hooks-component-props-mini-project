
function EmojiMaker({minutes}) {

    const totalInFives = Math.ceil(minutes/5)
    const totalInTens = Math.ceil(minutes/10)
    let emojis = ""

    if (totalInFives < 6) {
        for (let i = 0; i < totalInFives; i++) {
            emojis += "☕️";
        }
        return <p>{emojis}{minutes} min read</p>
    } else {
        for (let i = 0; i < totalInTens; i++) {
            emojis += "🍱";
        }
        return <p>{emojis}{minutes} min read</p>
    }
    
    // if (totalInFives <4) {
    //     return (
    //     <p>☕️</p> 
    // ) 
    // } else return (
    //     <p>☕️☕️☕️☕️☕️☕️☕️</p> 
    // ) 
   
} 

export default EmojiMaker;