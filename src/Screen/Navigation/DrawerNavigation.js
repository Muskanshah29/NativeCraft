import { StyleSheet, View, Text, Image, SectionList, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

import HomeScreen from '../../Sakshi_Dube/Screen/HomeScreen';
import PressableScreen from '../../Sakshi_Dube/Screen/PressableScreen';
import ScrollViewScreen from '../../Sakshi_Dube/Screen/ScrollViewScreen';
import InputText from '../../Akash/Screen/InputTextComponent';
import Searchbar1 from '../../Akash/Screen/Searchbar1';
import StyleAdd from '../../Akash/Screen/StyleAdd';
import BottomTabNavigatorScreen from '../../MayuriWagh/screen/BottomTabNavigatorScreen';
import PropsScreen from '../../MayuriWagh/screen/PropsScreen';
import SectionListScreen from '../../MayuriWagh/screen/SectionListScreen';
import MapScreen from '../../Purkar_Puja/Screens/MapScreen';
import PasswordFieldScreen from '../../Purkar_Puja/Screens/PasswordFieldScreen';
import StackNavigatorScreen from '../../Purkar_Puja/Screens/StackNavigatorScreen';
import ButtonComp from '../../dishaKhule/ButtonComp';
import CarouselComp from '../../dishaKhule/CarouselComp';
import ImageScreen from '../../dishaKhule/ImageScreen';
import TouchableOpacity1 from '../../vaibhav/Screen/TouchableOpacityScreen';
import LinearScreen from '../../vaibhav/Screen/LinearScreen';
import CustomizeButtonScreen from '../../Sakshi_Dube/Screen/CustomizeButtonScreen';
import FlatListScreen from '../../Gayatri/FlatlistScreen';
import Toastscreen from '../../Gayatri/Toastscreen';
import DrawerNavigatorScreen from '../../Gayatri/DrawerNavigatorScreen';
import RnSyntax from '../../Akash/Screen/RnSyntax';
import UseStateHooks from '../../dishaKhule/UseStateHooks';
import UseContextExampleScreen from '../../MayuriWagh/screen/UseContextExampleScreen';
import UseEffect from '../../Hooks/UseEffect';
import UseEffectScreen from '../../Sakshi_Dube/Screen/UseEffectScreen';
import UseRef from '../../vaibhav/Screen/UseRef';
import BottomTabNav from '../../Gayatri/BottomTabNav';
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'white',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    width: 280,
                },
                drawerLabelStyle: {
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                },
                drawerActiveBackgroundColor: '#48C9B0',
                drawerActiveTintColor: '#333',
                drawerInactiveTintColor: '#555',
            }}
        >
         
            <Drawer.Screen
                name='Introduction'
                component={BottomTabNav}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='home' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Basic code'
                component={RnSyntax}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Pressable'
                component={PressableScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='ScrollView'
                component={ScrollViewScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='CustomizeButton'
                component={CustomizeButtonScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='pluscircleo' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='TextInput'
                component={InputText}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='edit' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Searchbar'
                component={Searchbar1}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='search1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Style'
                component={StyleAdd}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='book' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='BottomTabNavigator'
                component={BottomTabNavigatorScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore-o' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Props'
                component={PropsScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='SectionList'
                component={SectionListScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='MapMethod'
                component={MapScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='PasswordField'
                component={PasswordFieldScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='lock' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='StackNavigation'
                component={StackNavigatorScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='bars' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='DrawerNavigation'
                component={DrawerNavigatorScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Button'
                component={ButtonComp}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='pluscircleo' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Carousel'
                component={CarouselComp}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='picture' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='Image'
                component={ImageScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='picture' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='LinearGradient'
                component={LinearScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='TouchableOpacity'
                component={TouchableOpacity1}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='FlatList'
                component={FlatListScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='Toast'
                component={Toastscreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='UseState'
                component={UseStateHooks}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />
            <Drawer.Screen
                name='UseEffect'
                component={UseEffectScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='UseContext'
                component={UseContextExampleScreen}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

            <Drawer.Screen
                name='UseRef'
                component={UseRef}
                options={{
                    headerShown: false,
                    drawerIcon: () => <Icon name='appstore1' size={20} color='black' />,
                }}
            />

        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
