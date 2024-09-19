import { FaArrowRight } from 'react-icons/fa6'
import { getUserAccount } from '../../../services/account/account.service';
import { headers } from 'next/headers'
import ResumeCard from '@/components/Cards/ResumeCard/ResumeCard'
import HomeButtons from '@/components/Buttons/HomeButtons'
import MovementList from '@/components/MovementList/MovementList'
import Menu from '@/components/Menu/Menu'
import "./page.css"
import { getAllTransactions } from '@/services/transactions/transactions.service';
const Home = async () => {

  const token:string = headers().get("x-digital-access-token") ?? "";
  const userData:UserAccountType = await getUserAccount(token);
  const transactions: TransactionType[] = await getAllTransactions(userData.id, token)

  return (
    <main className='bg-lightGray w-full'>
      <section>
        <Menu/>
      </section>
      <div id="home-shortcut" className='hidden'>
        <FaArrowRight />
        <p className='underline'>Inicio</p>
      </div>
      <section id="account-details" className='h-full py-10'>
        <ResumeCard balance={userData.available_amount}/>
        <HomeButtons />
        <MovementList transactions={transactions} />
      </section>
    </main>
  )
}

export default Home