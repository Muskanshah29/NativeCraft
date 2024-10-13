import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import { Clipboard } from 'react-native';
import { SearchBar } from 'react-native-screens';
const Searchbar1 = ({ language = 'javascript', theme = atomOneDark }) => {
    const codeString = `

  import { StyleSheet, Text, View, TextInput } from 'react-native'
  import React from 'react'
  import Search1 from 'react-native-vector-icons/AntDesign'
  const App = () => {
      return (
          <View style={styles.container}>
              <Text>SearchBar with icon</Text>
              <View style={styles.inputContainer}>
                  <TextInput
                      placeholder='Search'
                      style={styles.textinput}
                  />
                  <Search1
                      name='search1'
                      size={25}
                      style={styles.icon}
                  />
              </View>
          </View>
      )
  }
  export default App
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          padding: 20
      },
      inputContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10
      },
      textinput: {
          width: '60%',
          paddingHorizontal: 10
      },
      icon: {
          width: '15%',
          paddingHorizontal: 12
      }
  })
  
  `;

    const copyToClipboard = async () => {
        await Clipboard.setString(codeString);
        Alert.alert('Copied to Clipboard!', 'The code snippet has been copied.');
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Search Bar With Icon</Text>
            <Text style={styles.descText}>Description :-</Text>
            <Text style={styles.descriptionText}>
                In React Native, you can implement a search bar using the TextInput component for capturing user input and filtering data based on the entered search term. It can be styled and customized for various features like live search, debounce functionality, and integrated with state management tools like Redux or hooks for managing search results.
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
                source={require('../Images/a2.png')}
                style={styles.ImageStyle}
            />
        </ScrollView>
    );
};
export default Searchbar1;
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
        height: 500,
        width: 300
    }
});
