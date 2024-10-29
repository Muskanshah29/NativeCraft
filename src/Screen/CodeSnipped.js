import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';

const CodeSnipped = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
  import React from 'react';
  import { Text, View } from 'react-native';

  const HelloWorld = () => (
    <View>
      <Text>Hello World!</Text>
    </View>
  );

  export default HelloWorld;
  `;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Code Snippet:</Text>


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  codeContainer: {
    marginTop: 20,
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
});

export default CodeSnipped;
