import {Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router'
import { useValidate } from '@/hooks'
import { useEffect } from "react"
import { Spinner } from '@/components/molecules'
import { Login } from '@/components/pages'

export default function Index() {

  const { error, isLoaded, isValid } = useValidate()

  useEffect( () => {
    if (isValid) router.push('/home')
  }, [isValid, isLoaded])

   return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index.tsx</Text>

      { !isValid && <Login /> }
      { !isLoaded && <Spinner /> }
      { error && <Text>Error: {error}</Text> }
    </View>
  )
}
