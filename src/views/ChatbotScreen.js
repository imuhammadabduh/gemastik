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
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={
            "Apa yang anda adaa awd awd awda sd awd asd awd awd awd awd awd awdawd awd awd awdaw dawd awd awd awd awd a lakukan"
          }
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={false}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent nameAdmin={"Bot"} msgAdmin={"."} isBot={false} />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={true}
        />
        <ItemChatComponent
          nameAdmin={"Bot"}
          msgAdmin={"Apa yang anda lakukan"}
          isBot={false}
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


