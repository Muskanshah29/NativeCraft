import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';


const MapScreen = ({ language = 'javascript', theme = atomOneDark }) => {

  const Example = () => {
    const items = [
      { id: '1', name: 'Apple' },
      { id: '2', name: 'Banana' },
      { id: '3', name: 'Orange' },
      { id: '4', name: 'Grapes' },
      { id: '5', name: 'Pineapple' },
    ];

    return (
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.txt}>{item.name}</Text>
        )}
        contentContainerStyle={styles.content}
      />
    );
  };

  const codeString = `
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Example = () => {
  const items = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Orange' },
    { id: '4', name: 'Grapes' },
    { id: '5', name: 'Pineapple' },
  ];

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text>{item.name}</Text>
      )}
    />
  );
};`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Map Method:FlatList</Text>
      <Text style={styles.description}>
        FlatList is a performant way to render large lists in React Native. It only renders items that are currently visible on the screen.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    
  )}
/>`}
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
        <Example />
      </View>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
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
  txt: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18,
    color: 'black',
  },
  content: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    padding: 10,
  },
});