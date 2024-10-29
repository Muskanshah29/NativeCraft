import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const UseEffectScreen = ({ language = 'javascript', theme = atomOneDark }) => {

    const Counter = () => {
        const [count, setCount] = useState(0);

        // useEffect to log the count whenever it changes
        useEffect(() => {
            console.log('Count: ', count);
        }, [count]);

        return (
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
                <Text style={{ color: 'black', fontWeight: '500' }}>You clicked {count} times</Text>
                <Button title="Click me" onPress={() => setCount(count + 1)} />
            </View>
        );
    }

    const codeString = `
    
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Counter=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count: ',count);
  }, [count]);

  return (
    <View style={{ alignItems: 'center', marginBottom: 30  }}>
      <Text style={{ color: 'black', fontWeight: '500' }}>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Counter;
`;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>2. UseEffect </Text>
            <Text style={styles.description}>
                In React Native, useEffect is a hook that lets you perform side effects in functional components.
                Side effects can include tasks like data fetching, updating the DOM, setting up subscriptions, and timers.
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#2E4053', marginVertical: 10 }}>
                How it Works ?
            </Text>
            <Text style={styles.infotxt}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>{'\u2022'} Initial Render :</Text> useEffect runs after the component renders.{'\n'}</Text>

            <Text style={styles.infotxt}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>{'\u2022'} Dependencies Array ([ ]):</Text>{'\n'}<Text style={{textDecorationLine:'underline'}}>Controls when the effect runs:</Text>{'\n'}

            {'\u2022'} [ ] (empty):  Runs once after the initial render.{'\n'}
                {'\u2022'} [dependency1, dependency2]:  Re-runs whenever any dependency changes.{'\n'}</Text>
            <Text style={styles.infotxt}><Text style={{ fontWeight: 'bold', fontSize: 16 }}>{'\u2022'} Cleanup Function:</Text> If returned from the effect, it runs on component unmount or before each re-run if dependencies change.</Text>

            <Text style={styles.subtitle}>Syntax:</Text>

            <Text style={styles.code}>
                {`
useEffect(() => {
    //function code
  }, [dependency]);
`}
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
                <Counter />
            </View>
        </ScrollView>
    );
};

export default UseEffectScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 18,
        backgroundColor: '#E9F5EF',
    },
    title: {
        fontSize: 24,
        marginTop: 25,
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
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ACAC'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    infotxt: {
        color: '#34495E',
    }
});
