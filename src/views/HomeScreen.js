import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ParagraphComponent from "../components/ParagraphComponent";
import { useContext, useLayoutEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {
  datas = [
    {
        'title': 'Bahasa Jawa',
        'urlKamus': 'https://www.example.com/kamus-jawa',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-jawa',
        'urlChatBot': 'https://www.example.com/chatbot-jawa',
    },
    {
        'title': 'Bahasa Minang',
        'urlKamus': 'https://www.example.com/kamus-minang',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-minang',
        'urlChatBot': 'https://www.example.com/chatbot-minang',
    },
    {
        'title': 'Bahasa Batak',
        'urlKamus': 'https://www.example.com/kamus-batak',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-batak',
        'urlChatBot': 'https://www.example.com/chatbot-batak',
    },
    {
        'title': 'Bahasa Sunda',
        'urlKamus': 'https://www.example.com/kamus-sunda',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-sunda',
        'urlChatBot': 'https://www.example.com/chatbot-sunda',
    },
    {
        'title': 'Bahasa Bali',
        'urlKamus': 'https://www.example.com/kamus-bali',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-bali',
        'urlChatBot': 'https://www.example.com/chatbot-bali',
    },
    {
        'title': 'Bahasa Aceh',
        'urlKamus': 'https://www.example.com/kamus-aceh',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-aceh',
        'urlChatBot': 'https://www.example.com/chatbot-aceh',
    },
    {
        'title': 'Bahasa Bugis',
        'urlKamus': 'https://www.example.com/kamus-bugis',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-bugis',
        'urlChatBot': 'https://www.example.com/chatbot-bugis',
    },
    {
        'title': 'Bahasa Bima',
        'urlKamus': 'https://www.example.com/kamus-bima',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-bima',
        'urlChatBot': 'https://www.example.com/chatbot-bima',
    },
    {
        'title': 'Bahasa Madura',
        'urlKamus': 'https://www.example.com/kamus-madura',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-madura',
        'urlChatBot': 'https://www.example.com/chatbot-madura',
    },
    {
        'title': 'Bahasa Dayak',
        'urlKamus': 'https://www.example.com/kamus-dayak',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-dayak',
        'urlChatBot': 'https://www.example.com/chatbot-dayak',
    },
    {
        'title': 'Bahasa Lampung',
        'urlKamus': 'https://www.example.com/kamus-lampung',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-lampung',
        'urlChatBot': 'https://www.example.com/chatbot-lampung',
    },
    {
        'title': 'Bahasa Minahasa',
        'urlKamus': 'https://www.example.com/kamus-minahasa',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-minahasa',
        'urlChatBot': 'https://www.example.com/chatbot-minahasa',
    },
    {
        'title': 'Bahasa Sunda',
        'urlKamus': 'https://www.example.com/kamus-sundanese',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-sundanese',
        'urlChatBot': 'https://www.example.com/chatbot-sundanese',
    },
    {
        'title': 'Bahasa Makassar',
        'urlKamus': 'https://www.example.com/kamus-makassar',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-makassar',
        'urlChatBot': 'https://www.example.com/chatbot-makassar',
    },
    {
        'title': 'Bahasa Palembang',
        'urlKamus': 'https://www.example.com/kamus-palembang',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-palembang',
        'urlChatBot': 'https://www.example.com/chatbot-palembang',
    },
    {
        'title': 'Bahasa Banjar',
        'urlKamus': 'https://www.example.com/kamus-banjar',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-banjar',
        'urlChatBot': 'https://www.example.com/chatbot-banjar',
    },
    {
        'title': 'Bahasa Ternate',
        'urlKamus': 'https://www.example.com/kamus-ternate',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-ternate',
        'urlChatBot': 'https://www.example.com/chatbot-ternate',
    },
    {
        'title': 'Bahasa Tidore',
        'urlKamus': 'https://www.example.com/kamus-tidore',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-tidore',
        'urlChatBot': 'https://www.example.com/chatbot-tidore',
    },
    {
        'title': 'Bahasa Belitung',
        'urlKamus': 'https://www.example.com/kamus-belitung',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-belitung',
        'urlChatBot': 'https://www.example.com/chatbot-belitung',
    },
    {
        'title': 'Bahasa Rejang',
        'urlKamus': 'https://www.example.com/kamus-rejang',
        'urlSusunKalimat': 'https://www.example.com/susun-kalimat-rejang',
        'urlChatBot': 'https://www.example.com/chatbot-rejang',
    }
]

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
