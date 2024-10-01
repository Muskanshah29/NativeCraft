import { StyleSheet,View,Text ,Image} from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';
import IntroScreen from '../IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
const Drawer = createDrawerNavigator();

const CustomDrawer=(props)=>{
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0}}>
            <View style={{backgroundColor:'grey',height:200,justifyContent:'center',
                alignItems:'center'}}>
                <Image
                    source={require('../../Images/logo.png')}
                    style={{width:100,height:100}}
                />
                <Text style={{color:'white',fontSize:20,fontWeight:500}}>John</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
            screenOptions={{
                drawerActiveBackgroundColor:'grey',
            }}
            drawerContent={(props)=><CustomDrawer {...props}
            
            />}>
                <Drawer.Screen
                    name='home'
                    component={HomeScreen}
                    options={{
                        drawerIcon:()=>(
                         <Icon name='upcircle' size={30} color ='black'/>   
                        ),
                        drawerLabelStyle:{color:'black'},
                        headerShown: true,
                    }}
                />
                <Drawer.Screen
                    name='intro'
                    component={IntroScreen}
                    options={{
                        drawerIcon:()=>(
                         <Icon name='upcircle' size={30} color ='black'/>   
                        ),
                        drawerLabelStyle:{color:'black'},
                        headerShown: true,
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
