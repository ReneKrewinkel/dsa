import { v4 as uuidv4 } from 'uuid'

export const useMyId = () => {
  const myId = uuidv4()
  return myId
}
