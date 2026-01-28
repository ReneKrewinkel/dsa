import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const Overview = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>Overview Component</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Overview
