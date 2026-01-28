// import { useState, useEffect, useContext } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { PlanningInterface } from './Planning.interface'
import PlanningStyle from './Planning.style'
import { useContext } from 'react'
import { JobContext } from '@/context'
import {router} from 'expo-router'
import {removeData} from '@/lib'

const Planning = ({testID, style, type, size, props }:PlanningInterface) => {

    const jobCtx = useContext(JobContext)


  const __killStuff = async () => {
    await removeData('udId')
    await removeData('token')
    router.push('/')
  }

    return(
        <View testID={ testID }
              style={ PlanningStyle.View }>
            <Text>
              { JSON.stringify(jobCtx.jobs) }
            </Text>


          <TouchableOpacity onPress={ () => __killStuff() }>
            <Text>Kill stuff</Text>
          </TouchableOpacity>
        </View>
    )

}

export default Planning
