'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store'
import { store_data } from '@/actions/userActions'
import { getCookie } from 'cookies-next'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore();
    const userData:UserDataType = {
        user_id: getCookie("userLogged") as any,
        accountId: getCookie("accountId") as any,
        token: getCookie("token") as string,
    }
    storeRef.current.dispatch(store_data(userData))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}