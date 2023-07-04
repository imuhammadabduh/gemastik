import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatbotScreen from "../views/ChatbotScreen";
import KamusScreen from "../views/KamusScreen";
import SusunKataScreen from "../views/SusunKataScreen";
import ParagraphComponent from "../components/ParagraphComponent";
import TitleComponent from "../components/TitleComponent";

const HomeScreen = () => {
  const data = [
    { id: 1, title: "Bahasa Jawa 1" },
    { id: 2, title: "Bahasa Jawa 2" },
    { id: 3, title: "Bahasa Jawa 3" },
    { id: 4, title: "Bahasa Jawa 4" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
    { id: 5, title: "Bahasa Jawa 5" },
  ];

  const renderItem = ({ item }) => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return (
      <View
        style={[
          styles.box,
          {
            // marginBottom: 10,
            backgroundColor: `hsl(${randomNumber},50%,70%)`,
          },
        ]}
      >
        <ParagraphComponent
          style={[styles.title, { color: `hsl(${randomNumber},50%,20%)` }]}
        >
          {item.title}
        </ParagraphComponent>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Bahasa
        </Text> */}
        <TitleComponent size={20} title={"Bahasa"} />
        {/* <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}> */}
        <Ionicons
          style={{ fontSize: 25 }}
          name="search"
          size={25}
          color="grey"
        />
        {/* </Text> */}
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{
          flex:1,
              paddingTop: 40,
              // padding: 10,


            }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
              // padding: 10,

    position: "relative",
    marginHorizontal: 10,
  },
  headerContainer: {

    display: "none",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"red",
    marginVertical: 10,
  },
  box: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    height: 100,
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chatbot" component={ChatbotScreen} />
      <Stack.Screen name="Kamus" component={KamusScreen} />
      <Stack.Screen name="SusunKata" component={SusunKataScreen} />
    </Stack.Navigator>
  );
}

export default AppRouter;
