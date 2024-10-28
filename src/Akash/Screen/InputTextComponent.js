import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import React, { useState } from 'react';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const InputTextComponent = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `

  import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputTextComponent = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.TextInput}>Enter Text :-</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Type Something..."
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor:'white'
  },
  TextInput: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft:5,
    color:'black',
    fontWeight:'500'
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius:20,
  }
});

export default InputTextComponent;
  `;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };
    const InputTextComponent = () => {
        const [inputText, setInputText] = useState('');

        return (
            <View style={styles.container}>
                <Text style={styles.TextInput}>Enter Text :-</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="Type Something..."

                    value={inputText}
                    onChangeText={text => setInputText(text)}
                />
            </View>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native Text Input</Text>
            <Text style={styles.descText}>Description :-</Text>
            <Text style={styles.descriptionText}>
                input facilitates efficient communication & interaction with digital devices & applications
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
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2E4053', marginTop: 5 }}>Output :-</Text>
            < InputTextComponent />
        </ScrollView>
    );
};
export default InputTextComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: '#E9F5EF',
    },
    title: {
        fontSize: 22,
        marginTop:25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2E4053',
        textAlign: 'center',
    },
    descText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2E4053',
        marginTop: 15
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#34495E',
        top: 5,
    },
    codeTitle: {
        fontSize: 16,
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    ImageStyle: {
        alignSelf: 'center',
        height: 300,
        width: 350
    },
    TextInput: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5,
        color: 'black',
        fontWeight: '500'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 20,
        color: 'black',
    }
});