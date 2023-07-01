import AuthRouter from "./src/routes/AuthRouter";
import AppRouter from "./src/routes/AppRouter";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
export default function App() {
  const isLogin = true;
  return (
    <NavigationContainer>
      {isLogin ? <AppRouter /> : <AuthRouter />}
      <StatusBar backgroundColor="transparent" />
    </NavigationContainer>
  );
}
