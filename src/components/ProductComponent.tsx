import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const ProductComponent = () => {
    let product = {cost: 200000, image:"assets/car.jpg", name:"Farari", rating:3.5, description:"This is a supercar"}
  return (
    <View>
      <Text style={{backgroundColor:'black',color:'white', padding:10, marginBottom:10}}>$ {product.cost}</Text>
      <Image source={require("../assets/car.jpg")} style={{height:200, width:200}} />
      <View style={{display:'flex', alignContent:'space-around'}}>
        <Text>{product.name}</Text>
        <Text>{product.rating}</Text>
      </View>
      <Text>{product.description}</Text>
      <Button title='Add To Cart' onPress={() => alert("Product Added to Cart")} color='black'/>
    </View>
  )
}

export default ProductComponent