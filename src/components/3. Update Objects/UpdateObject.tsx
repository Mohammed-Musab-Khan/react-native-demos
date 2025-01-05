import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {
    const [movie, setMovie] = useState({
        title: 'Equalizer 3',
        ratings: 7
    })

    const handleClick = () => {
        setMovie({...movie, ratings: 5})
    }
  return (
    <View>
      <Text>Title: {movie.title}</Text>
      <Text>Ratings: {movie.ratings}</Text>
      <Button title='Change Ratings' onPress={handleClick} />
    </View>
  )
}

export default UpdateObject