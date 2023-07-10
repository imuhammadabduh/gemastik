import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ParagraphComponent from "../components/ParagraphComponent";
import { useContext, useLayoutEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {
  const datas = [
    {
      title: "Bahasa Jawa Ngoko",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Jawa Inggil",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Jawa Ngapak",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Sunda",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Lampung",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Betawi",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Palembang",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Papua",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Minang",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Batak",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
    {
      title: "Bahasa Melayu",
      urlKamus: "",
      urlSusunKalimat: "",
      urlChatBot: "",
    },
  ];
  const [search, setSearch] = useState("");
  const searchArray = (arr, regex) => {
    const regexPattern = new RegExp(regex, "i"); // 'i' flag for case-insensitive search
    return arr.filter((str) => regexPattern.test(str.title));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);
  const searchResult = searchArray(datas, search);
  const ItemListLanguageComponent = ({ item }) => {
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
        data={searchResult}
        renderItem={ItemListLanguageComponent}
        keyExtractor={(item, index) => index}
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

export default HomeScreen;
