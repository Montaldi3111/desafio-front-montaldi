import "./resumeCard.css"

type ResumeCardParams = {
  balance: number,
}

const ResumeCard = ({balance}:ResumeCardParams) => {
  return (
    <article id="principal-card">
        <span id="links"><a href="#" id="credit-cards">Ver tarjetas</a><a href="#" id="check-cvu">Ver CVU</a></span>
        <div id="balance">
            <h3 id="money-avaiable">Dinero disponible</h3>
            <p id="current-money">${balance}</p>
        </div>
    </article>
  )
}

export default ResumeCard