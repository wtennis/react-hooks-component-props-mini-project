
function EmojiMaker({minutes}) {

    const totalInFives = Math.ceil(minutes/5)
    let emojis = ""
    for (let i = 0; i < totalInFives; i++) {
        emojis += "☕️";
      }
      return <p>{emojis}</p>
    
    
    
    // if (totalInFives <4) {
    //     return (
    //     <p>☕️</p> 
    // ) 
    // } else return (
    //     <p>☕️☕️☕️☕️☕️☕️☕️</p> 
    // ) 
   
} 

export default EmojiMaker;