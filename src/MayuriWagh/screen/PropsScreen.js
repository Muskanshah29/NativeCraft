import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const PropsScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
};

const Example = () => {
  return (
    <View>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </View>
  );
};

export default Example;`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };


  const ExampleOutput = () => {
    const Greeting = ({ name }) => (
      <View>
        <Text style={styles.outputText}>Hello, {name}!</Text>
      </View>
    );

    return (
      <View>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Props</Text>
      <Text style={styles.description}>
        Props (short for "properties") are used to pass data between components in React Native. They allow you to customize a component by passing values as attributes.
      </Text>

      <Text style={styles.subtitle}>What are Props?</Text>
      <Text style={styles.description}>
        Props are similar to function arguments in JavaScript. They are passed to components, making them reusable and adaptable. For example, a button component could use props to change its text label or style dynamically.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`const Component = (props) => {
  return <Text>{props.someProp}</Text>;
};`}
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

      <Text style={styles.subtitle}>Output:</Text>
      <View style={styles.outputContainer}>
        <ExampleOutput />
      </View>
    </ScrollView>
  );
};

export default PropsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9F5EF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E4053',
    textAlign: 'center',
  },
  description: {
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
    backgroundColor: '#1ABC9C',
    borderRadius: 5,
    zIndex: 1,
  },
  codeContainer: {
    marginTop: 20,
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
  outputContainer: {
    marginTop: 20,
    padding: 10,
    marginBottom:30,
    backgroundColor: '#2E4053',
    borderRadius: 5,
  },
  outputText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
