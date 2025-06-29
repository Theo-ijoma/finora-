import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import React from "react";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/Button";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated"
import { useRouter } from "expo-router";

const welcome = () => {
  const router = useRouter()

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login button and footer */}

        <View>
          <TouchableOpacity onPress={()=> router.push('/(auth)/login') } style={styles.loginButton}>
            <Typo fontWeight="500" color="white">
              Sign in
            </Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(2000)}
            source={require("../../assets/images/welcome.png")}
            style={styles.welcomePage}
            resizeMode="contain"
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Animated.View 
          entering={FadeInDown.duration(1000).springify().damping(12)}
          style={{ alignItems: "center" }}>
            <Typo size={30} fontWeight="800" color={colors.textLight}>
              Always take control
            </Typo>
            <Typo size={30} fontWeight="800" color={colors.textLight}>
              of your finances
            </Typo>
          </Animated.View>

          <Animated.View 
          entering={FadeInDown.duration(1000).springify().damping(12)}
          style={{ alignItems: "center", gap: 2 }}>
            <Typo size={15} color={colors.textLight}>
              Finances must be arranged to set a better future
            </Typo>
            <Typo size={15}  color={colors.textLight}>
              Lifestyle in future
            </Typo>
          </Animated.View>

            <View style={styles.buttonContainer}>
                <Button onPress={()=> router.push('/(auth)/register') }>
                  <Typo size={22} color={colors.neutral900} fontWeight="600">Get Started</Typo>
                </Button>
            </View> 

        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomePage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 20,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingY._25,
  },
});
