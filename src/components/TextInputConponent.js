import { View, StyleSheet, TextInput } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../Hooks/ThemeContext";

export default function TextInputConponent({ title, password = false }) {
  const { themeState } = useContext(ThemeContext);

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: themeState.colorPalette_3,
          color: themeState.colorPalette_3,
        },
      ]}
      placeholder={title}
      placeholderTextColor={themeState.colorPalette_2}
      secureTextEntry={password}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: "100%",
    fontFamily: "Poppins-Regular",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
