import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import GeneralButton from "../components/General/GeneralButton";
import GeneralInput from "../components/General/GeneralInput";
//import CreateInput from "../components/General/CreateInput";
//import BottomText from './BottomText'
//import OnbaordingSwiper from './OnbaordingSwiper'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import client from "../api/client";
import { useLogin } from "../context/LoginProvider";

import BackHeader from "../components/General/BackHeader";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation, onPress }) => {
  const { setIsLoggedIn } = useLogin();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = { name, email, password };

  const submitForm = async (user) => {
    try {
      const res = await client.post("/login", { ...user });
      console.log(user);
      console.log(res.data);

      if (res.data.success) {
        setIsLoggedIn(true);
        // setName({ name: "" });
        // setEmail({ email: "" });
        // setPassword({ password: "" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "#FFFFFF",
          flex: 1,
        }}
      >
        <BackHeader navigation={navigation} />
        <Text style={styles.text}>Login here</Text>
        <Text style={styles.text2}>
          Driver will confirm picking up the right person {"\n"} by your name
        </Text>
        <GeneralInput
          placeholder={"Name"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          value={name}
          onChangeValue={setName}
        />
        <GeneralInput
          placeholder={"Email"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          value={email}
          onChangeValue={setEmail}
        />
        <GeneralInput
          placeholder={"Password"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          value={password}
          onChangeValue={setPassword}
        />

        <GeneralButton
          backgroundColor={"#052941"}
          message="Continue"
          color={"#ffffff"}
          marginLeft={0}
          marginTop={110}
          marginHorizontal={30}
          onPress={() => submitForm(user)}
        />
        <Text style={styles.text2}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.text3}>signup here</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    // height: 84,
    // width: 318,
    // backgroundColor: "#FEEBCC",
    // marginLeft: 30,
    // borderRadius: 10,
    // marginBottom: 12,
    // marginTop: 60,
  },
  text: {
    fontWeight: "600",
    fontSize: 24,
    color: "#273B4A",
    paddingLeft: 25,
    marginTop: 10,
    //marginLeft: 40,
    marginHorizontal: 0,
  },
  text2: {
    fontWeight: "200",
    fontSize: 16,
    color: "#273B4A",
    paddingLeft: 30,
    marginTop: 10,
    //marginLeft: 40,
    marginHorizontal: 0,
  },

  text3: {
    fontWeight: "500",
    fontSize: 16,
    color: "#052941",
    paddingLeft: 200,
    //paddingTop: 10,
    marginTop: -20,
  },
  button: {
    height: 55,
    width: 330,
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: "#052941",
  },
});
export default Login;
