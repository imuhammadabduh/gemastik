import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../Hooks/ThemeContext";
import { useContext } from "react";

const TextButtonComponent = ({  onPress,title, position = "center" }) => {
  const { themeState } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={{ marginBottom: 16, width: "100%" }}
    >
      <Text  style={{ textAlign: position,color:themeState.colorPalette_3,fontFamily: "Poppins-Regular", }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButtonComponent;
