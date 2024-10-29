import React, { createContext, useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const UserContext = createContext();

const UseContextExampleScreen = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (name) => {
    setUsername(name);
  };

  const resetUsername = () => {
    setUsername('');
    Alert.alert('Username Reset', 'The username has been reset to Guest.');
  };

  const codeString = `
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={username}>
      <UserProfile />
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const username = useContext(UserContext);
  const displayName = username ? \`Welcome \${username}!\` : 'Welcome Guest!';

  return (
    <View>
      <Text>{displayName}</Text>
    </View>
  );
};

export default App;
  `;

  const UserProfile = () => {
    const username = useContext(UserContext);
    const displayName = username ? `Welcome ${username}!` : 'Welcome Guest!';

    return (
      <View style={styles.profileContainer}>
        <Text style={styles.displayText}>{displayName}</Text>
      </View>
    );
  };

  return (
    <UserContext.Provider value={username}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Understanding useContext in React Native</Text>
        <Text style={styles.description}>
          The <Text style={styles.boldText}>useContext</Text> hook in React allows you to access and use context data in your component. 
          It helps avoid prop drilling by sharing data across the component tree.
        </Text>

        <Text style={styles.subtitle}>Syntax:</Text>
        <Text style={styles.code}>{`const value = useContext(MyContext);`}</Text>

        <Text style={styles.subtitle}>Example Code:</Text>
        <View style={styles.codeContainer}>
          <TouchableOpacity style={styles.copyButton} onPress={() => Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.')}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
          <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={styles.syntaxHighlighter}>
            {codeString}
          </SyntaxHighlighter>
        </View>

        <Text style={styles.subtitle}>Live Example:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name..."
          onChangeText={handleUsernameChange}
          value={username}
        />
        <TouchableOpacity style={styles.resetButton} onPress={resetUsername}>
          <Text style={styles.resetButtonText}>Reset Username</Text>
        </TouchableOpacity>

        <UserProfile />
      </ScrollView>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 18,
    backgroundColor: 'white',
    flexGrow: 1,
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
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#2E4053',
  },
  boldText: {
    fontWeight: 'bold',
  },
  code: {
    backgroundColor: 'white',
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
  },
  syntaxHighlighter: {
    lineHeight: 20,
    fontSize: 14,
    padding: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: '#1ABC9C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  displayText: {
    fontSize: 20,
    color: '#2E4053',
  },
});

export default UseContextExampleScreen;
