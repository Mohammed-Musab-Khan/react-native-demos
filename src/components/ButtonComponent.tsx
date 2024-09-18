import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Button title='Alter' 
      onPress={() => alert("you pressed me")}
      color="teal"/>
      <Pressable onPress={() => console.log("Pressed")} >
        <Text style={{color: "teal"}} >Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("On Pressed IN")} >
        <Text style={{color: "coloa"}} >Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("On Pressed Out")} >
        <Text style={{color: "red"}} >Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("On Long Pressed")} >
        <Text style={{color: "crimson"}} >Press Me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent