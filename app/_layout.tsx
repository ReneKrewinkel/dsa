import { SecurityContext, JobContext } from '@/context'
import { Stack } from 'expo-router'
import { useState, useEffect, useId } from 'react'
import { config } from '@/config'
import { useCheckDatabase } from '@/hooks'
import { useMyId } from '@/hooks/useMyId/useMyId'

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [token, setToken] = useState<string | undefined>(undefined)
  const [username, setUsername] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [udId, setUdId] = useState<string | undefined>(undefined)

  const [jobs, setJobs] = useState<any>(undefined)
  const [currentJob, setCurrentJob] = useState<any>(undefined)

  const { dbExists } = useCheckDatabase()

  const SecurityContextValue = {
    token,
    setToken,
    username,
    setUsername,
    password,
    setPassword,
    udId,
    setUdId,
    deviceToken: config.DEVICE_TOKEN
  }

  return (
    <SecurityContext.Provider value={SecurityContextValue}>
      <JobContext.Provider value={{ jobs, setJobs, currentJob, setCurrentJob }}>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='home' options={{ headerShown: false }} />
          <Stack.Screen name='overview' options={{ headerShown: false }} />
        </Stack>
      </JobContext.Provider>
    </SecurityContext.Provider>
  )
}
