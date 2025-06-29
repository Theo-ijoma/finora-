import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/theme'


const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/(auth)/welcome'); // Navigate to home after 2 seconds
    }, 2000);
  }, []);
  return (
    <>
    <View style={styles.container}>
      <Image 
      style={styles.logo} 
      source={require("../assets/images/splashImage.png")} />
    </View>
    </>
    
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral900,
    
  },
  logo: {
    height: "20%",
    resizeMode: 'contain',
    aspectRatio: 1,
  }
});
