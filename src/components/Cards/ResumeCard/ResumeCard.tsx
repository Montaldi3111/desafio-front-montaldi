import "./resumeCard.css"
import { addCommasToNumber } from '../../../utils/addCommas';

type ResumeCardParams = {
  balance: number,
}

const ResumeCard = ({balance}:ResumeCardParams) => {
  const mount = addCommasToNumber(Number(balance.toFixed(2)))
  return (
    <article id="principal-card">
        <span id="links"><a href="#" id="credit-cards">Ver tarjetas</a><a href="#" id="check-cvu">Ver CVU</a></span>
        <div id="balance">
            <h3 id="money-avaiable">Dinero disponible</h3>
            <p id="current-money">${mount}</p>
        </div>
    </article>
  )
}

export default ResumeCard