
import React from 'react'
import "./userDetails.css"
import UserDetailsContainer from '../containers/UserDetailsContainer'
import { getUserData } from '@/services/user/user.service'
import { getCookie } from 'cookies-next'

const UserDetails = () => {
    return (
        <article id="user-details">
            <h3>Tus datos</h3>
            <UserDetailsContainer />
        </article>
    )
}

export default UserDetails