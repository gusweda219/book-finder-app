import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import CategoryMenu from "../components/CategoryMenu";

import axios from "axios";
import HorizontalBookList from "../components/HorizontalBookList";
import { FONTS, SIZES } from "../constants/theme";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const resp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:Computers&key=AIzaSyA8aFY58Fo4WZQ2r5f7ycPoPzGfkU07AIw&maxResults=8`
      );
      setBooks(resp.data.items);
    };

    fetchBooks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader />
      <CategoryMenu navigation={navigation} />
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          paddingHorizontal: SIZES.font,
        }}
      >
        Recommendation for you
      </Text>
      <HorizontalBookList data={books} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
