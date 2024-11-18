import { View, Text } from 'react-native'
import React from 'react'

const DynamicContext = () => {
    const username = "Mohammed Musab Khan"
    const multiply = (a: number, b: number) => a*b
    let me = {name:"Mohammed Musab", age: 22}

  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2 * 4  = {multiply(2, 4)}</Text>
      <Text>My name is {me.name}, I am  {me.age} years old</Text>

    </View>
  )
}

export default DynamicContext