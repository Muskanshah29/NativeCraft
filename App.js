import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatlistScreen from './src/Gayatri/FlatlistScreen';
import BottomTabNavigatorScreen from './src/MayuriWagh/screen/BottomTabNavigatorScreen';
import PropsScreen from './src/MayuriWagh/screen/PropsScreen';
import DrawerNavigatorScreen from './src/Gayatri/DrawerNavigatorScreen';



const App = () => {
    return (
        <View>
            {/* <Text>App</Text> */}
            {/* <FlatlistScreen/> */}
            {/* <BottomTabNavigatorScreen/> */}
            {/* <PropsScreen/> */}
            <DrawerNavigatorScreen/>
            
            {/* <FlatlistScreen/> */}
            {/* <Toastscreen/> */}
        </View>
    )
}
export default App;
