import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import Video from 'react-native-video';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

const PressableScreen = ({ language = 'javascript', theme = atomOneDark }) => {
    const videoRef = useRef(null);

    const codeString = `
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const PressableComponent = () => {
  const handlePress = () => {
    console.log('Pressed!');
  };

  return (
    <Pressable 
      onPress={handlePress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'lightgray' : 'white' },
        styles.button
      ]}
    >
      <Text style={{color:'pink',fontWeight:'bold',fontSize:25}}>Press Me!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    top:350
  },
});

export default PressableComponent;
`;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>React Native Pressable</Text>
            <Text style={styles.description}>
                A Pressable component is used to handle press interactions.
                It provides a way to define how the component should respond to touch events,
                such as pressing, long pressing, and more.
            </Text>

            <Text style={styles.subtitle}>Syntax:</Text>
            <Text style={styles.code}>
                {`<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>`}
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
                        source={require('../../Sakshi_Dube/video/PressableVideo.mp4')}
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

export default PressableScreen;

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
        backgroundColor: '#48C9B0',
        borderRadius: 5,
        zIndex: 1,
    },
    codeContainer: {
        marginTop: 30,
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
    video: {
        width: '100%',
        height: 800, // Adjust height as needed
    },
});
