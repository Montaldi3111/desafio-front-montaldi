import PaymentFormContainer from '@/components/containers/PaymentFormContainer';
import { getUserAccount } from '@/services/account/account.service';
import { getAllCards } from '@/services/cards/cards.service';
import { getServiceById } from '@/services/company/company.service';
import { headers } from 'next/headers';
import Menu from '@/components/Menu/Menu';
import './page.css'
import CurrentPage from '@/components/CurrentPage/CurrentPage';
const PayServiceForm = async (request : any) => {

    const serviceId = request.params.id;
    const token = headers().get('x-digital-access-token')?? "";
    const {id, cvu} = await getUserAccount(token);

    const [cards, service] = await Promise.all([
        getAllCards(String(id), token),
        getServiceById(serviceId),
    ])

    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <section className='w-full'>
            <CurrentPage />
            <PaymentFormContainer cards={cards} cvu={cvu} token={token} service={service}/>
            </section>
        </main>
    )
}


export default PayServiceForm