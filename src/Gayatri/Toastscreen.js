import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import Toast from 'react-native-toast-message';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

// Toast function to show toast notifications
const showToast = (message) => {
  Toast.show({
    type: 'info',
    text1: message,
    position: 'bottom',
  });
};

// Example Output with Toasts
const ExampleOutput = () => {
  return (
    
    <View style={styles.toastContainer}>
      <View style={{marginRight:290,}}>
          <Text style={{fontSize: 18,fontWeight: 'bold',marginBottom: 5, color: '#2E4053',}}>Output:</Text>
      </View>
      <TouchableOpacity style={styles.toastButton} onPress={() => showToast('Home Screen')}>
        
        <Text style={styles.buttonText}>Show Home Screen Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toastButton} onPress={() => showToast('Settings Screen')}>
        <Text style={styles.buttonText}>Show Settings Screen Toast</Text>
      </TouchableOpacity>
    </View>
  );
};

// Toast Example with code snippet and information
const Toastscreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Toast from 'react-native-toast-message';

const showToast = (message) => {
  Toast.show({
    type: 'info',
    text1: message,
    position: 'bottom',
  });
};

const ExampleOutput = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <TouchableOpacity onPress={() => showToast('Home Screen')}>
        <Text>Show Home Screen Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => showToast('Settings Screen')}>
        <Text>Show Settings Screen Toast</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleOutput;
`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>React Native Toasts</Text>
        <Text style={styles.description}>
          Toasts provide a way to display a quick notification or message at the bottom of the screen.
        </Text>

        <Text style={styles.subtitle}>What is a Toast?</Text>
        <Text style={styles.description}>
          A Toast is a popup message that automatically disappears after a short time. It’s great for showing notifications, confirmations, or alerts to users without interrupting the flow.
        </Text>

        <Text style={styles.subtitle}>Syntax:</Text>
        <Text style={styles.code}>
          {`Toast.show({
  type: 'info',
  text1: 'Message',
  position: 'bottom',
});`}
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


        {/* Render ExampleOutput outside of ScrollView */}
        <View style={styles.outputContainer}>
          <ExampleOutput />
        </View>
        {/* Add Toast at the end of the component */}
        <Toast ref={(ref) => Toast.setRef(ref)} />

      </ScrollView>


    </>
  );
};

export default Toastscreen;

const styles = StyleSheet.create({
  container: {
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
    height: '100%',
    marginTop: 10,
  },
  toastContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    marginBottom:10
  },
  toastButton: {
    padding: 15,
    margin: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
   
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
