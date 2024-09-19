import "./card.css"
type CardParams = {
    message: MessageObj;
}

type MessageObj = {
    head: string,
    content: string,
}
const Card = ({message}:CardParams) => {
    return (
        <div id="card" className="bg-white p-4 rounded-md h-[100%]">
            <h1 id="card-head" className="font-bold font-body border-b-2 border-ylw pb-2">{message.head}</h1>
            <p id="card-content">{message.content}</p>
        </div>
    )
}

export default Card;