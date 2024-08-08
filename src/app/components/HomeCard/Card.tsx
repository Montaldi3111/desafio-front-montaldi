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
        <section id="card" className="bg-white p-4 rounded-md">
            <h1 id="card-head" className="text-xl font-bold font-body border-b-2 border-ylw pb-2">{message.head}</h1>
            <p id="card-content" className="text-[16px] mt-2">{message.content}</p>
        </section>
    )
}

export default Card;