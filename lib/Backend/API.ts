import { Job } from '@/context/JobContext/JobContext.interface'
import { config } from '@/config'

export const fetchPlanning = async (userId: string, token: string): Promise<Job[]> => {
  try {
    const result = await fetch(config.BACKEND_PLANNING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        token: token,
        deviceId: config.DEVICE_TOKEN
      })
    })
  } catch (error) {
    console.error('Error fetching planning data:', error)
    throw error
  }

  return [
    { id: 'job1', mechanicId: userId, busId: 'bus1' },
    { id: 'job2', mechanicId: userId, busId: 'bus2' },
    { id: 'job3', mechanicId: userId, busId: 'bus3' }
  ]
}
