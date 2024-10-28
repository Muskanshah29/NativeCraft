import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../../App';

const ChildB = () => {
    const {name,college,age} = useContext(MyContext);
    return (
        <View>
            <Text>This is ChildB Component</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{college}</Text>
        </View>
    )
}

export default ChildB

const styles = StyleSheet.create({})