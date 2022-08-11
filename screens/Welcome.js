import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="book-sharp" size={80} color="#FEBD38" />
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge * 1.2,
            color: COLORS.white,
            marginTop: 6,
          }}
        >
          Book Finder
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.white,
          }}
        >
          Find all the books you need
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FEBD38",
          borderRadius: SIZES.medium,
          minWidth: 260,
          padding: SIZES.small,
          alignSelf: "center",
          marginBottom: SIZES.font,
        }}
        onPress={() => navigation.replace("Home")}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.large,
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
