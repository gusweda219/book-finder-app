import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useState } from "react";

const SubInfo = ({ text, value, defaultValue }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.gray,
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.medium,
          textTransform: "uppercase",
          marginTop: 2,
        }}
      >
        {value ?? defaultValue}
      </Text>
    </View>
  );
};

const Detail = ({ route, navigation }) => {
  const { item } = route.params;
  const [bookmark, setBookmark] = useState(false);

  const insets = useSafeAreaInsets();

  const handleButton = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: insets.bottom,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth: 200,
            padding: SIZES.small,
          }}
          onPress={() => handleButton(item.volumeInfo.previewLink)}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.large,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Read Book
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            height: 300,
          }}
        >
          <View
            style={{
              height: "80%",
              backgroundColor: COLORS.primary,
            }}
          />
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: SIZES.font,
            }}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="white"
              onPress={() => navigation.goBack()}
            />
            {bookmark ? (
              <Ionicons
                name="bookmark"
                size={24}
                color="white"
                onPress={() => setBookmark(false)}
              />
            ) : (
              <Ionicons
                name="bookmark-outline"
                size={24}
                color="white"
                onPress={() => setBookmark(true)}
              />
            )}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
              ...SHADOWS.light,
            }}
          >
            <Image
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              resizeMode="cover"
              style={{
                width: 160,
                height: 220,
                borderRadius: SIZES.base,
              }}
            />
          </View>
        </View>
        <View
          style={{
            padding: SIZES.font,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              textAlign: "center",
            }}
          >
            {item.volumeInfo.title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.light,
              textAlign: "center",
              marginTop: SIZES.base - 4,
            }}
          >{`by ${item.volumeInfo.authors[0]}`}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.font,
            }}
          >
            <SubInfo
              text={"Rating"}
              value={item.volumeInfo.averageRating}
              defaultValue={"-"}
            />
            <SubInfo
              text={"Pages"}
              value={item.volumeInfo.pageCount}
              defaultValue={"-"}
            />
            <SubInfo
              text={"Language"}
              value={item.volumeInfo.language}
              defaultValue={"-"}
            />
            <SubInfo
              text={"Type"}
              value={item.volumeInfo.printType}
              defaultValue={"-"}
            />
          </View>
          <View
            style={{
              marginTop: SIZES.large,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                textAlign: "justify",
                marginTop: SIZES.base,
              }}
            >
              {item.volumeInfo.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
