import { View, Text } from 'react-native'
import React from 'react'

const DynamicContext = () => {
    const username = "Mohammed Musab Khan"
    const multiply = (a: number, b: number) => a+b
    let me = {name:"Mohammed Musab", age: 22}

  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2 * 2  = {multiply(2, 2)}</Text>
    </View>
  )
}

export default DynamicContext