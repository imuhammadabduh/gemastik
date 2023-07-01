import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/images/login.png")}
        style={styles.logo}
      />
      <Text
        style={{
          color: "#5273E1",
          fontWeight: "bold",
          marginBottom: 16,
          fontSize: 25,
        }}
      >
        Masuk
      </Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={{ marginBottom: 16, width: "100%" }}>
        <Text onPress={() => navigation.replace("SignUp")}>Lupa password?</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonInput}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("SignUp")}>
        <Text style={{ textAlign: "center" }}>
          Belum memiliki akun?{" "}
          <Text style={{ fontWeight: "bold" }}>Daftar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#F1F4FF",
  },
  logo: {
    height: 300,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonInput: {
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#5273E1",

    marginBottom: 16,
  },
});

export default SignInScreen;
