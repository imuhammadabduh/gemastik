import React from "react";
import { View, Image, TextInput, StyleSheet, Button, TouchableOpacity, Text } from "react-native";

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Daftar" onPress={() => {}} />
      <TouchableOpacity ><Text style={{textAlign:"center"}} onPress={() => navigation.replace("SignIn")}>Belum memiliki akun? <Text style={{fontWeight:"bold"}}>Daftar</Text></Text></TouchableOpacity>

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
    width: 150,
    height: 150,
    marginBottom: 32,
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
});

export default SignUpScreen;
