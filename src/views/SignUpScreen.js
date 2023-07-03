import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import TextInputConponent from "../components/TextInputConponent";
import { ThemeContext } from "../Hooks/ThemeContext";
import BoxButtonComponent from "../components/BoxButtonComponent";
import TextButtonComponent from "../components/TextButtonComponent";
import HeaderAuthComponent from "../components/HeaderAuthComponent";
import SignUpImg from "../assets/images/signup.png"

const SignUpScreen = ({ navigation }) => {
  const { themeState } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: themeState.colorPalette_1 }]}
    >
      <HeaderAuthComponent title={"Daftar"} source={SignUpImg}/>
      <TextInputConponent title="Email" />
      <TextInputConponent title="Nomer Telepon" />
      <TextInputConponent title="Password" password={true} />
      <TextInputConponent title="Konfirmasi Password" password={true} />
      <BoxButtonComponent onPress={() => {}} rounded={true} title={"Daftar"} />
      <TextButtonComponent
        onPress={() => navigation.push("SignIn")}
        title={
          <Text style={{ textAlign: "center" }}>
            Sudah memiliki akun?{" "}
            <Text style={{ fontWeight: "bold" }}>Masuk</Text>
          </Text>
        }
      />
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
});

export default SignUpScreen;

