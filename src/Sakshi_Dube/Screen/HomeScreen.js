import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Icon
                name="reorder-horizontal"
                size={30}
                color="#2E4053"
                onPress={() => navigation.openDrawer()} // Open drawer on press
                accessibilityLabel="Open Drawer"
                style={{padding:5,
                    backgroundColor: '#48C9B0', // Square background color
                    padding: 5, // Ensure padding around the icon
                    borderRadius: 5, // To make edges slightly rounded
                    alignSelf: 'flex-start', // Align to start if needed
                }}
            />
            <Text style={styles.title}>Learn React Native</Text>
            <Text style={styles.description}>
                React Native is a popular framework for building mobile applications using React.
                It allows you to create native apps for iOS and Android using JavaScript and React.
            </Text>
            <Text style={styles.subTitle}>Getting Started</Text>
            <Text style={styles.description}>
                To create a new React Native project, follow these commands:
            </Text>

            <Text style={styles.command}>
                1. Create a new project:
                <Text style={styles.code}>{'\n'} npx react-native init MyProject</Text>
            </Text>
            <Text style={styles.command}>
                2. Navigate into your project directory:
                <Text style={styles.code}>{'\n'} cd MyProject</Text>
            </Text>
            <Text style={styles.command}>
                3. Start the Metro Bundler:
                <Text style={styles.code}>{'\n'} npm start</Text>
            </Text>
            <Text style={styles.command}>
                4. Run the app on Android:
                <Text style={styles.code}>{'\n'} npx react-native run-android</Text>
                <Text style={styles.codeSecondary}>   or</Text>
                <Text style={styles.code}>{'\n'} npm run android</Text>
            </Text>
            <Text style={styles.command}>
                5. Run the app on iOS:
                <Text style={styles.code}>{'\n'} npx react-native run-ios</Text>
            </Text>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#E9F5EF',
        flexGrow: 1,
    },
    title: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#2E4053',
    },
    description: {
        top: 9,
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 23,
        color: '#34495E',
    },
    subTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 35,
        color: '#2E4053',
    },
    command: {
        top: 14,
        fontSize: 16,
        backgroundColor: '#48C9B0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 5,
        color: '#FFFFFF',
    },
    code: {
        fontWeight: 'bold',
        color: '#FFD700',
    },
    codeSecondary: {
        fontWeight: 'bold',
        color: '#FF6347',
        marginLeft: 5,
    },
    link: {
        color: '#2980B9',
        textDecorationLine: 'underline',
    },
});
