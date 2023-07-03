import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../Hooks/ThemeContext";

const BoxButtonComponent = ({
  title,
  onPress,
  rounded = false,
  borderButton = false,
}) => {
  const { themeState } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        styles.buttonInput,
        { borderRadius: rounded ?99:10},
        borderButton
          ? {
              color: themeState.colorPalette_2,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: themeState.colorPalette_2,
            }
          : {
              backgroundColor: themeState.colorPalette_2,
            },
      ]}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins-Regular",
          color: borderButton
            ? themeState.colorPalette_2
            : themeState.colorPalette_1,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonInput: {
    
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    padding: 10,
    marginBottom: 16,
  },
});

export default BoxButtonComponent;
