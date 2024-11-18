import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

const CarComponent = () => {
  // The value(eg : 200000, 300, 300, "Lambo") of the variable will come flying from somewhere
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRating = 3.5;
  const carDescription = "Here is a car description for the car";

  return (
    <View>
      <Text style={styles.pill}>${price}</Text>
      <Image 
        source={require('../assets/car.jpg')} 
        style={{width: imageWidth, height: imageHeight}} 
      />
      <Text style={styles.heading}>{carName}</Text>
      <Text>{carDescription}</Text>
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>       
  )
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: 'black',
    color:'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    width: 80,
    marginTop: 20,
    textAlign: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: 'center',
    width: 120
  },
  buttonText:{
    color:  'white',
    padding:  10
  }
})

export default CarComponent