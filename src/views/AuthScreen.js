import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/images/auth.png")}
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
        Selamat Datang
      </Text>
      <Text
        style={{
          //   color: "#5273E1",
          //   fontWeight: "bold",
          marginBottom: 32,
          //   fontSize: 25,
        }}
      >
        warn No apps connected. Sending "reload" to all React Native apps
        failed. Make sure your app is running in the simulator or on a phone
        connected via USB.
      </Text>
      <View style={{ width: "100%", position: "absolute", bottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.replace("SignIn")}
          activeOpacity={0.5}
          style={styles.buttonInput}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("SignUp")}
          activeOpacity={0.5}
          style={{
            fontSize: 16,
            textAlign: "center",
            width: "100%",
            borderRadius: 5,
            padding: 10,
            marginBottom: 16,
            borderColor: "#5273E1",
            borderWidth: 1,
          }}
        >
          <Text style={{ textAlign: "center", color: "#5273E1" }}>Daftar</Text>
        </TouchableOpacity>
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

export default AuthScreen;
