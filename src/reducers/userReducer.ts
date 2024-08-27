import { STORE_DATA } from "@/types/actions.types";
import { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    token: string,
    user_id: number,
    accountId: number
}

const initialState:UserState = {
    token: "",
    user_id: 0,
    accountId: 0
}


export default function userReducer(state = initialState, action: PayloadAction<UserDataType>) {

    switch(action.type){
        case STORE_DATA: {
            return {
                ...state,
                user_id: action.payload.user_id,
                accountId: action.payload.accountId,
                token: action.payload.token,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }

}