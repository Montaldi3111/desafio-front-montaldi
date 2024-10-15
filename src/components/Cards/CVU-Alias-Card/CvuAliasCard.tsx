'use client'
import React from 'react'
import Image from "next/image"
import "./cvuAliasCard.css";
import { toast, Toaster } from 'sonner';
import { FaRegClone } from 'react-icons/fa6';

type CvuAliasCardParams = {
    alias: string,
    cvu: string,
}

const CvuAliasCard = ({ alias, cvu }: CvuAliasCardParams) => {

    const copyAlias = (text: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success('Alias copiado al portapapeles con exito');
            });
        } else {
            toast.error('Su navegador no soporta el acceso al portapapeles');
        }
    }

    const copyCVU = (text: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success('CVU copiado al portapapeles con exito');
            });
        } else {
            toast.error('Su navegador no soporta el acceso al portapapeles');
        }
    }


    return (
        <article id="cvu-alias-card">
            <p>Copia tu CVU o alias para ingresar o transferir dinero desde otra cuenta</p>
            <div id="cvu-container">
                <ul>
                    <li className='font-bold text-lg text-ylw'>CVU</li>
                    <li id="cvu" className='text-lightGray'>{cvu}</li>
                </ul>
                <FaRegClone id="clone-icon" className='cursor-pointer rotate-90 text-ylw' onClick={(): void => copyCVU(cvu)} />

            </div>
            <div id="alias-container">
                <ul>
                    <li className='font-bold text-lg text-ylw'>Alias</li>
                    <li id="alias" className='text-lightGray'>{alias}</li>
                </ul>
                <FaRegClone id="clone-icon" className='cursor-pointer rotate-90 text-ylw' onClick={(): void => copyAlias(alias)} />
            </div>
        </article>
    )
}

export default CvuAliasCard