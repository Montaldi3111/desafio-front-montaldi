import Menu from '@/components/Menu/Menu'
import { dateFormatter } from '@/utils/dateFunctions'
import React, { FC } from 'react'
import "./page.css"
import TransactionDetail from '@/components/TransactionDetail/TransactionDetail'
import { useParams } from 'next/navigation'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getOneTransaction } from '@/services/transactions/transactions.service'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'


const DetailPage = async ({ params }) => {
  const idParams = params.id;
  // const token = headers().get("x-digital-access-token") ?? "";
  // const {id} = await getUserAccount(token);
  // const transaction = await getOneTransaction(String(id), idParams, token);
  const transaction = {
    id: 473,
    account_id: 207,
    type: "Deposit",
    description: "Deposito de dinheiro",
    origin: "Francisco Klondie",
    destination: "Francisco Klondie",
    amount: 1000,
    dated: dateFormatter("2024-09-10T18:21:27.13Z")
  }
  console.log(idParams)
  return (
    <main className='bg-lightGray'>
      <section>
        <Menu />
      </section>
      <div id="current-page">
        <FaArrowRight />
        <p className='underline'>Tu actividad</p>
      </div>
      <section className='bg-lightGray' id="transaction-container">
        <TransactionDetail transaction={transaction} />
        <div id="btn-container">
          <button className="bg-[#CECECE]" id="home-btn"><Link href="/activity">Ir a inicio</Link></button>
          <button className="bg-ylw" id="download-voucher-btn">Descargar comprobante</button>
        </div>
      </section>
    </main>
  )
}
export default DetailPage
