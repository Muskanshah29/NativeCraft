import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../Sakshi_Dube/Screen/SplashScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack=createStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Splash'
                component={SplashScreen}
                options={{headerShown:false}}
            />
             <Stack.Screen
                name='Drawer'
                component={DrawerNavigation}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})