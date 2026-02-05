// import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PlanningInterface } from './Planning.interface'
import PlanningStyle from './Planning.style'
import { useContext, useState } from 'react'
import { JobContext } from '@/context'
import { router } from 'expo-router'
import { removeData, createJob, fetchJobs } from '@/lib'

const Planning = ({ testID, style, type, size, props }: PlanningInterface) => {
  const jobCtx = useContext(JobContext)

  const [databaseData, setDatabaseData] = useState<any>(null)
  const [allJobs, setAllJobs] = useState<any>(null)

  const __killStuff = async () => {
    await removeData('udId')
    await removeData('token')
    router.push('/')
  }

  const __fetchStuff = async () => {
    const data = await fetchJobs()
    setAllJobs(data)
  }

  const __addStuff = async () => {
    const result = await createJob('nr 1', 'Bus 2', '2026-01-28')
    setDatabaseData(result)
  }

  return (
    <View testID={testID} style={PlanningStyle.View}>
      <Text>{JSON.stringify(jobCtx.jobs)}</Text>

      <Text>{JSON.stringify(databaseData)}</Text>

      <Text>{JSON.stringify(allJobs, null, 2)}</Text>

      <TouchableOpacity onPress={() => router.push('/overview')}>
        <Text>Overview Pagina</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity onPress={() => __killStuff()}>*/}
      {/*    <Text>Kill stuff</Text>*/}
      {/*</TouchableOpacity>*/}

      <TouchableOpacity onPress={() => __addStuff()}>
        <Text>Add stuff</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => __fetchStuff()}>
        <Text>Fetch stuff</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Planning
