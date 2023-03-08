import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import LocationScroll from "../components/Home/LocationScroll";
import BackHeader from "../components/General/BackHeader";
import GenInput from "../components/General/GeneralInput";
import HomeScreen from "../components/Home/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function Home({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Payment");

  // to get the current status of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Animated properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale initially must be one...
  const scaleValue = useRef(new Animated.Value(0)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.Container}>
      <Text style={styles.name}>James Doe</Text>
      <Text style={styles.edit}>Edit Profile</Text>
      <View style={styles.line} />

      <View style={{ marginTop: 50 }}>
        {
          // tab bar buttons...
        }
        {TabButton(currentTab, setCurrentTab, "Payment", "creditcard")}
        {TabButton(currentTab, setCurrentTab, "Ride History", "clockcircleo")}
        {TabButton(currentTab, setCurrentTab, "Support", "wechat")}
        {TabButton(currentTab, setCurrentTab, "About", "exclamationcircleo")}
      </View>

      <View style={{ marginTop: 240 }}>
        {TabButton(currentTab, setCurrentTab, "Settings", "setting")}
        {TabButton(currentTab, setCurrentTab, "LogOut", "logout")}
      </View>

      {/* <HomeScreen navigation={navigation} /> */}

      {
        // overlay view ..
      }
      <Animated.View
        style={{
          backgroundColor: "white",
          height: 850,
          marginTop: -750,
          paddingVertical: 20,
          borderRadius: showMenu ? 25 : 0,
          // Transforming View...
          transform: [{ scale: 1 }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button
        }
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do action here
              // Scale the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <AntDesign
              name={showMenu ? "close" : "menufold"}
              size={24}
              color="black"
              style={styles.menu}
            />
            <HomeScreen navigation={navigation} />

            {/* <Text style={styles.henry}>Henry</Text> */}
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* <HomeScreen navigation={navigation} /> */}
    </View>
  );
}

// for multiple buttons...
const TabButton = (currentTab, setCurrentTab, title, icon) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do log out stuff
        } else {
          setCurrentTab(title);
        }
      }}
    >
      {/* {currentTab == title ? "white" : "#444444"} */}
      <View
        style={{
          ...styles.flex,
          backgroundColor: currentTab == title ? "#052941" : "transparent",
        }}
      >
        <AntDesign
          name={icon}
          size={24}
          color={currentTab == title ? "white" : "#444444"}
          style={styles.icon}
        />
        <Text
          style={{
            ...styles.text,
            color: currentTab == title ? "white" : "#444444",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    //backgroundColor: "#6CB4EE",
    backgroundColor: "#F0F8FF",

    height: 1500,
  },
  name: {
    fontWeight: "700",
    fontSize: 22,
    color: "#444444",
    marginTop: 90,
    marginHorizontal: 30,
  },
  edit: {
    fontWeight: "300",
    fontSize: 18,
    color: "#444444",
    marginTop: 0,
    marginHorizontal: 30,
  },
  line: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 160,
    marginTop: 5,
    // marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: 20,
  },
  flex: {
    backgroundColor: "#FFFFFF",
    width: 200,
    borderRadius: 8,
    height: 40,
    marginHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 20,
    paddingTop: 7,
  },
  text: {
    fontWeight: "300",
    fontSize: 18,
    //color: "",
    marginTop: -23,
    marginHorizontal: 50,
  },
  menu: {
    marginHorizontal: 25,
    marginTop: 70,
  },
  henry: {
    marginTop: -700,
  },
});

export default Home;
