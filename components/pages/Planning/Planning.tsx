// import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PlanningInterface } from './Planning.interface'
import PlanningStyle from './Planning.style'
import { useContext, useState } from 'react'
import { JobContext } from '@/context'
import { router } from 'expo-router'
import {removeData, createJob, fetchJobs, sendPlanningData, testTimeout} from '@/lib'
import {Heading} from '@/components/atoms'
import {PrintView, ShowCamera, Signature} from '@/components/organisms'

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

    testTimeout(2000).then((data) => {
      setAllJobs(data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })

    // const data = await fetchJobs()
    // setAllJobs(data)
  }

  const __addStuff = async () => {
    const result = await createJob('nr 1', 'Bus 2', '2026-01-28')
    setDatabaseData(result)
  }

  const __sendStuff = async () => {
    const result = await sendPlanningData(allJobs)
    console.log(result)
  }

  return (
    <View testID={testID} style={PlanningStyle.View}>

      <Heading text="Planning" />
      <Heading text={"Voor Vandaag"} size={18} />


      {/*<ShowCamera />*/}
      {/*<Signature />*/}

      <PrintView />

      {/*<TouchableOpacity onPress={() => router.push('/overview')}>*/}
      {/*  <Text>Overview Pagina</Text>*/}
      {/*</TouchableOpacity>*/}

      {/*<TouchableOpacity onPress={() => __killStuff()}>*/}
      {/*    <Text>Kill stuff</Text>*/}
      {/*</TouchableOpacity>*/}

      {/*<TouchableOpacity onPress={() => __addStuff()}>*/}
      {/*  <Text>Add stuff</Text>*/}
      {/*</TouchableOpacity>*/}

      {/*<TouchableOpacity onPress={() => __fetchStuff()}>*/}
      {/*  <Text>Fetch stuff</Text>*/}
      {/*</TouchableOpacity>*/}

      {/*{*/}
      {/*  allJobs &&*/}
      {/*  <TouchableOpacity onPress={() => __sendStuff()}>*/}
      {/*      <Text>Bon Gereed melden</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*}*/}


    </View>
  )
}

export default Planning
