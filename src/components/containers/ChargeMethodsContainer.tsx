"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaRegCircleUser } from 'react-icons/fa6'
import CvuAliasCard from '../Cards/CVU-Alias-Card/CvuAliasCard'
import { useRouter } from 'next/navigation'

type ChargeMethodsParams = {
    cvu: string,
    alias: string,
}

const ChargeMethodsContainer = ({cvu, alias} : ChargeMethodsParams) => {
    const [change, setChange] = useState<boolean>(false);
    const router = useRouter();
    const handleChange = () => {
        setChange(!change);
    }

    if (!change) {
        return (
            <>
                <div id="transfer-card" className='bg-blck' onClick={handleChange}>
                    <div>
                        <FaRegCircleUser id="user-circle-icon"/>
                        <h3 className=''>Transferencía bancaria</h3>
                    </div>
                    <FaArrowRight />
                </div>
                <div id="select-card" className='bg-blck' onClick={()=>router.push("/charge/with-card")}>
                    <div>
                        <Image src="/cards-icon.png" alt="select-card" width={128} height={128} />
                        <h3 className=''>Seleccionar tarjeta</h3>
                    </div>
                    <FaArrowRight />
                </div>
            </>
        )
    } else {
        return (
            <>
                <CvuAliasCard alias={alias} cvu={cvu} />
            </>
        )
    }
}

export default ChargeMethodsContainer