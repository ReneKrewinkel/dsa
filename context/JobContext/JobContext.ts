import { createContext } from 'react'
import {JobContextInterface} from '@/context/JobContext/JobContext.interface'

export const JobContext = createContext<JobContextInterface>({
  currentJob: undefined,
  setCurrentJob(job: any): void {},
  jobs: undefined,
  setJobs(job: any): void {}
})