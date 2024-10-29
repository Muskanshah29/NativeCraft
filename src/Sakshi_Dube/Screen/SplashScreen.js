import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Drawer')
    },3000)
  })
  return (
    <LinearGradient
      colors={['#062626', '#ACD6F2', '#48C9B0', '#1ABC9C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientContainer}
    >
      <Text style={styles.titleText}>NativeCraft</Text>
      <Text style={styles.subtitle}>Learn with fun...!</Text>
    </LinearGradient>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2E4053',
    textShadowColor: '#ffff',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 15,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#2E4053',
    textShadowColor: '#2E4053',
    textShadowRadius: 2,
    fontWeight: '500',
    letterSpacing: 1,
    top: 5
  }
});
