import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { useState } from "react";
import axios from "axios";
import VerticalBookList from "../components/VerticalBookList";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    if (search.trim()) {
      const resp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA8aFY58Fo4WZQ2r5f7ycPoPzGfkU07AIw`
      );
      setBooks(resp.data.items);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: SIZES.font,
          paddingBottom: SIZES.base,
          alignItems: "center",
        }}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            borderRadius: SIZES.font,
            borderWidth: 1,
            borderColor: COLORS.gray,
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            marginLeft: 4,
          }}
        >
          <Ionicons name="search" size={20} color={COLORS.gray} />
          <TextInput
            placeholder="Search books"
            returnKeyType="search"
            onSubmitEditing={() => fetchBooks()}
            onChangeText={(text) => setSearch(text)}
            autoFocus={true}
            style={{
              flex: 1,
              marginLeft: SIZES.font,
            }}
          />
        </View>
      </View>
      {/* List Books */}
      {books && <VerticalBookList data={books} navigation={navigation} />}
    </SafeAreaView>
  );
};

export default Search;
