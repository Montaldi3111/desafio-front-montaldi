import React from 'react'
import Image from 'next/image'
import "./userDetails.css"
const UserDetails = () => {
    return (
        <article id="user-details">
            <h3>Tus datos</h3>
            <div id="details-container">
                <ul>
                    <li id="detail-header">Email</li>
                    <li id="user-info">ignaciomontaldi@gmail.com</li>
                </ul>
                <ul>
                    <li id="detail-header">Nombre y apellido</li>
                    <li id="user-info">Ignacio Montaldi</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10}/></li>
                </ul>
                <ul>
                    <li id="detail-header">CUIT</li>
                    <li id="user-info">20875586395</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10}/></li>
                </ul>
                <ul>
                    <li id="detail-header">Teléfono</li>
                    <li id="user-info">387698521</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10}/></li>
                </ul>
                <ul>
                    <li id="detail-header">Contraseña</li>
                    <li id="user-info">***************</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10}/></li>
                </ul>
            </div>
        </article>
    )
}

export default UserDetails