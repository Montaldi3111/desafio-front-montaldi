import "./userDetails.css"
import EditUserProfileForm from '../Forms/EditUserProfileForm';
import { cookies } from 'next/headers';

type UserDetailsParams = {
    userId: number,
    userData: UserType
}

const UserDetails = ({ userId, userData }: UserDetailsParams) => {
    const cookiesStore = cookies();
    const password:string = cookiesStore.get("password")?.value ?? "";
    return (
        <article id="user-details">
            <h3>Tus datos</h3>
            <div id="details-container">
                <ul>
                    <li id="detail-header">Email</li>
                    <li id="user-info">{userData.email}</li>
                </ul>
                <EditUserProfileForm userId={userId} userData={userData} pass={password}/>
            </div>
        </article>
    )
}

export default UserDetails