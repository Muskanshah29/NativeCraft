import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import { useState } from 'react';

const PostApi = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDesc] = useState('');

    console.log(title);

    const handlePost = () => {
        // fetch(url,method,headers,body)

        const product = {
            title: title,
            price: parseFloat(price),
            description: description
        }
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
            .then((responce) => responce.json())
            .then((data) =>
                console.log(data),
                Alert.alert("data send Successfully")
            )
            .catch((error) => console.log(error))
    }
    return (
        <View style={styles.container}>
            <Text>Post Api</Text>
            <Text style={styles.title}>Title</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Product title'
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.title}>Price</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Product title'
                keyboardType='numeric'
                value={price}
                onChangeText={setPrice}
            />

            <Text style={styles.title}>description</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Product title'
                value={description}
                onChangeText={setDesc}
            />

            <Button title='AddProduct' style={styles.btn} onPress={handlePost} />
        </View>
    )
}

export default PostApi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 5
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        marginVertical: 5
    },
    btn: {
        top: 10
    }
})