import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Weather{
    id: number,
    city: string,
    main: string,
    description: string,
    temperature: number
}

const WeatherData = [{
    id: 1,
    city: "Mumbai",
    main: "Clouds",
    description: "overcast clouds",
    temperature: 20
},
{
    id: 2,
    city: "Delhi",
    main: "Rain",
    description: "light rain",
    temperature: 25
},
{
    id: 3,
    city: "Thane",
    main: "Clear",
    description: "clear sky",
    temperature: 30
}
]

const WeatherApp = () => {
    const [city, setCity] = useState('Mumbai');
const [weather, setWeather] = useState(WeatherData[0]);

    const getWeather = () => {
        const weather = WeatherData.find((item) => item.city === city);
        setWeather(weather || WeatherData[0]);

    }

  return (
    <View>
      <Text style={styles.title}>Weather App</Text>

      <TextInput style={styles.input} value={city} onChangeText={(args) => {setCity(args)}} placeholder='Enter City' ></TextInput>
      <Text>City: {weather.city}</Text>
      <Text>{weather.temperature} C, {weather.main}</Text>
      <Button title='Get Weather' 
      onPress={() => {
        getWeather()
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    weather: {
      fontSize: 18,
      marginTop: 20,
    },
  });

export default WeatherApp