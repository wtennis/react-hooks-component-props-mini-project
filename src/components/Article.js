
import EmojiMaker from "./EmojiMaker";

function Article({date = "January 1, 1970", title, preview, minutes}) {
return (
    <article>
        <h3>{title}</h3>
        <small>{date}<EmojiMaker minutes = {minutes}/> </small>
        <p>{preview}</p>
        
    </article>
)
}


export default Article;