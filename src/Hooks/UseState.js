// import { StyleSheet, Text, View, TextInput } from 'react-native'
// import React, { useState } from 'react'

// const UseState = () => {
//     const [name, setName] = useState('') //String
//     console.log(name);
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <TextInput
//                 placeholder='Enter your name'
//                 value={name}
//                 onChangeText={(text) => setName(text)}
//                 style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
//             />
//             <Text>{name}</Text>
//         </View>
//     )
// }
// export default UseState

// const styles = StyleSheet.create({})

// import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
// import React, { useState } from 'react'

// const UseState = () => {
//     const [count, setCount] = useState(0) //number

//     const Inc=()=>{
//         setCount((prevCount)=>prevCount+1) 
//     }

//     const dec=()=>{
//         setCount((prevCount)=>prevCount-1) 
//     }

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Button title='Increment'  onPress={Inc}/>
//             <Text>{count}</Text>
//             <Button title='Decrement'  onPress={dec}/>
//         </View>
//     )
// }
// export default UseState

// const styles = StyleSheet.create({})


// import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
// import React, { useState } from 'react'

// const UseState = () => {
//     const [obj, setObj] = useState({name:'Vaibhav',age:20,college:'kkw'}) //String
    
//     const UpdateData=()=>{
//         setObj({name:'Sakshi',age:20,college:'Ryk'})
//     }
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Button title='submit' onPress={UpdateData}/>
//             <Text>{obj.name}</Text>
//             <Text>{obj.age}</Text>
//             <Text>{obj.college}</Text>
//         </View>
//     )
// }
// export default UseState

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [fruit, setFruit] = useState(['Apple','banana']) //String

    const AddFruit=()=>{
        setFruit([...fruit,'Orange','pinapple'])
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Button title='submit' onPress={AddFruit}/>
            <Text>{fruit.join(',')}</Text>
        </View>
    )
}
export default UseState

const styles = StyleSheet.create({})

