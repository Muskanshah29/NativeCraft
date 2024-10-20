import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const StyleAdd = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `

  import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Hello, React Native!</Text>
      <Text style={styles.subtitle}>This is a subtitle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  subtitle: {
    fontSize: 15,
    color: 'red',
    marginTop:2
  },
});

export default App;

  `;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };
    const App = () => {
        return (
            <View style={styles.container1}>
                <Text style={styles.title1}>Hello, React Native!</Text>
                <Text style={styles.subtitle}>This is a subtitle</Text>
            </View>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native Style Add</Text>
            <Text style={styles.descText}>Description :-</Text>
            <Text style={styles.descriptionText}>
                In React Native, style is a prop used to apply custom styling to components, using a JavaScript object or array of objects. It supports CSS-like properties but tailored for mobile platforms (e.g., flex, padding, color).
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
            <App />
        </ScrollView>
    );
};
export default StyleAdd;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 23,
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    ImageStyle: {
        alignSelf: 'center',
        height: 300,
        width: 350
    },
    title1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    },
    subtitle: {
        fontSize: 15,
        color: 'red',
        marginTop: 2
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 40,
        marginTop: 10
    },
});