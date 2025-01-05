import { View, Text, Button } from 'react-native'
import { useState } from 'react'

const On = () => <Text>On</Text>
const Off = () => <Text>Off</Text>

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <View>
            { isOn ? On() : Off() }
            <Button title='Toggle' onPress={() => setIsOn(!isOn)} />
        </View>
    )
}

export default ToggleButton