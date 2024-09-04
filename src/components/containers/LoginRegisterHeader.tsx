import { getUserAccount } from "@/services/account/account.service";
import { getUserData } from "@/services/user/user.service";
import { cookies } from "next/headers";
import Link from "next/link"
import { FaBars } from "react-icons/fa6";

const HeaderContainer = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value ?? "";
  if(token !== ""){
    const userData:UserAccountType = await getUserAccount(token);
    const {firstname, lastname} = await getUserData(userData.user_id, token);
    const initials = firstname[0].toUpperCase() + lastname[0].toUpperCase();
    return (
          <span id="profile-buttons">
            <Link href={"/profile"} id="profile-link"><b id="user-initials">{initials}</b><b id="user-hi-message">Hola, {firstname + " " + lastname}</b></Link>
            <FaBars id="burguer-menu"/>
          </span>
    )

  }
}

export default HeaderContainer