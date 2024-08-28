"use client"
import React from 'react'
import { FaRegClone } from 'react-icons/fa6';
import Image from "next/image"
import "./cvuAliasCard.css";
import { toast, Toaster } from 'sonner';
const CvuAliasCard = () => {
    const copyAlias = (text:string) => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(text).then(() => {
                toast.success('Alias copiado al portapapeles con exito');
            });
        } else {
            toast.error('Su navegador no soporta el acceso al portapapeles');
        }
    }

    const copyCVU = (text:string) => {
        if(navigator.clipboard){
            navigator.clipboard.writeText(text).then(() => {
                toast.success('CVU copiado al portapapeles con exito');
            });
        } else {
            toast.error('Su navegador no soporta el acceso al portapapeles');
        }
    }


    return (
        <article id="cvu-alias-card">
        <Toaster richColors closeButton position={'bottom-left'}/>
        <p>Copia tu CVU o alias para ingresar o transferir dinero desde otra cuenta</p>
        <div id="cvu-container">
            <ul>
                <li className='font-bold text-lg text-ylw'>CVU</li>
                <li className='text-lightGray'>10000012151423</li>
            </ul>
            <div className='cursor-pointer p-2' onClick={() => copyCVU("10000005648621")}>
            <Image src="/clone-icon.png" alt="copy-to-clipboard" width={35} height={10}/>
            </div>
        </div>
        <div id="alias-container">
            <ul>
                <li className='font-bold text-lg text-ylw'>Alias</li>
                <li className='text-lightGray'>elaliasesfalsoquerido</li>
            </ul>
            <div className='cursor-pointer p-2' onClick={() => copyAlias("estealiasesfalso")}>
            <Image src="/clone-icon.png"alt="copy-to-clipboard" width={35} height={10}/>
            </div>
        </div>
    </article>
  )
}

export default CvuAliasCard