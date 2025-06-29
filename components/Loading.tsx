import { View, Text, ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'

const Loading = ({
    size = "large",
    color = colors.textLight  
    
}: ActivityIndicatorProps) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading