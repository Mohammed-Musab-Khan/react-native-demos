import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import st from './style'

const ProfileCardComponent = () => {
  return (
    <View style={[styles.container]}>
        <Image source={require('../assets/Mohammed Musab Khan.jpeg')} style={styles.imageStyle} />
        <Text style={styles.heading}>Mohammed Musab Khan</Text>
        <Text style={styles.text}>My name is Mohammed Musab Khan and I love coding.</Text>
        <Button title='Press Me' onPress={() => alert("Thank you for checking my profile")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: 50,
    paddingBottom: 40,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  heading:{
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    marginBottom: 20
  }
})

export default ProfileCardComponent