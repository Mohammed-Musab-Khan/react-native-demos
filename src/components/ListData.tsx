import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    // [] List/Array | {}  Object

    const fruits = ["Apple", "Banana", "Grapes",  "Mango", "Orange"]

  return (
    <View>
      <Text> List of Fruits </Text>
        <FlatList data={fruits} 
                renderItem={(fruit) => { 
                    return <Text>Fruit is {fruit.item}</Text> 
                }
        } />
    </View>
  )
}

export default ListData