import { useEffect, useState } from 'react'
import { initDatabase } from '@/lib/Database'

export const useCheckDatabase = () => {
  const [dbExists, setDbExists] = useState<boolean | null>(null)

  useEffect(() => {
    initDatabase()
      .then(() => setDbExists(true))
      .catch(() => setDbExists(false))
  }, [])

  return { dbExists }
}
