import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const CustomizeButtonScreen = ({ language = 'javascript', theme = atomOneDark }) => {

    const CustomButton = ({ onPress}) => {
        return (
            <View style={styles.container}>
            <TouchableOpacity 
                onPress={onPress} 
                style={styles.button}
            >
                <Text style={styles.text}>Click Me</Text>
            </TouchableOpacity>
            </View>
        );
    };
    

    const codeString = `
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ onPress}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity 
            onPress={onPress} 
            style={styles.button}
        >
            <Text style={styles.text}>Click Me</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:30,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ACAC'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    },
});

export default CustomButton;

`;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native Customize Button Component</Text>
            <Text style={styles.description}>
                To create a customizable button component in React Native,
                you can define a functional component that accepts props for styling and behavior.
                Below is a brief overview with a sample implementation.
            </Text>

            <Text style={styles.subtitle}>Syntax:</Text>
            <Text style={styles.code}>
                {`<TouchableOpacity onPress={onPressFunction}>
  <Text>Touch Me!</Text>
</TouchableOpacity>`}
            </Text>

            <Text style={styles.subtitle}>Example Code:</Text>
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

            <View>
                <Text style={styles.subtitle}>Code Output:</Text>
                    <CustomButton/>
            </View>
        </ScrollView>
    );
};

export default CustomizeButtonScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 18,
        backgroundColor: '#E9F5EF',
    },
    title: {
        fontSize: 24,
        marginTop:25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2E4053',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#34495E',
        top: 5,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        color: '#2E4053',
    },
    code: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        color: '#292929',
        borderRadius: 5,
        fontFamily: 'monospace',
        marginBottom: 10,
    },
    copyButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    copyButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#48C9B0',
        borderRadius: 5,
        zIndex: 1,
    },
    codeContainer: {
        marginTop: 30,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
        bottom: 25,
    },
    syntaxHighlighter: {
        lineHeight: 20,
        fontSize: 14,
        padding: 10,
    },
    button: {
        padding: 12,
        marginVertical:10,
        borderRadius: 10,
        borderColor:'green',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ACAC'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    },
});
