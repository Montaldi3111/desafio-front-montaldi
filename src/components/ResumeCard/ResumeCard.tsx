import React, { useEffect, useState } from 'react'
import "./resumeCard.css"
import { getUserBalance } from '@/services/account/account.service'

type ResumeCardParams = {
  token?: string,
}

const ResumeCard = ({token}:ResumeCardParams) => {
  const [balance, setBalance] = useState<number>(0);
  useEffect(() => {
    getUserBalance(token).then(balance => {
      setBalance(balance);
    })
  },[])
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