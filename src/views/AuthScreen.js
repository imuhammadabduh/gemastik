import React, { useContext } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import BoxButtonComponent from "../components/BoxButtonComponent";
import TitleComponent from "../components/TitleComponent";
import { ThemeContext } from "../Hooks/ThemeContext";
import ParagraphComponent from "../components/ParagraphComponent";

const AuthScreen = ({ navigation }) => {
  const { themeState } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeState.colorPalette_1,
        },
      ]}
    >
      <View
        style={{
          alignItems: "center",
          marginBottom: 150,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/images/auth.png")}
          style={styles.logo}
        />
        <TitleComponent title={"Hai, Bahasaer's!"} />

        <ParagraphComponent style={{ fontSize: 18, textAlign: "center" }}>
          "Error: Invalid hook call. Hooks can only be called inside of the body
          of a function component. This could happen for one of the following
          reasons"
        </ParagraphComponent>
      </View>
      <View style={{ width: "100%", position: "absolute", bottom: 10 }}>
        <BoxButtonComponent
          title={"Masuk"}
          rounded={false}
          onPress={() => navigation.replace("SignIn")}
        />
        <BoxButtonComponent
          title={"Daftar"}
          rounded={false}
          onPress={() => navigation.replace("SignUp")}
          borderButton={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    height: 300,
    width: 300,
  },
});

export default AuthScreen;
