import { STORE_DATA } from "@/types/actions.types";

export const store_data = (userData:UserDataType) => ({type: STORE_DATA, payload: userData})
