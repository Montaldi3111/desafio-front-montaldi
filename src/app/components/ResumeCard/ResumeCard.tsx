import React from 'react'
import "./resumeCard.css"
const ResumeCard = () => {
  return (
    <article id="principal-card">
        <span id="links"><a href="#" id="credit-cards">Ver tarjetas</a><a href="#" id="check-cvu">Ver CVU</a></span>
        <div id="balance">
            <h3>Dinero disponible</h3>
            <p id="current-money">$ 5.589.364,89</p>
        </div>
    </article>
  )
}

export default ResumeCard