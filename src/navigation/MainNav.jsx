import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Home from "../screens/Home";
import Body from "./Body";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./Auth";
import AddCard from "../components/Home/AddCard";
import ConnectToDriver from "../components/Home/ConnectToDriver";
import Login from "../screens/Login";
import Example from "../screens/Example";
import Chat from "../components/Home/Chat";

import axios from "axios";
import { useLogin } from "../context/LoginProvider";

const Stack = createNativeStackNavigator();
export default function MainNav() {
  const [isLoading, setisLoading] = useState(true);
  const [isLogginedIn, setisLogginedIn] = useState(false);
  const [userToken, setuserToken] = useState(false);

  const { isLoggedIn } = useLogin();
  // https://www.youtube.com/watch?v=XxjPCRQL-vk&list=PLaAoUJDWH9WrPXMOkqHHsPHxbhvRDqryM&index=18

  useEffect(() => {
    //fetchApi();
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {!isLogginedIn ? <Stack.Screen name="auth" component={Auth} /> : <></>} */}
        {!isLoggedIn ? <Stack.Screen name="auth" component={Auth} /> : <></>}
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="body" component={Body} />
        <Stack.Screen name="addcard" component={AddCard} />
        <Stack.Screen name="connecttodriver" component={ConnectToDriver} />
        <Stack.Screen name="example" component={Example} />
        <Stack.Screen name="chat" component={Chat} />
      </Stack.Navigator>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
//});
