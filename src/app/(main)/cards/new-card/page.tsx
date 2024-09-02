import React from 'react'
import "./page.css"
import Menu from '@/components/Menu/Menu'
import NewCardForm from '@/components/Forms/NewCardForm'
import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
const NewCard = async () => {
  const token = headers().get("x-digital-access-token") ?? "";
  const {id} = await getUserAccount(token);
  return (
    <main className='h-screen bg-lightGray'>
      <Menu />
      <div id="current-page">
        <FaArrowRight />
        <h3>Tarjetas</h3>
      </div>
      <NewCardForm account_id={Number(id)} token={token}/>
    </main>
  )
}

export default NewCard