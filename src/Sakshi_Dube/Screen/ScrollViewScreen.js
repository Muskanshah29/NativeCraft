import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import Video from 'react-native-video';

const ScrollViewScreen = ({ language = 'javascript', theme = atomOneDark }) => {
  const videoRef = useRef(null);
  const codeString = `
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Example = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.txtStyle}>Item 1</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i2.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 2</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i5.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 3</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i2.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 4</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i5.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 5</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i2.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 6</Text>
        <Image
            source={require('../../Sakshi_Dube/image/i5.png')}
            style={{height:100,width:100}}
        />
        <Text style={styles.txtStyle}>Item 7</Text>
      </View>
    </ScrollView>
  );
};
export default Example;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center'
    },
    txtStyle:{
        fontWeight:'bold',
        marginVertical:20,
        fontSize:20
    }
})`;

  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native ScrollView</Text>
      <Text style={styles.description}>
        ScrollView is a component that enables scrolling functionality for its child components.
        It is useful for displaying a list of items that may not fit on the screen at once.
      </Text>

      <Text style={styles.subtitle}>Syntax:</Text>
      <Text style={styles.code}>
        {`<ScrollView>
  <View>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    ...
  </View>
</ScrollView>`}
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
        <View>
          <Video
            ref={videoRef} // Attach the ref to the Video component
            source={require('../../Sakshi_Dube/video/SViewVideo.mp4')}
            style={styles.video}
            controls={false} // Disable video controls
            resizeMode="contain" // Adjust video size
            paused={false} // Autoplay
            onLoad={() => {
              if (videoRef.current) {
                videoRef.current.seek(0); // Seek to the start
              }
            }}
            repeat={true} // Loop the video
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ScrollViewScreen;

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
    backgroundColor: '#1ABC9C',
    borderRadius: 5,
    zIndex: 1,
  },
  codeContainer: {
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    bottom: 25
  },
  syntaxHighlighter: {
    lineHeight: 20,
    fontSize: 14,
    padding: 10,
  },
  video: {
    width: '100%',
    height: 800, // Adjust height as needed
},
});
