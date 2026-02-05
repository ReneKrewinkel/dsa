// import { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { HeadingInterface } from './Heading.interface'
import HeadingStyle from './Heading.style'

const Heading = ({testID, text, size = 32 }:HeadingInterface) => {

    return(
        <View testID={ testID }
              style={ HeadingStyle.View }>
            <Text style={ [HeadingStyle.Text, { fontSize: size  }]}>{ text }</Text>
        </View>
    )

}

export default Heading
