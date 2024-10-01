import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.txt}>Welcome to NativeCraft</Text> */}
       <Text> HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fefae0',
        alignItems:'center',
       justifyContent:'center'
    },
    txt:{
        color:'#0606c38',
        fontSize:35,
        fontWeight:'bold'
    }
})