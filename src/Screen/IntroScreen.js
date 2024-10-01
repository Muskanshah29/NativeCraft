import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text>What is React-Native ?</Text>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    }
})