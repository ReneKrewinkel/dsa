import { Job } from '@/context/JobContext/JobContext.interface'
import { config } from '@/config'


export const testTimeout = (ms: number = 2000) => new Promise( (resolve, reject) => {

  const timeout = setTimeout(() => {
    timeout && clearTimeout(timeout)
    reject('Timeout reached')
  }, ms)

  fetch(config.BACKEND_PLANNING_URL)
  .then(response => response.json())
    .then(data => {
      timeout && clearTimeout(timeout)
      console.log('Data received:', data)
      resolve(data)
    })
    .catch(error => {
      timeout && clearTimeout(timeout)
      console.error('Error fetching data:', error)
      reject(error)
    })
    .finally(() => {
      timeout && clearTimeout(timeout)
    })
})



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

    // if (result.ok) {
    //   insertIntoDatabase(result.data)
    // }
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

export const sendPlanningData = async (data: any) => {

  /// SQL uitvoeren...
  try {
    const response = await fetch(config.BACKEND_PLANNING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()
    console.log('Success:', responseData)


    /// delete from database...
  } catch (error) {
    console.error('Error sending planning data:', error)
  }
}