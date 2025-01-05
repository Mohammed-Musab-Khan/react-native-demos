import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState(String)
    return (
        <View style={{backgroundColor:color, width:'100%', height:'100%'}}>
            <Text>Pick a Color</Text>
            <Text>{color?color:"No color selected"}</Text>
            <Button title="Red" color={'red'} onPress={() => setColor('red')} />
            <Button title="Green" onPress={() => setColor('green')} />
            <Button title="Blue" onPress={() => setColor('blue')} />
            <Button title="Yellow" onPress={() => setColor('yellow')} />
        </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        width:30,
        margin:10,
        padding:10,
        borderRadius:'100%'
    }
})

export default ColorPicker