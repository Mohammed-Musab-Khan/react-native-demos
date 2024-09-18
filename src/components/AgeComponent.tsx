import { View, Text } from 'react-native'
import React from 'react'
import st from './style'

const AgeComponent = () => {
  return (
    <View style={st.shadowStyle}>
      <Text>I am 24 years old.</Text>
    </View>
  )
}

export default AgeComponent