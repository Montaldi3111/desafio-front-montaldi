"use client"
import CompanyCard from '../Cards/CompanyCard/CompanyCard'
import './ServiceList.css'
import SearchBar from '../SearchBar/SearchBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchProvider } from '@/context/searchContext';
import { useEffect, useState } from 'react';
import { useSearch } from '@/hooks/useSearch';

type CompanyListParams = {
    services: ServiceType[]
}

const CompanyList = ({ services }: CompanyListParams) => {
    const {inputValue} = useSearch()
    const router = useRouter();
    const [copyServices, setCopyServices] = useState<ServiceType[]>([]);
    const filteredServices = copyServices.filter((service: ServiceType) => 
        service.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      useEffect(() => {
        setCopyServices(services);
      },[])

    return (
        <>
            <SearchBar placeholder='Buscá entre más de 5000 empresas' />
            <article id="company-list-container" className='bg-white'>
                <h2 className='font-bold'>Más recientes</h2>
                {services && filteredServices.length > 0 ? filteredServices.map((service, index) => (
                    <fieldset key={index}>
                        <Link href={`/pay/${service.id}`}><CompanyCard service={service} /></Link>
                    </fieldset>
                ))
                    : <p className='font-bold text-center mt-4'>Algo malo sucedió, haga <u className='hover:cursor-pointer' onClick={() => router.refresh()}>click aquí</u> para refrescar la página</p>}
            </article>
        </>

    )
}

export default CompanyList