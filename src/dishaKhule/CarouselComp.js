import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image,Dimensions } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import Carousel from 'react-native-reanimated-carousel'
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
const CarouselComp = ({ language = 'javascript', theme = atomOneDark }) => {
  const codeString = `
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
const CarouselComp = () => {
  const Width = Dimensions.get('window').width
  const data = [
    {
      id: 1,
      image: require('./src/assets/images/f1.png'),
      name: 'BURDS'
    },
  ]
  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10, }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15
          }}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={{color:'black',marginTop:'50%',fontWeight:'bold'}}>BURDS</Text>
      <Carousel
        data={data}
        renderItem={renderItem}
        width={Width}
        height={Width}
        loop
        autoPlay
        autoPlayInterval={500}
        autoPlayReverse={500}
        mode={'parallax'}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
})
  export default CarouselComp;
  `;
  const copyToClipboard = async () => {
    await Clipboard.setString(codeString);
    Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
  };
  const ExampleOutput = () => {
    const Width = Dimensions.get('window').width
    const data = [
      {
        id: 1,
        image: require('../dishaKhule/Image/Burd1.png'),
        name: 'BURDS'
      },
      {
        id: 1,
        image: require('../dishaKhule/Image/Burd2.png'),
        name: 'BURDS'
      },
      {
        id: 1,
        image: require('../dishaKhule/Image/Burd3.png'),
        name: 'BURDS'
      },
      {
        id: 1,
        image: require('../dishaKhule/Image/Burd4.png'),
        name: 'BURDS'
      },
    ]
    const renderItem = ({ item }) => {
      return (
        <View style={{ margin:5 }}>
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15
            }}
          />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ color: '#2E4053', fontWeight: 'bold' }}>BURDS</Text>
        <Carousel
          data={data}
          renderItem={renderItem}
          width={Width}
          height={Width}
          loop
          autoPlay
          autoPlayInterval={500}
          autoPlayReverse={500}
          mode={'parallax'}
        />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Carousel</Text>
      <Text style={styles.descText}>Description :-</Text>
      <Text style={styles.descriptionText}>
        The React Carousel is slideshow for cycling through a series of content,
        built with CSS 3D transforms and a bit of javascript.
        it runs with a group of images,text,or html elements.
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
      <ExampleOutput />
    </ScrollView>
  );
};
export default CarouselComp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  ImageStyle: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    marginBottom: 15
  }
});

