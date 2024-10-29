import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const UseStateHooks = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0) 

    const Inc=()=>{
        setCount((prevCount)=>prevCount+1) 
    }

    const dec=()=>{
        setCount((prevCount)=>prevCount-1) 
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Increment'  onPress={Inc}/>
            <Text>{count}</Text>
            <Button title='Decrement'  onPress={dec}/>
        </View>
    )
}
export default UseState

const styles = StyleSheet.create({})
  `;
    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!');
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native In UseState</Text>
            <Text style={styles.descText}>Description :-</Text>
            <Text style={styles.descriptionText}>
                In React, the useState Hook allows you to add state to functional components.
                useState returns an array with two values: the current state and a function to update it.
                The Hook takes an initial state value as an argument and returns an updated state value whenever
                the setter function is called.
                const [state, setState] = useState(initialState)
            </Text>
            <Text style={styles.codeTitle}>Example Code :-</Text>
            <View style={styles.codeContainer}>
                <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
                    <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
                <SyntaxHighlighter
                    language={language}
                    style={theme}
                    customStyle={styles.syntaxHighlighter}
                >
                    {codeString}
                </SyntaxHighlighter>
            </View>
        </ScrollView>
    );
};
export default UseStateHooks;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: '#E9F5EF',
    },
    title: {
        fontSize: 23,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2E4053',
        textAlign: 'center',
    },
    descText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2E4053',
        marginTop: 10
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#34495E',
        top: 5,
    },
    codeTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2E4053',
        marginTop: 10
    },
    codeContainer: {
        marginTop: 5,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative', // Ensure parent has relative positioning
    },
    syntaxHighlighter: {
        lineHeight: 10,
        fontSize: 14,
        padding: 10, // Add padding for better readability
    },
    copyButton: {
        position: 'absolute', // Position the button absolutely
        top: 5, // Distance from the top
        right: 5, // Distance from the right
        paddingVertical: 5, // Vertical padding for the button
        paddingHorizontal: 10, // Horizontal padding for the button
        backgroundColor: '#4CAF50', // Green background color
        borderRadius: 5,
        zIndex: 1, // Ensure button is above other elements
    },
    copyButtonText: {
        color: '#FFFFFF', // White text color
        fontSize: 15,
        fontWeight: 'bold',
    }
});

