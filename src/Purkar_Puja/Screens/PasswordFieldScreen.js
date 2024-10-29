import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        style={styles.passwordInput}
      />
      <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
        <Icon 
          name={isPasswordVisible ? 'eye-off' : 'eye'} 
          size={24} 
          color="#555" 
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};


const PasswordFieldScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const passwordCodeString = `
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 5, padding: 5 }}>
      <TextInput
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        style={{ flex: 1 }}
      />
      <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;`;

  const copyToClipboard = async () => {
    await Clipboard.setString(passwordCodeString);
    Alert.alert('Copied to Clipboard!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Password Field with Icon</Text>
      <Text style={styles.description}>
        This example shows how to create a password input field with an icon to toggle visibility. 
        The password is hidden by default, and tapping the icon reveals it.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`<TextInput secureTextEntry={!isPasswordVisible} ... />
<TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
  <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} />
</TouchableOpacity>`}
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
          {passwordCodeString}
        </SyntaxHighlighter>
      </View>

      <Text style={styles.subtitle}>Example Output:</Text>
      <PasswordInput />
    </ScrollView>
  );
};

export default PasswordFieldScreen;

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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom:35
    
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color:'black',
  },
  icon: {
    padding: 5,
  },
});
