import { createContext } from 'react'
import {SecurityContextInterface} from '@/context/SecurityContext/SecurityContext.interface'


export const SecurityContext = createContext<SecurityContextInterface>({
  deviceToken: '',

  token: undefined,
  setToken(token: string): void {},

  password: '',
  setPassword(password: string): void {},

  udId: '',
  setUdId(udId: string): void {},

  username: '',
  setUsername(username: string): void {},

})