import { View } from "react-native";
import ParagraphComponent from "./ParagraphComponent";
import { defaultTheme } from "../datas/Themes";

const ItemChatComponent = ({ nameAdmin, msgAdmin, isBot = true }) => {
  return (
    <View
      style={[
        { marginBottom: 10 },
        isBot ? { alignItems: "flex-start" } : { alignItems: "flex-end" },
      ]}
    >
      <View
        style={{
          maxWidth: "80%",
          backgroundColor: defaultTheme.colorPalette_2,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <ParagraphComponent
          style={[
            { fontFamily: "Poppins-Bold", color: defaultTheme.colorPalette_1 },
            isBot ? { textAlign: "left" } : { textAlign: "right" },
          ]}
        >
          {nameAdmin}
        </ParagraphComponent>
        <ParagraphComponent
          style={[
            { color: defaultTheme.colorPalette_1 },
            isBot ? { textAlign: "left" } : { textAlign: "right" },
          ]}
        >
          {msgAdmin}
        </ParagraphComponent>
      </View>
    </View>
  );
};

export default ItemChatComponent;
