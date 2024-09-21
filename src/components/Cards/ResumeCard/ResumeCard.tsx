import "./resumeCard.css"
import { addCommasToNumber } from '../../../utils/addCommas';
import Link from "next/link";

type ResumeCardParams = {
  balance: number,
}

const ResumeCard = ({balance}:ResumeCardParams) => {
  const mount = addCommasToNumber(Number(balance.toFixed(2)))
  return (
    <article id="principal-card">
        <span id="links"><Link href="/cards" id="credit-cards">Ver tarjetas</Link><Link href="/profile" id="check-cvu">Ver CVU</Link></span>
        <div id="balance">
            <h3 id="money-avaiable">Dinero disponible</h3>
            <p id="current-money">${mount}</p>
        </div>
    </article>
  )
}

export default ResumeCard