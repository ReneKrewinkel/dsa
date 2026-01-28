import { useState, useEffect } from 'react'
import {retrieveData, validateLogin} from '@/lib'

export const useValidate = () => {
  const [error, setError] = useState<string | null>(null)
  const [isLoaded, setLoaded] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)


  useEffect(() => {
    let mounted = true

    const run = async () => {
      try {
        const udId = await retrieveData('udId')
        const token = await retrieveData('token')

        if (!udId || !token) {
          if (mounted) {
            setError('Missing credentials')
            setLoaded(true)
          }
          return
        }

        const valid = await validateLogin(udId, token)

        if (mounted) {
          setIsValid(valid)
          setLoaded(true)
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message)
          setLoaded(true)
        }
      }
    }

    run()
    return () => { mounted = false }
  }, [])


  return {error, isLoaded, isValid}
}