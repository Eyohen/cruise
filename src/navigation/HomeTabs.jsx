import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View, Text, Image } from "react-native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Task from "../screens/Task";
import NavbarTab from "./NavbarTab";

const Tabs = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: "#092953",
  style: {
    height: "10%",
  },
  headerShown: false,
};
const HomeTabs = () => {
  return (
    <Tabs.Navigator screenOptions={tabBarOptions}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarTab
              message={"Home"}
              imageuri={require("../../assets/Vector-17.png")}
              focused={focused}
              id="1"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarTab
              message={"Groups"}
              imageuri={require("../../assets/Vector-15.png")}
              focused={focused}
              id="2"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarTab
              message={"Account"}
              imageuri={require("../../assets/Vector-16.png")}
              focused={focused}
              id="3"
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
