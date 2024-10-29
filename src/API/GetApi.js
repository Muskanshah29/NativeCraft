import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
const GetApi = () => {
    useEffect(() => {
        getApiData()
    }, [])

    const [data, setData] = useState([]);
    // console.log(data)

    const getApiData = async () => {
        try {
            let result = await fetch('https://fakestoreapi.com/products');
            let Data = await result.json();
            setData(Data);
            // console.log(Data);
        }
        catch (error) {
            console.log("Error of Fetching data", error)
        }
    }
    return (
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

export default GetApi

const styles = StyleSheet.create({})