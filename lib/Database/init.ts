import {config} from '@/config'
import * as SQLite from 'expo-sqlite'

export const initDatabase = async () => {
  const db = await SQLite.openDatabaseAsync(config.DATABASE_NAME)
  console.log('Database initialized')
  await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        PRAGMA encoding='UTF-8';
        CREATE TABLE IF NOT EXISTS Job (
          id INTEGER PRIMARY KEY NOT NULL,
          mechanicId TEXT,
          busId TEXT,
          jobDate TEXT        
        );
    `)


  await db.execAsync(`
        PRAGMA journal_mode = 'wal';
        PRAGMA encoding='UTF-8';
        CREATE TABLE IF NOT EXISTS Job2 (
          id INTEGER PRIMARY KEY NOT NULL,
          mechanicId TEXT,
          busId TEXT,
          jobDate TEXT        
        );
    `)
}


export const deleteDatabase = async () => {
  await SQLite.deleteDatabaseAsync(config.DATABASE_NAME)
  console.log('Database deleted')
}