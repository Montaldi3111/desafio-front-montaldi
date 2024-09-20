import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import Menu from '@/components/Menu/Menu'
import NewCardForm from '@/components/Forms/NewCardForm'
import "./page.css"
import { Toaster } from 'sonner'
import CurrentPage from '@/components/CurrentPage/CurrentPage'
const NewCard = async () => {
  const token:string = headers().get("x-digital-access-token") ?? "";
  const {id}: {id: number} = await getUserAccount(token);
  return (
    <main className='bg-lightGray'>
      <Menu />
      <CurrentPage />
      <Toaster richColors visibleToasts={1} position='bottom-left'/>
      <NewCardForm account_id={id} token={token}/>
    </main>
  )
}

export default NewCard