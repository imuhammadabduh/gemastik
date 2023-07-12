import { View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import ParagraphComponent from "../components/ParagraphComponent";
import ItemChatComponent from "../components/ItemChatComponent";
import { defaultTheme } from "../datas/Themes";

export default function ChatbotScreen() {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, []);
  const handleContentSizeChange = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <ScrollView
      showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={handleContentSizeChange}
      >

        <ItemChatComponent
          nameAdmin={"(Aku) Andy"}
          msgAdmin={"Halo bot"}
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Halo juga, Apa yang kamu lakukan Andy?"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"(Aku) Andy"}
          msgAdmin={
            "ga papa, apa kau bisa pake bahasa jawa?"
          }
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"oh tentu, kulo ahlinya-ahli, wkwkwk"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"dewe iso ngobrol ngango boso jowo saiki!"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"(Aku) Andy"}
          msgAdmin={"Weh keren tenan koe iso boso jowo"}
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"wah suwun, qulo dirancang ben ahli nang boso jowo, dadi koe iso ngobrol karo aku, kalo koe ndue waktu luang iso ngobrol karo aku nganggo obrolan iki!"}
          isBot={true}
        />
                <ItemChatComponent
          nameAdmin={"(Aku) Andy"}
          msgAdmin={"cobo koe ajari aku bahasa jowo seng angel?"}
          isBot={false}
        />
                <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"maap, kulo jek di dandani(maintenence)"}
          isBot={true}
        />
      </ScrollView>
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderColor:defaultTheme.colorPalette_3,
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholder="Ketik pesan"
        />
        <TouchableOpacity>
          <Ionicons style={{ padding: 10,color:defaultTheme.colorPalette_2 }} name="send" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


