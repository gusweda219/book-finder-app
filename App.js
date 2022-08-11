import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import { COLORS } from "./constants/theme";
import Search from "./screens/Search";
import Detail from "./screens/Detail";
import { StatusBar } from "expo-status-bar";
import Category from "./screens/Category";
import Welcome from "./screens/Welcome";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer
        theme={{
          colors: {
            background: COLORS.white,
          },
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ animation: "fade_from_bottom", animationDuration: 100 }}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
