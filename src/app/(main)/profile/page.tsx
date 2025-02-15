import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserData } from '@/services/user/user.service'
import { getUserAccount } from '@/services/account/account.service'
import Menu from '@/components/Menu/Menu'
import CvuAliasCard from '@/components/Cards/CVU-Alias-Card/CvuAliasCard'
import UserDetails from '@/components/UserDetails/UserDetails'
import "./page.css"
import { Toaster } from 'sonner'
import CurrentPage from '@/components/CurrentPage/CurrentPage'
import Link from 'next/link'

const Profile = async () => {

  const token: string = headers().get("x-digital-access-token") ?? "";
  const { alias, cvu, user_id }: { alias: string, cvu: string, user_id: number } = await getUserAccount(token);
  const userData: UserType = await getUserData(user_id, token)
  return (
    <main className='bg-lightGray flex flex-row h-full'>
      <Toaster richColors closeButton visibleToasts={1} position='bottom-left' />
      <section>
        <Menu />
      </section>
      <section id="info" className='my-4 w-full'>
        <CurrentPage />
          <UserDetails userId={user_id} userData={userData} />
        <Link href="/cards"  id="manage-payments">
          <p className='font-bold'>Gestioná los medios de pago</p>
          <FaArrowRight />
        </Link>
        <CvuAliasCard alias={alias} cvu={cvu} />
      </section>
    </main>
  )
}

export default Profile