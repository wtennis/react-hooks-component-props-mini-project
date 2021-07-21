
import EmojiMaker from "./EmojiMaker";

function Article({date = "January 1, 1970", title, preview, minutes}) {
return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <EmojiMaker minutes = {minutes}/> <p>{minutes} min read</p>
    </article>
)
}


export default Article;