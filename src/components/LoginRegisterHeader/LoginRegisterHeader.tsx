"use server"
import { getUserAccount } from "@/services/account/account.service";
import { getUserData } from "@/services/user/user.service";
import { cookies } from "next/headers";
import HeaderIcons from "../HeadersIcons/HeaderIcons";

const LoginRegisterHeader = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value ?? "";
  if(token !== ""){
    const userData:UserAccountType = await getUserAccount(token);
    const {firstname, lastname} = await getUserData(userData.user_id, token);
    return (
          <span id="profile-buttons">
            <HeaderIcons userFirstname={firstname} userLastname={lastname}/>
          </span>
    )

  }
}

export default LoginRegisterHeader