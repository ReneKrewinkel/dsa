import * as SQLite from 'expo-sqlite'
import {config} from '@/config'

export const createJob = async (mechanicId: string, busId: string, jobDate: string) => {
  const db = await SQLite.openDatabaseAsync(config.DATABASE_NAME, { useNewConnection: true})
  const result = await db.runAsync(
    `INSERT INTO Job(mechanicId, busId, jobDate) 
        VALUES('${mechanicId}', '${busId}', '${jobDate}')`
  )

  const insertId = result.lastInsertRowId

  const row = await db.getFirstAsync(
    `SELECT * FROM Job WHERE id = ?`,
    [insertId]
  )

  return row
}


export const fetchJobs = async (): Promise<any[]> => {
  const db = await SQLite.openDatabaseAsync(config.DATABASE_NAME, { useNewConnection: true})
  const result = await db.getAllAsync<any>(`SELECT * FROM Job`)
  console.log(result)
  return result
}