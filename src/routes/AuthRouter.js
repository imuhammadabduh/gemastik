import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../views/SignInScreen";
import SignUpScreen from "../views/SignUpScreen";
import AuthScreen from "../views/AuthScreen";

const Stack = createNativeStackNavigator();

function AuthRouter() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false,animation:"flip" }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthRouter;
