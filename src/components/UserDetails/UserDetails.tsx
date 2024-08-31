import React from 'react'
import Image from 'next/image'
import "./userDetails.css"

type UserDetailsParams = {
    userData: UserType
}

function maskPassword (pass:string):string {
    return '*'.repeat(pass.length);
}

const UserDetails = ({ userData }: UserDetailsParams) => {
    const password = String(userData.password);
    const maskedPassword = maskPassword(password);
    const firstAndLastName = userData.firstname + " " + userData.lastname
    return (
        <article id="user-details">
            <h3>Tus datos</h3>
            <div id="details-container">
                <ul>
                    <li id="detail-header">Email</li>
                    <li id="user-info">{userData.email}</li>
                </ul>
                <ul>
                    <li id="detail-header">Nombre y apellido</li>
                    <li id="user-info">{firstAndLastName}</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10} /></li>
                </ul>
                <ul>
                    <li id="detail-header">CUIT</li>
                    <li id="user-info">20{userData.dni}4</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10} /></li>
                </ul>
                <ul>
                    <li id="detail-header">Teléfono</li>
                    <li id="user-info">{userData.phone}</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10} /></li>
                </ul>
                <ul>
                    <li id="detail-header">Contraseña</li>
                    <li id="user-info">{maskedPassword}</li>
                    <li className='cursor-pointer'><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10} /></li>
                </ul>
            </div>
        </article>
    )
}

export default UserDetails