import {Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router'
import {Planning} from '@/components/pages'
import { useContext, useEffect, useState } from "react"
import {JobContext, SecurityContext} from '@/context'
import {fetchPlanning} from '@/lib'
import {Spinner} from '@/components/molecules'

export default function Home() {

  const [isLoaded, setLoaded] = useState(false)

  const secCtx = useContext(SecurityContext)
  const jobCtx = useContext(JobContext)

  useEffect(() => {
    fetchPlanning(secCtx.udId as string, secCtx.token as string)
      .then((jobs) => {
        console.log(jobs)
        jobCtx.setJobs(jobs)
        setLoaded(true)
      })
      .catch((error) => {
        console.error("Error in Home while fetching planning:", error)
      })
  }, [])


  return (
    <>
      { isLoaded &&  <Planning /> }
      { !isLoaded && <Spinner /> }
    </>
  );
}
