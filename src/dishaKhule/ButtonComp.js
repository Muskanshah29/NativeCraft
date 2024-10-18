import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const ButtonComp = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import { Button, StyleSheet, View } from "react-native";
import React from "react";
const  ButtonComp = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Submit"
        color={"red"}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
  export default ButtonComp;
  `;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native In Button</Text>
      <Text style={styles.descText}>Description :-</Text>
      <Text style={styles.descriptionText}>
        In Button component is a simple and built-in UI element used to create clickabel
        Buttons in mobile apps.A functional component named Button that accepts buttontext,
        onClick,and disable as props.
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
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2E4053', marginTop: 5 }}>Output :-</Text>
      <Image
        source={require('../dishaKhule/Image/Image1.png')}
        style={styles.ImageStyle}
      />
    </ScrollView>
  );
};
export default ButtonComp;
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
  ImageStyle: {
    alignSelf: 'center',
    height:100,
    width:200
  }
});

