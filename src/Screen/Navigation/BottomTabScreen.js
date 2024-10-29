import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ codeString }) => {
  return (
    <View style={styles.codeBlock}>
      <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {codeString}
      </SyntaxHighlighter>
    </View>
  );
};

const App = () => {
  const sampleCode = `const greet = (name) => {
    return \`Hello, \${name}!\`;
  };

  console.log(greet('World'));`;
s
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code Snippet:</Text>
      <CodeBlock codeString={sampleCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  codeBlock: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
});

export default App;
