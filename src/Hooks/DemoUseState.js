import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"



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

// 2nd example 
// const DemoUseState = () => {
//     const [count , setCount] = useState(0)

//     const Inc = ()=>{
//         setCount((prevCount)=>prevCount+1)
//     }
//     const Dec = ()=>{
//         setCount((prevCount)=>prevCount-1)
//     }
//     return(
//         <View style={{justifyContent:'center',alignItems:'center',paddingTop:150}}>
//           <Button title="Increament" onPress={Inc}/>
//           <Text>{count}</Text>
//           <Button title="decreament" onPress={Dec}/>
//         </View>
//     )
// }
// export default DemoUseState


// const DemoUseState = () =>{
//     const  [obj , setObj] = useState({name:'Gayatri', age:22,city:'Nashik'})
//     const upData = ()=>{
//             setObj({name:'Mayuri',age:23,city:'Pune'})
//     }
//     return(
//         <View style={styles.Container}> 
//             <Button title="Submit" onPress={upData}/> 
//             <Text>{obj.name}</Text>
//             <Text>{obj.age}</Text>
//             <Text>{obj.city}</Text>
//         </View>
//     )
// }
// export default DemoUseState

// const styles = StyleSheet.create({
//     Container :{
//          justifyContent:'center',
//          alignItems:'center',
//          paddingTop:300
//     }
// })

const DemoUseState = ()=>{

    const [fruit,setFruit] = useState(['Apple','Banana'])
    const FirutData = ()=>{
        setFruit([...fruit,'orange','PineApple']) // ...fruit add a name
    }
    return(
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:350}}>
            <Button title="submit" onPress={FirutData}/>
            <Text>{fruit.join(',')}</Text>
        </View>
    )
}
export default DemoUseState