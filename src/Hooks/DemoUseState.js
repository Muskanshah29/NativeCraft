import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"



// const DemoUseState = () => {
//     const [name, setName] = useState('')
//     console.log(name)
//     return (
//         <View style={{justifyContent:'center',alignItems:'center',paddingTop:50}}>
//             <TextInput
//                 placeholder="Enter your name"
//                 value={name}
//                 onChangeText={(text)=>setName(text)}
//                 style={{borderColor:'black',borderWidth:1,padding:20,fontSize:20}}
//             />
//             <Text>{name}</Text>
//         </View>
//     )
// }
// export default DemoUseState

const DemoUseState = () => {
    const [count , setCount] = useState(0)

    const Inc = ()=>{
        setCount((prevCount)=>prevCount+1)
    }
    const Dec = ()=>{
        setCount((prevCount)=>prevCount-1)
    }
    return(
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:150}}>
          <Button title="Increament" onPress={Inc}/>
          <Text>{count}</Text>
          <Button title="decreament" onPress={Dec}/>
        </View>
    )
}
export default DemoUseState