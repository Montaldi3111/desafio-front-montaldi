import ResumeCard from '@/components/Cards/ResumeCard/ResumeCard'
import HomeButtons from '@/components/Buttons/HomeButtons'
import MovementList from '@/components/MovementList/MovementList'
import Menu from '@/components/Menu/Menu'
import { FaArrowRight } from 'react-icons/fa6'
import { getUserAccount } from '../../../services/account/account.service';
import "./page.css"
import { headers } from 'next/headers'
const Home = async () => {

  const token = headers().get("x-digital-access-token") ?? "";
  const userData:UserAccountType = await getUserAccount(token);
  return (
    <main className='bg-lightGray h-full'>
      <section>
        <Menu />
      </section>
      <div id="home-shortcut" className='hidden'>
        <FaArrowRight />
        <p className='underline'>Inicio</p>
      </div>
      <section id="account-details" className='h-full py-10'>
        <ResumeCard balance={userData.available_amount}/>
        <HomeButtons />
        <MovementList accountId={userData.id} token={token}/>
      </section>
    </main>
  )
}

export default Home