import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import VerticalBookList from "../components/VerticalBookList";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { FONTS, SIZES } from "../constants/theme";

const Category = ({ route, navigation }) => {
  const { category } = route.params;
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const resp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=AIzaSyA8aFY58Fo4WZQ2r5f7ycPoPzGfkU07AIw`
      );
      setBooks(resp.data.items);
    };

    fetchBooks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: SIZES.font,
          paddingBottom: SIZES.base,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
            marginLeft: SIZES.base,
          }}
        >
          {category}
        </Text>
      </View>
      {books && <VerticalBookList data={books} navigation={navigation} />}
    </SafeAreaView>
  );
};

export default Category;
