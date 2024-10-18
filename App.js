import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toastscreen from './src/Gayatri/Toastscreen';
import FlatListScreen from './src/Gayatri/FlatlistScreen';
import DrawerNavigatorScreen from './src/Gayatri/DrawerNavigatorScreen';


const App = () => {
    return (
        <View>
          {/* <Toastscreen/> */}
          {/* <FlatListScreen/> */}
         <DrawerNavigatorScreen/>
        </View>
    )
}
export default App;
