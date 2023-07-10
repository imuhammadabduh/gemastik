import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatbotScreen from "../views/ChatbotScreen";
import KamusScreen from "../views/KamusScreen";
import SusunKataScreen from "../views/SusunKataScreen";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import { ThemeContext, defaultTheme } from "../Hooks/ThemeContext";
import { useContext, useLayoutEffect, useState } from "react";
import HomeScreen from "../views/HomeScreen";

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
          color: defaultTheme.colorPalette_2,
        },
        headerStyle: { backgroundColor: defaultTheme.colorPalette_1 },
        contentStyle: { backgroundColor: defaultTheme.colorPalette_1 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerSearchBarOptions: true,
          headerShadowVisible: false,
          title: "List Bahasa",
        }}
      />
      <Stack.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{
          headerShadowVisible: false,
          title: "Chat Bot",
        }}
      />
      <Stack.Screen
        name="Kamus"
        component={KamusScreen}
        options={{
          headerSearchBarOptions: true,
          headerShadowVisible: false,
          title: "Kamus",
        }}
      />
      <Stack.Screen
        name="SusunKata"
        component={SusunKataScreen}
        options={{
          headerShadowVisible: false,
          title: "Games",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRouter;
