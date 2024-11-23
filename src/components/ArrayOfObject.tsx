import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    // Array: [] Object: {} Array of object : [{}, {}, {}]
    const countries = [
        {id:  1, name: 'India'},
        {id: 2, name: 'Qatar'},
        {id: 3, name: 'Palestine'},
        {id: 4, name: 'Russia'},
        {id: 5, name: 'Africa'},
        {id: 6, name: 'Bosnia'},
        {id: 7, name: 'Herzogovina'},
        {id: 8, name: 'China'}
    ]
  return (
    <View>
      <Text>Array Of Object</Text>
        <FlatList data={countries} 
                    renderItem={(country) => {
                        return <Text>The Id is {country.item.id} and the country is{country.item.name}</Text>
                    }} />
    </View>
  )
}

export default ArrayOfObject