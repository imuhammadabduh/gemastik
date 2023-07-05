import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../Hooks/ThemeContext";

const TitleComponent = ({
  title,
  position = "center",
  width = "auto",
  size = 25,
}) => {
  const { themeState } = useContext(ThemeContext);
  return (
    <Text
      style={[styles.text,
        {
          color: themeState.colorPalette_2,
          width: width,
          textAlign: position,
          fontSize: size,
        },
      ]}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: { fontFamily: "Poppins-Bold" },
});

export default TitleComponent;
