import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
  const [friends, setFriends] =  useState(['Alex', 'John', 'Sam'])

  const addOne = () => setFriends([...friends, 'Musab'])
  const removeOne = () => setFriends(friends.filter(item => item !== 'John'))

  const updateFriend = () => setFriends(friends.map(f => f === 'Musab' ? 'Jack' : f))

  return (
    <View>
      <FlatList data={friends} keyExtractor={(friend) => friend} renderItem={({item}) => <Text>{item}</Text>} />

      <Button title='Add Friend' onPress={addOne} />
      <Button title='Remove Friend' onPress={removeOne} />
      <Button title='Update Friend' onPress={updateFriend} />
    </View>
  )
}

export default UpdateArray