import AuthRouter from "./src/routes/AuthRouter";
import AppRouter from "./src/routes/AppRouter";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import ThemeContextProvider, { ThemeContext } from "./src/Hooks/ThemeContext";
import {  useEffect, useState } from "react";
import {  loadAsync } from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadAsync({
        "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const isLogin = true;

  return (
    <ThemeContextProvider>
      <NavigationContainer>
        {isLogin ? <AppRouter /> : <AuthRouter />}
        <StatusBar translucent={false} backgroundColor={"#5273E1"} />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}
