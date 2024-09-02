import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserData } from '@/services/user/user.service'
import { getUserAccount } from '@/services/account/account.service'
import Menu from '@/components/Menu/Menu'
import CvuAliasCard from '@/components/Cards/CVU-Alias-Card/CvuAliasCard'
import UserDetails from '@/components/UserDetails/UserDetails'
import "./page.css"

const Profile = async () => {

  const token: string = headers().get("x-digital-access-token") ?? "";
  const userAccount: UserAccountType = await getUserAccount(token);
  const userData: UserType = await getUserData(userAccount.user_id, token)
  return (
    <main className='bg-lightGray h-full flex flex-row'>
      <section>
        <Menu />
      </section>
      <section id="info" className='my-4 w-full'>
        <div id="actual-page">
          <FaArrowRight />
          <p>Perfil</p>
        </div>
        <UserDetails userData={userData} />
        <div id="manage-payments">
          <p className='font-bold'>Gestioná los medios de pago</p>
          <FaArrowRight />
        </div>
        <CvuAliasCard alias={userAccount.alias} cvu={userAccount.cvu} />
      </section>
    </main>
  )
}

export default Profile