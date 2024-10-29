
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    // useEffect(function,dependency)
    useEffect(() => {
        console.log("Hello");
    })

    useEffect(()=>{
        console.log("hii");
    },[])


    const [count, setCount] = useState(0) //number

    useEffect(()=>{
        console.log("Hello3")
    },[count])

    const Inc = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const dec = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Increment' onPress={Inc} />
            <Text>{count}</Text>
            <Button title='Decrement' onPress={dec} />
        </View>
    )
}
export default UseEffect