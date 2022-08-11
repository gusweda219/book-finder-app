import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const categories = [
  "Art & Creativity",
  "Biographies & Memoirs",
  "Business",
  "Fitness",
  "History",
  "Philosophy",
  "Psychology",
  "Science",
  "Self-Help",
  "Writing",
];

const CategoryMenu = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: SIZES.font,
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          marginTop: SIZES.font,
        }}
      >
        Category
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: SIZES.font,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: SIZES.font,
                marginRight: SIZES.base,
                marginBottom: SIZES.base,
                borderRadius: SIZES.base,
                borderWidth: 1,
                borderColor: COLORS.primary,
                flex: 1,
              }}
              onPress={() =>
                navigation.navigate("Category", {
                  category: item,
                })
              }
            >
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                }}
              >
                {`#${item}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryMenu;
