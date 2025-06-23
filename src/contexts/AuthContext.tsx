import { createContext, ReactNode, useState } from "react";
import { UserDTO } from "@dtos/userDTO";

export type AuthContextDataProps = {
  user: UserDTO
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: "6",
    name: "Heli",
    email: "heli@email.com",
    avatar: "fdjfkhsdkjfsd"
  })

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}