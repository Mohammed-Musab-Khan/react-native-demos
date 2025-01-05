import { View, Text } from 'react-native'
import React from 'react'

interface Props{
    name: string,
    age: number,
    hobbies: string[]
}

const ChildComponent = (props:Props) => {
   
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
      <Text>Hobbies: {props.hobbies}</Text>
    </View>
  )
}

export default ChildComponent