import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ChildB from './ChildB'
import { MyContext } from '../../../App'

const ChildA = () => {
    // const {name,age} = useContext(MyContext);
    return (
        <View>
            {/* <Text>This is ChildA Screen</Text> */}
            {/* <Text>{name}</Text> */}
            <ChildB />
        </View>
    )
}

export default ChildA

const styles = StyleSheet.create({})