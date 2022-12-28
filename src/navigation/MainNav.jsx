import React, { useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import HomeTabs from "./HomeTabs";
import Home from "../screens/Home";
import Body from "./Body";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";

const Stack = createNativeStackNavigator();
export default function MainNav() {
  const [isLogginedIn, setisLogginedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLogginedIn ? (
          <Stack.Screen name="auth" component={Auth} />
        ) : (
          <Stack.Screen name="body" component={Body} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
