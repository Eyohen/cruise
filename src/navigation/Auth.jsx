import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Onboarding2 from "../screens/Onboarding2";
// import Onboarding3 from "../screens/Register";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();
function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      {/* <Stack.Screen name="home" component={Home}></Stack.Screen> */}
      <Stack.Screen name="register" component={Register}></Stack.Screen>
      <Stack.Screen name="onboarding" component={Onboarding}></Stack.Screen>
      <Stack.Screen name="onboarding2" component={Onboarding2}></Stack.Screen>

      <Stack.Screen name="login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Auth;
