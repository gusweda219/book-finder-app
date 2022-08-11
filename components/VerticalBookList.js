import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, SHADOWS, FONTS, COLORS } from "../constants/theme";

const VerticalBookList = ({ data, navigation }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) =>
        item.volumeInfo.authors &&
        item.volumeInfo.description &&
        item.volumeInfo.imageLinks &&
        item.volumeInfo.previewLink && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <View
              style={{
                ...SHADOWS.light,
                marginRight: SIZES.font,
              }}
            >
              <Image
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: SIZES.base,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                }}
              >
                {item.volumeInfo.title}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                  color: COLORS.gray,
                  marginTop: 4,
                }}
              >{`by ${item.volumeInfo.authors[0]}`}</Text>
            </View>
          </TouchableOpacity>
        )
      }
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        padding: SIZES.font,
      }}
    />
  );
};

export default VerticalBookList;
