import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
import React, { useRef } from 'react'

const UseRef = () => {
    const input=useRef()
    const Update=()=>{
        input.current.focus();
        input.current.clear();
        input.current.setNativeProps({
            fontSize:24,
            color:'red'
        })
    }
  return (
    <View style={{flex:1,padding:10,}}>
      <TextInput ref={input} placeholder='enter somthing...' style={{borderWidth:1,margin:10}}/>
      <TextInput placeholder='enter somthing...' style={{borderWidth:1,margin:10}}/>
      <Button title="submit" onPress={Update}/>
    </View>
  )
}

export default UseRef

const styles = StyleSheet.create({})