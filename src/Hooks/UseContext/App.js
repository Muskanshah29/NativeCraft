import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import ChildA from './src/Hooks/UseContext/ChildA'

export const MyContext = createContext();

const App = () => {
  let data={
    name:"abc",
    age:20,
    college:"kkw"
  }
  return (
    <MyContext.Provider value={data}>
      <View>
        <ChildA />
      </View>
    </MyContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({})

