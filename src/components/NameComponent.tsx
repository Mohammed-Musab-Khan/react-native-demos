import { View, Text } from 'react-native'
import React from 'react'
import st from './style'

const NameComponent = () => {
  return (
    // <View style={st.shadowStyle}>
    <View style={{padding: 20,
      width: "80%",
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width:0, height:2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5}}> 
      <Text style={{color:'black', fontSize:15, fontWeight:'bold', fontStyle:'normal'}}>My Name is Mohammed Musab Khan</Text>
    </View>
  )
}

export default NameComponent