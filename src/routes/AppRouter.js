import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatbotScreen from "../views/ChatbotScreen";
import KamusScreen from "../views/KamusScreen";
import SusunKataScreen from "../views/SusunKataScreen";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";
import { ThemeContext, defaultTheme } from "../Hooks/ThemeContext";
import { useContext } from "react";

const HomeScreen = ({ navigation }) => {
  const data = [
    { id: 1, title: "Bahasa Jawa Ngoko dan bahasa halusnya" },
    { id: 2, title: "Bahasa Jawa Inggil" },
    { id: 3, title: "Bahasa Jawa Ngpak" },
    { id: 4, title: "Bahasa Jawa 4" },
    { id: 5, title: "Bahasa Jawa 5" },
  ];

  const renderItem = ({ item }) => {
    const randomNumber = Math.floor(Math.random() * 360) + 1;
    return (
      <View
        style={[
          styles.box,
          {
            backgroundColor: `hsl(${randomNumber},50%,70%)`,
          },
        ]}
      >
        <ParagraphComponent
          style={[
            styles.title,
            { color: `hsl(${randomNumber},40%,40%)`, marginBottom: 5 },
          ]}
        >
          {item.title}
        </ParagraphComponent>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderTopWidth: 1,
            paddingTop: 10,
            borderColor: `hsl(${randomNumber},50%,50%)`,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => navigation.push("Kamus")}
          >
            <Ionicons
              style={{ fontSize: 20 }}
              name="book"
              size={25}
              color={`hsl(${randomNumber},45%,45%)`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: `hsl(${randomNumber},50%,50%)`,
            }}
            onPress={() => navigation.push("SusunKata")}
          >
            <Ionicons
              style={{ fontSize: 20 }}
              name="game-controller"
              size={25}
              color={`hsl(${randomNumber},45%,45%)`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => navigation.push("Chatbot")}
          >
            <Ionicons
              style={{ fontSize: 20 }}
              name="chatbox"
              size={25}
              color={`hsl(${randomNumber},45%,45%)`}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //,
    marginHorizontal: 10,

    marginVertical: 15,
  },
  box: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    padding: 12,
    justifyContent: "space-between",
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
});

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
          title: "List Bahasa",
        }}
      />
      <Stack.Screen
        name="Kamus"
        component={KamusScreen}
        options={{
          headerSearchBarOptions: true,
          headerShadowVisible: false,
          title: "List Bahasa",
        }}
      />
      <Stack.Screen
        name="SusunKata"
        component={SusunKataScreen}
        options={{
          headerShadowVisible: false,
          title: "List Bahasa",
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRouter;
