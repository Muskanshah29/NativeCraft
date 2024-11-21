import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetApi1 = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        FeatchData();
    })

    const FeatchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((responce) => responce.json())
            .then((JsonData) => setData(JsonData))
            .catch((error) => console.log("Api is not fetch", error))
    }
    return (
        // <View>
        //     {data.length > 0 ? (
        //         data.map((item) => (
        //             <View key={item.id}>
        //                 <ScrollView>
        //                     {/* <Text>{item.id}</Text> */}
        //                     <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
        //                     <Text>{item.title}</Text>
        //                     <Text>{item.price}</Text>
        //                     <Text>{item.description}</Text>
        //                     <Text>{item.category}</Text>
        //                     <Text>-----------------------------</Text>
        //                 </ScrollView>
        //             </View>
        //         ))
        //     ) : (<Text>Data is empty</Text>)}

        // </View>

        <View>
            {data.map((item) => (
                <View key={item.id}>
                    <ScrollView>
                        {/* <Text>{item.id}</Text> */}
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                        <Text>{item.title}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.category}</Text>
                        <Text>-----------------------------</Text>
                    </ScrollView>
                </View>
            ))}
        </View>
    )
}

export default GetApi1

const styles = StyleSheet.create({})