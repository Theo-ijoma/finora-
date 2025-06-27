import { Dimensions, Platform, StyleSheet, View, Text, StatusBar } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/type'
import { colors } from '@/constants/theme'

const {height, width} = Dimensions.get('window')

const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
    let paddingTop = Platform.OS === 'ios' ? 0.06 : 0
  return (
    <View style={[{
        paddingTop,
        flex: 1,
        backgroundColor: colors.neutral900,
    },style]}>

    <StatusBar barStyle="light-content"/>
      {children}
    </View>
  )
}

export default ScreenWrapper