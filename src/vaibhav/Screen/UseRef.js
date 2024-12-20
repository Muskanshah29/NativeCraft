import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const UseRef = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
import React, { useRef } from 'react'

const UseRef = () => {
    const input=useRef()
    const Update=()=>{
        input.current.focus();
        input.current.clear();
        input.current.setNativeProps({
            fontSize:24,
            color:'red'
        })
    }
  return (
    <View style={{flex:1,padding:10,}}>
      <TextInput ref={input} placeholder='enter somthing...' style={{borderWidth:1,margin:10}}/>
      <TextInput placeholder='enter somthing...' style={{borderWidth:1,margin:10}}/>
      <Button title="submit" onPress={Update}/>
    </View>
  )
}

export default UseRef

const styles = StyleSheet.create({})
  `;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Use Reference </Text>
      <Text style={styles.descText}>Description :-</Text>
      <Text style={styles.descriptionText}>
      The useRef hook in React allows you to persist values across renders without triggering a re-render when the value changes. It's often used to directly access or modify a DOM element.
      </Text>
      <Text style={styles.codeTitle}>Example Code :-</Text>

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
export default UseRef;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E4053',
    alignSelf: 'center',
    marginBottom: 10
  },
  descText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4053',
    marginTop: 10
  },
  descriptionText: {
    fontSize: 16,
    color: '#34495E',
    fontWeight: '400',
    marginLeft: 2,
    marginVertical: 5
  },
  codeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E4053',
    marginTop: 10
  },
  codeContainer: {
    marginTop: 5,
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