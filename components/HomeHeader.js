import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, FONTS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SIZES.font,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
        }}
      >
        Welcome to Book Finder
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="bookmark"
          size={24}
          color="black"
          style={{
            marginRight: SIZES.base - 2,
          }}
        />
        <Ionicons
          name="search"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
