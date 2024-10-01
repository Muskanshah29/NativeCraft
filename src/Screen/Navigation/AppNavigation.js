import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import IntroScreen from '../IntroScreen';

const Stack=createStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={{headerShown:false}}
            />
             <Stack.Screen
                name='intro'
                component={IntroScreen}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})