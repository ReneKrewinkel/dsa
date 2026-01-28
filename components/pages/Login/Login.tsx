// import { useState, useEffect, useContext } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { LoginInterface } from './Login.interface'
import LoginStyle from './Login.style'
import {router} from 'expo-router'
import {login, scramblePassword} from '@/lib'
import { useContext, useState } from 'react'
import {SecurityContext} from '@/context'

const Login = ({testID}:LoginInterface) => {

  const secCtx = useContext(SecurityContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const __doLogin = async () => {
    try {

      secCtx.setUsername(username)
      /// TODO: HASH PASSWORD
      secCtx.setPassword(password)
      await login(username, scramblePassword(password))

      router.push('/home')
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

    return (
        <View testID={ testID }
              style={ LoginStyle.View }>
            <Text style={ LoginStyle.Text }>Login Scherm</Text>

            <TouchableOpacity onPress={ () => __doLogin()}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Login
