export interface SecurityContextInterface {
  username?: string,
  password?: string,
  udId?: string,
  deviceToken?: string,
  token?: string,
  setToken: (token: string) => void,
  setUdId: (udId: string) => void,
  setUsername: (username: string) => void,
  setPassword: (password: string) => void,
}