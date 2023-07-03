import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ChatbotScreen from "../views/ChatbotScreen";
import KamusScreen from "../views/KamusScreen";
import SusunKataScreen from "../views/SusunKataScreen";

const HomeScreen = () => {
  const data = [
    { id: 1, title: "Bahasa Jawa 1" },
    { id: 2, title: "Bahasa Jawa 2" },
    { id: 3, title: "Bahasa Jawa 3" },
    { id: 4, title: "Bahasa Jawa 4" },
    { id: 5, title: "Bahasa Jawa 5" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <View
        style={styles.containerRow}
      >
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
          Bahasa
        </Text>
        <Text style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
        <Ionicons name="search" size={24} color="grey" />
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  containerRow: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,

    height: 100,
    backgroundColor: "lightblue",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
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
