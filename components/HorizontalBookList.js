import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const HorizontalBookList = ({ data, navigation }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) =>
          item.volumeInfo.authors &&
          item.volumeInfo.description &&
          item.volumeInfo.imageLinks.thumbnail &&
          item.volumeInfo.previewLink && (
            <TouchableOpacity
              style={{
                width: 200,
                marginRight: SIZES.font,
              }}
              onPress={() => navigation.navigate("Detail", { item })}
            >
              <Image
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 300,
                  borderRadius: SIZES.base,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font,
                    marginVertical: SIZES.base - 6,
                  }}
                  numberOfLines={1}
                >
                  {item.volumeInfo.title}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.gray,
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
    </View>
  );
};

export default HorizontalBookList;
