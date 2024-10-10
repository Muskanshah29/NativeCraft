import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const InputText = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `

  import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputText = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>InputText</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text>Your text: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export default InputText;
  `;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Text Input</Text>
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2E4053', marginTop: 5 }}>Output :-</Text>
            <Image
                source={require('../Images/a1.png')}
                style={styles.ImageStyle}
            />
        </ScrollView>
    );
};
export default InputText;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2E4053',
        alignSelf: 'center',
        marginBottom: 10
    },
    descText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E4053',
        marginTop: 10
    },
    descriptionText: {
        fontSize: 16,
        color: '#34495E',
        fontWeight: '400',
        marginLeft: 2,
        marginVertical: 5
    },
    codeTitle: {
        fontSize: 20,
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
        height: 600,
        width: 300
    }
});