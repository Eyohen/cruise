import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import GeneralButton from "../components/General/GeneralButton";
import GeneralInput from "../components/General/GeneralInput";
import CreateInput from "../components/General/CreateInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BackHeader from "../components/General/BackHeader";
import client from "../api/client";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 4500);
};

const isValidEmail = (value) => {
  //const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]+\.([A-Za-z]{2,4})$/;
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regx.test(value);
};

const Register = ({ navigation, onPress }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const user = { name, email, password };

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value });
  // };

  const isValidForm = () => {
    //if all the fields have values in them
    if (!isValidObjField(user))
      return updateError("All fields Required!!", setError);
    //if valid name with more than 2 characters
    //only valid email id is allowed
    if (!isValidEmail(email)) return updateError("Invalid Email!", setError);
    //password must have 8 or more characters
    if (!password.trim() || password.length < 4)
      return updateError("Password less than 4 characters!", setError);
    //password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError("Password does not match!", setError);

    return true;
  };

  // const submitForm = () => {
  //   if (isValidForm()) {
  //     console.log(user);
  //   }
  // };

  const submitForm = async (user) => {
    const res = await client.post("/signup", { ...user });
    console.log(user);
    console.log(res.data);
  };

  // axios
  //   .post(client, user)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

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
        <BackHeader navigation={navigation} paddingLeft={30} />
        <Text style={styles.text}>Register Your Account</Text>
        <Text style={styles.text2}>
          Driver will confirm picking up the right person {"\n"} by your name
        </Text>
        {/* <GeneralInput
        placeholder={"First Name"}
        marginHorizontal={27}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
      />
      <GeneralInput
        placeholder={"Last Name"}
        marginHorizontal={27}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
      />
      <GeneralInput
        placeholder={"Email"}
        marginHorizontal={27}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
      />
      <GeneralInput
        placeholder={"Phone"}
        marginHorizontal={27}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
      />
      <GeneralInput
        placeholder={"Password"}
        marginHorizontal={27}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
      /> */}

        <GeneralInput
          placeholder={"Name"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          value={name}
          onChangeValue={setName}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <GeneralInput
          placeholder={"Email"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          value={email}
          onChangeValue={setEmail}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <GeneralInput
          placeholder={"Password"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          password
          value={password}
          onChangeValue={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {/* <GeneralInput
          placeholder={"Confirm Password"}
          marginHorizontal={27}
          backgroundColor={"#EEEEEE"}
          height={55}
          width={330}
          password
          value={confirmPassword}
          onChangeValue={setConfirmPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null} */}

        <GeneralButton
          backgroundColor={"#052941"}
          message="Continue"
          color={"#ffffff"}
          marginLeft={0}
          marginTop={30}
          marginHorizontal={30}
          onPress={() => submitForm(user)}
        />

        <Text style={styles.text2}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.text3}>signin here</Text>
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
    marginTop: -15,
    //marginLeft: 40,
    marginHorizontal: 0,
  },
  text2: {
    fontWeight: "200",
    fontSize: 16,
    color: "#273B4A",
    paddingLeft: 30,
    marginTop: 10,
    marginHorizontal: 0,
  },
  text3: {
    fontWeight: "500",
    fontSize: 16,
    color: "#052941",
    paddingLeft: 214,
    //paddingTop: 10,
    marginTop: -20,
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "300",
    marginHorizontal: 30,
  },
});
export default Register;
