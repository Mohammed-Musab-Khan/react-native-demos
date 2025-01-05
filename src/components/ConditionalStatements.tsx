import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ValidPassword = () => <Text style={styles.validPassword}>Valid Password</Text>
const InvalidPassword = () => <Text style={styles.inValidPassword}>Invalid Password</Text>

const Password = ({isValid}:{isValid:boolean}) => {
    if(isValid){
        return <ValidPassword/>
    }
    else{
      return <InvalidPassword/>
    }
}

const ConditionalStatements = () => {
  return (
    <View>
      <Password isValid={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  validPassword: {
    color: 'green',
    fontSize: 40
  },
  inValidPassword: {
    color: 'red',
    fontSize: 40
  }
});

export default ConditionalStatements