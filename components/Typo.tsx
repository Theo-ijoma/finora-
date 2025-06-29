import { StyleSheet, View, TextStyle, Text } from 'react-native'
import React from 'react'
import {colors} from '@/constants/theme'
import { TypoProps } from '@/type'
import { verticalScale } from '@/utils/styling'

const Typo = ({
    size, 
    color,
    fontWeight,
    children,
    style,
    textProps = {}
}: TypoProps) => {
    const textStyle: TextStyle = {
        fontSize: size? verticalScale(size) : verticalScale(18),
        color: color ?? "#fff",
        fontWeight,

    }
  return <Text style={[textStyle, style]} {...textProps}>{children}</Text>
}

export default Typo