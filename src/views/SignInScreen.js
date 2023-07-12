import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import TextInputConponent from "../components/TextInputConponent";
import { ThemeContext } from "../Hooks/ThemeContext";
import BoxButtonComponent from "../components/BoxButtonComponent";
import TextButtonComponent from "../components/TextButtonComponent";
import HeaderAuthComponent from "../components/HeaderAuthComponent";
import SignUpImg from "../assets/images/login.png"
const SignInScreen = ({ navigation }) => {
  const { themeState } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: themeState.colorPalette_1 }]}
    >
      <HeaderAuthComponent source={SignUpImg} title={"Masuk"}/>
      <TextInputConponent title="Username" />
      <TextInputConponent title="Password" password={true} />
      <TextButtonComponent title={"Lupa password?"} position="left" />
      <BoxButtonComponent onPress={() => {}} rounded={true} title={"Masuk"} />
      <TextButtonComponent
        onPress={() => navigation.replace("SignUp")}
        title={
          <Text style={{ textAlign: "center" }}>
            Belum memiliki akun?{" "}
            <Text style={{ fontFamily:"Poppins-Bold",color: themeState.colorPalette_2}}>Daftar</Text>
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

export default SignInScreen;
