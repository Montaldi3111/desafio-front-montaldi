import PaymentFormContainer from '@/components/Forms/PaymentForm/PaymentFormContainer';
import { getUserAccount } from '@/services/account/account.service';
import { getAllCards } from '@/services/cards/cards.service';
import { getServiceById } from '@/services/company/company.service';
import { headers } from 'next/headers';
import Menu from '@/components/Menu/Menu';
const PayServiceForm = async (request : any) => {

    const serviceId = request.params.id;
    const token = headers().get('x-digital-access-token')?? "";
    const {id} = await getUserAccount(token);

    const [cards, service] = await Promise.all([
        getAllCards(String(id), token),
        getServiceById(serviceId),
    ])

    return (
        <main className='bg-lightGray w-full'>
            <section>
                <Menu />
            </section>
            <section className='w-full'>
            <PaymentFormContainer cards={cards} service={service}/>
            </section>
        </main>
    )
}


export default PayServiceForm