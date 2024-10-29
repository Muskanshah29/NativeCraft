import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Pressable, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const PressableComponent = () => {
    const handlePress = () => {
        console.log('Pressed!');
    };
    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'lightgray' : '#487DB5' },
                styles.button
            ]}
        >
            <Text style={styles.pressableButtonText}>Press Me!</Text>
        </Pressable>
    );
};

const PressableScreen = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const PressableComponent = () => {
    const handlePress = () => {
        console.log('Pressed!');
    };
    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'lightgray' : '#487DB5' },
                styles.button
            ]}
        >
            <Text style={styles.pressableButtonText}>Press Me!</Text>
        </Pressable>
    );
};
`;

    const copyToClipboard = async () => {
        try {
            await Clipboard.setString(codeString);
            Alert.alert('Copied to Clipboard!');
        } catch (error) {
            Alert.alert('Error', 'Failed to copy code.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native Pressable</Text>
            <Text style={styles.description}>
                A Pressable component is used to handle press interactions.
                It provides a way to define how the component should respond to touch events,
                such as pressing, long pressing, and more.
            </Text>
            <Text style={styles.subtitle}>Syntax:</Text>
            <Text style={styles.code}>
                {`<Pressable onPress={onPressFunction}>...</Pressable>`}
            </Text>
            <Text style={styles.subtitle}>Example Code:</Text>
            <View style={styles.codeContainer}>
                <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
                    <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
                <SyntaxHighlighter language={language} style={theme} customStyle={styles.syntaxHighlighter}>
                    {codeString}
                </SyntaxHighlighter>
            </View>
            <Text style={styles.subtitle}>Code Output:</Text>
            <View style={styles.outputContainer}>
                <PressableComponent />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        top:5,
        fontSize: 16,
        marginBottom: 10,
        color: '#34495E',
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
        marginTop: 10,
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
    },
    syntaxHighlighter: {
        lineHeight: 20,
        fontSize: 14,
        padding: 10,
    },
    button: {
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical:12
    },
    pressableButtonText: {
        color: 'pink',
        fontWeight: 'bold',
        fontSize: 25,
    },
    outputContainer: {
        padding: 4,
        bottom:5
    },
});

export default PressableScreen;
