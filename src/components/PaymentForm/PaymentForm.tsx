"use client"

import { FormProvider, useForm } from 'react-hook-form';
import CompanyCard from '../Cards/CompanyCard/CompanyCard'
import * as yup from 'yup';
import './PaymentForm.css'
import CompanyTransferScheme from '@/schemes/companyTransfer.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '../SearchBar/SearchBar';
import PaymentCard from '../Cards/PaymentCard/PaymentCard';
import { getCookie, getCookies } from 'cookies-next';
import ActionSuccessCard from '../Cards/ActionSuccessCard/ActionSuccessCard';
import ActionErrorCard from '../Cards/ActionErrorCard/ActionErrorCard';
import Link from 'next/link';

type CompanyListParams = {
    services: ServiceType[],
    cards: CardType[],
}

const CompanyList = ({ services, cards }: CompanyListParams) => {
    const [step, setStep] = useState<number>(0); // esto es para moverse por el formulario
    const [serverError, setServerError] = useState<string | null>(null); // manejo de errores

    // esto es por si el usuario no tiene que pagar
    const [notFound, setNotFound] = useState<boolean>(false);
    const router = useRouter();

    const methods = useForm<CompanyPaymentFormData>({
        resolver: yupResolver(CompanyTransferScheme),
    });

    const {register, handleSubmit, formState: {errors}} = methods

    const incrementStep = () => {
        setStep(step + 1);
    }

    const decrementStep = () => {
        setStep(step - 1);
    }

    const goToHomePage = () => {
        router.push('/dashboard');
        router.refresh();
    }

    return (
        <FormProvider {...methods}>
            <form>
                {
                    step === 0 &&
                    <>
                        <SearchBar placeholder='Buscá entre más de 5000 empresas' />
                        <article id="company-list-container" className='bg-white'>
                            <h2 className='font-bold'>Más Recientes</h2>
                            {services && services.length > 0 ? services.map((service, index) => (
                                <fieldset key={index}>
                                    <CompanyCard service={service} step={step} handleStep={incrementStep} />
                                </fieldset>
                            ))
                                : <p className='font-bold text-center mt-4'>Algo malo sucedió, haga <u className='hover:cursor-pointer' onClick={() => router.refresh()}>click aquí</u> para refrescar la página</p>}
                        </article>
                    </>
                }
                {
                    step === 1 &&
                    <article id="container-2" className='bg-blck'>
                        <div id="input-container">
                            <h1 className='font-bold text-xl text-ylw'>Número de cuenta sin el primer 2</h1>
                            <input type="number" id="cvu-input" />
                            <p className='text-xs text-white'>Son 11 números sin espacios, sin el "2" iniciar. Agregá ceros adelante si tenés menos</p>
                        </div>
                        <div id="btn-container">
                            <h4 className='mobile:hidden tablet:hidden'></h4>
                            <button className="bg-ylw" onClick={incrementStep}>
                                Continuar
                            </button>
                        </div>

                    </article>
                }
                {step === 2 && notFound && <article id="error-container">
                <div id="error-card-container" className='bg-blck'>
                    <ActionErrorCard title={"No encontramos facturas asociadas a ese dato"} subtitle={"Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura."}/>
                </div>
                <button onClick={decrementStep} className='bg-ylw'>Revisar dato</button>
                </article>
                }
                {
                    (step === 2 && !notFound) &&
                    <article id="payment-section">
                        <div id="total-pay" className='bg-blck'>
                            <span id="company-info" className='border-b-2 border-gray-500'>
                                <h1 className='font-bold text-xl text-ylw'>Netflix</h1>
                                <u className='text-white text-[16px]'>Ver detalles del pago</u>
                            </span>
                            <span id="final-price">
                                <h1 className='font-bold text-white'>Total a pagar</h1>
                                <h1 className='font-bold text-white'>$1135,45</h1>
                            </span>
                        </div>
                        <div id="cards-list" className='bg-white'>
                            <h3 className='font-bold'>Tus Tarjetas</h3>
                            {cards && cards.length > 0? cards.map((card: CardType, index: number) => (
                                <span id="card-info" key={index}>
                                    <div className='flex items-center'>
                                        <h4 id="circle"></h4>
                                    <p>Terminada en {String(card.number_id).slice(12,16)}</p>
                                    </div>
                                    <input type="radio" id="card-number" value={card.first_last_name} {...register("origin")}/>
                                    </span>
                            )) : <p className='font-bold text-center text-[16px]'>Usted no ha cargado ninguna tarjeta</p>}
                        </div>
                            <button onClick={incrementStep} className='bg-ylw'>Pagar</button>
                    </article>
                }
                {
                    (step === 3 && !serverError) &&
                    <article id="success-section">
                        <ActionSuccessCard message={"Ya realizaste tu pago"}/>
                        <div className='bg-blck' id="payment-info">
                            <ul>
                                <li className='text-white'>16 de septiembre 2024 a 10:30 hs</li>
                                <li className='text-ylw text-lg font-bold'>$1130,45</li>
                            </ul>
                            <ul>
                                <li className='text-white'>Para</li>
                                <li className='text-ylw text-xl font-bold'>Netflix</li>
                            </ul>
                            <ul>
                                <li className='text-white font-bold'>Tarjeta</li>
                                <li className='text-white font-bold'>American Expres ************4687</li>
                            </ul>
                        </div>
                        <div id="btn-container">
                            <Link href="/dashboard" id="home-btn" className='bg-gray-300'>Ir a inicio</Link>
                            <button id="download-btn" className='bg-ylw'>Descargar comprobante</button>

                        </div>
                    </article>
                }
                {step === 3 && serverError &&
                <article id="error-container">
                    <div id="error-card-container" className='bg-blck'>
                        <ActionErrorCard title={"Hubo un problema con tu pago"} subtitle={"Puede deberse a fondos insuficientes. Comunicate con la entidad emisora de la tarjeta"}/>
                    </div>
                    <button onClick={decrementStep} className='bg-ylw'>Revisar dato</button>
                </article>
                }

            </form>
        </FormProvider>
    )
}

export default CompanyList

