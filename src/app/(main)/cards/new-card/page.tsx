import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import Menu from '@/components/Menu/Menu'
import NewCardForm from '@/components/Forms/NewCardForm'
import "./page.css"
import { Toaster } from 'sonner'
import CurrentPage from '@/components/CurrentPage/CurrentPage'
import { getAllCards } from '@/services/cards/cards.service'
import AddNewCardError from '@/components/Cards/AddNewCardError/AddNewCardError'
const NewCard = async () => {
  const token:string = headers().get("x-digital-access-token") ?? "";
  const {id}: {id: number} = await getUserAccount(token);
  const cards = await getAllCards(String(id), token)
  const totalCards = cards.length;
  if(totalCards >= 10) {
    return (
      <main className='bg-lightGray'>
        <section>
        <Menu />
        </section>
        <section className='w-full'>
        <CurrentPage />
        <AddNewCardError />
        </section>
      </main>
    )
  } else {
    return (
      <main className='bg-lightGray'>
        <Menu />
        <CurrentPage />
        <Toaster richColors visibleToasts={1} position='bottom-left'/>
        <NewCardForm totalCards={totalCards} account_id={id} token={token}/>
      </main>
    )
  }
}

export default NewCard