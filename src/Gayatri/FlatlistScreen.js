import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard, FlatList } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

// Sample data for FlatList - List of Programming Languages
const DATA = [
  { id: '1', title: 'JavaScript', description: 'A versatile, high-level programming language used for web development, primarily in web browsers.' },
  { id: '2', title: 'Python', description: 'An interpreted, high-level, general-purpose programming language known for its easy readability.' },
  { id: '3', title: 'Java', description: 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.' },
  { id: '4', title: 'C++', description: 'An extension of the C programming language, C++ adds object-oriented features to C.' },
  { id: '5', title: 'Ruby', description: 'A dynamic, open-source programming language with a focus on simplicity and productivity.' },
];

// Item component for FlatList
const Item = ({ title, description }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

// Example Output with FlatList
const ExampleOutput = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} description={item.description} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

// FlatList Component with code snippet and information
const FlatListScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'JavaScript', description: 'A versatile, high-level programming language used for web development, primarily in web browsers.' },
  { id: '2', title: 'Python', description: 'An interpreted, high-level, general-purpose programming language known for its easy readability.' },
  { id: '3', title: 'Java', description: 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.' },
  { id: '4', title: 'C++', description: 'An extension of the C programming language, C++ adds object-oriented features to C.' },
  { id: '5', title: 'Ruby', description: 'A dynamic, open-source programming language with a focus on simplicity and productivity.' },
];

const Item = ({ title, description }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
);

const ExampleOutput = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} description={item.description} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExampleOutput;
`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native FlatList</Text>
      <Text style={styles.description}>
        The FlatList component is used to display a scrollable list of items. It's optimized for handling large amounts of data by rendering only the visible items on the screen.
      </Text>

      <Text style={styles.subtitle}>What is FlatList?</Text>
      <Text style={styles.description}>
        FlatList is a built-in component in React Native to render a list of items efficiently. It improves performance by using virtualization, which means only rendering items visible on the screen.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`<FlatList
  data={DATA}
  renderItem={({ item }) => <Item title={item.title} description={item.description} />}
  keyExtractor={(item) => item.id}
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

      <Text style={styles.subtitle}>Example Output:</Text>
      {/* Render ExampleOutput within the ScrollView to display FlatList output */}
      <View style={styles.outputContainer}>
        <ExampleOutput />
      </View>
    </ScrollView>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#E9F5EF',
  },
  title: {
    fontSize: 23,
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
    flex: 1,
    paddingVertical: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#2E4053',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  itemDescription: {
    fontSize: 14,
    color: '#d1d1d1',
    marginTop: 5,
  },
});
