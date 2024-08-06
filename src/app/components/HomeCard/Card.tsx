type CardParams = {
    message: MessageObj;
}

type MessageObj = {
    head: string,
    content: string,
}
const Card = ({message}:CardParams) => {
    return (
        <section className="bg-white p-4 rounded-md w-96 mx-3">
            <h1 className="text-xl font-bold font-head1 border-b-2 border-ylw pb-2">{message.head}</h1>
            <p className="text-md mt-2">{message.content}</p>
        </section>
    )
}

export default Card;