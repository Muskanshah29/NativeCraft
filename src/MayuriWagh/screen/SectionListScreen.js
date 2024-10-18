import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard, SectionList } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const SectionListScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import React from 'react';
import { SectionList, Text, View } from 'react-native';

const Example = () => {
  const DATA = [
    {
      title: 'Main Dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
    />
  );
};
export default Example;`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };

  const ExampleOutput = () => {
    const DATA = [
      {
        title: 'Main Dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ];

    return (
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.outputItem}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.outputHeader}>{title}</Text>}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native SectionList</Text>
      <Text style={styles.description}>
        SectionList is a component that displays sections with headers. Each section can contain multiple data items.
        It is useful for grouping related items under common headings.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`<SectionList
  sections={DATA}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
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

      <Text style={styles.subtitle}>Output:</Text>
      <View style={styles.outputContainer}>
        <ExampleOutput />
      </View>
    </ScrollView>
  );
};

export default SectionListScreen;

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
    backgroundColor: 'white',
    borderRadius: 5,
  },
  outputHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  outputItem: {
    fontSize: 14,
    marginLeft: 10,
  },
});
