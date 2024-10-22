import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const ImageScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import { Image, View } from "react-native";
 import React from "react";
 import { StyleSheet } from "react-native";
 const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/f2.png')}
        style={styles.imageStyle}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageStyle: {
    alignSelf:'center',
    width:300,
    height:300,
    marginBottom:20,
    marginTop:10
  }
})
  export default ImageScreen;
  `;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Image</Text>
      <Text style={styles.descText}>Description :-</Text>
      <Text style={styles.descriptionText}>The Image component is used to display the image on the screen.
        In the below syntax, the packager will look for icon_name.png in
        the same folder as the component that requires it.
        To should be named by specifiying the platform as extention such as
        icon_name.android.png.
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
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#2E4053', marginTop: 5 }}>Output :-</Text>
      <Image
        source={require('../dishaKhule/Image/Image.png')}
        style={styles.ImageStyle}
      />
    </ScrollView>
  );
};
export default ImageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9F5EF',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2E4053',
    textAlign: 'center',
  },
  descText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E4053',
    marginTop: 10
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#34495E',
    top: 5,
  },
  codeTitle: {
    fontSize: 17,
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
    width: 300,
    height: 300,
    marginBottom: 20,
    marginTop: 10
  }
});

