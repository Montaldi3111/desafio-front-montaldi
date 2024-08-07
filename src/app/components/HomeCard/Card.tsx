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
        <section id="card" className="bg-white tablet:mx-auto tablet:w-[72vw] tablet:max-w-[75vw] p-4 rounded-md tablet:mb-4">
            <h1 id="card-head" className="tablet:text-xl font-bold font-head1 border-b-2 border-ylw pb-2">{message.head}</h1>
            <p id="card-content" className="text-sm mt-2">{message.content}</p>
        </section>
    )
}

export default Card;

/* 
Desktop

<section className="bg-white p-4 rounded-md w-96 mx-3">
            <h1 className="text-xl font-bold font-head1 border-b-2 border-ylw pb-2">{message.head}</h1>
            <p className="text-md mt-2">{message.content}</p>
        </section>

    Mobile

            <section className="bg-white p-4 rounded-md phone:mb-4 phone:mx-4">
            <h1 className="phone:text-xl font-bold font-head1 border-b-2 border-ylw pb-2">{message.head}</h1>
            <p className="text-sm mt-2">{message.content}</p>
        </section>

*/