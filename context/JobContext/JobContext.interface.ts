/// TODO: define types properly

export type Job = {
  id: string;
  mechanicId: string;
  busId: string
}

export interface JobContextInterface  {
  jobs: any, // Job[]
  setJobs: (job: any) => void // setJobs: (jobs: Job[]) => void
  currentJob: any, // Job
  setCurrentJob: (job: any) => void, // setCurrentJob: (job: Job) => void
}