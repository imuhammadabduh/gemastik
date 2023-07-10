import { StyleSheet, Text } from "react-native";

const ParagraphComponent = (props) => {
  return <Text onPress={props.onPress} style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
  },
});

export default ParagraphComponent;
