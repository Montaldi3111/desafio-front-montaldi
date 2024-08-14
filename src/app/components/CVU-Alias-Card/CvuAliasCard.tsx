import React from 'react'
import { FaRegClone } from 'react-icons/fa6';
import Image from "next/image"
import "./cvuAliasCard.css";
const CvuAliasCard = () => {
  return (
    <article id="cvu-alias-card">
        <p>Copia tu CVU o alias para ingresar o transferir dinero desde otra cuenta</p>
        <div id="cvu-container">
            <ul>
                <li className='font-bold text-lg text-ylw'>CVU</li>
                <li className='text-lightGray'>10000012151423</li>
            </ul>
            <Image src="/clone-icon.png" alt="copy-to-clipboard" width={35} height={10}/>
        </div>
        <div id="alias-container">
            <ul>
                <li className='font-bold text-lg text-ylw'>Alias</li>
                <li className='text-lightGray'>elaliasesfalsoquerido</li>
            </ul>
            <Image src="/clone-icon.png" alt="copy-to-clipboard" width={35} height={10}/>
        </div>
    </article>
  )
}

export default CvuAliasCard