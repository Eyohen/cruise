import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import GeneralButton from "../components/General/GeneralButton";
import GeneralInput from "../components/General/GeneralInput";
import CreateInput from "../components/General/CreateInput";
//import BottomText from './BottomText'
//import OnbaordingSwiper from './OnbaordingSwiper'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Onboarding = ({ navigation, onPress }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
      }}
    >
      <Text style={styles.text}>Set up your Profile</Text>
      <View style={styles.button}>
        <GeneralButton
          backgroundColor={"#052941"}
          message="Continue with Email"
          color={"#ffffff"}
          marginLeft={0}
          route="onboarding2"
          navigation={navigation}
        />

        <Text style={styles.text2}>already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("example")}>
          <Text style={styles.text3}>signin here</Text>
        </TouchableOpacity>

        {/* <Text style={styles.text2}> OR </Text>
        <GeneralButton
          backgroundColor={"#ffffff"}
          message="Continue with Google"
          color={"#a232a8"}
          marginLeft={0}
          marginTop={60}
          imageUri={require("../../assets/googleicon.png")}
        /> */}
      </View>
    </SafeAreaView>
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
    marginTop: 120,
    marginLeft: 70,
  },
  text2: {
    fontWeight: "400",
    fontSize: 16,
    color: "#273B4A",
    paddingLeft: 25,
    marginTop: 10,
    //marginLeft: 110,
  },
  text3: {
    fontWeight: "500",
    fontSize: 16,
    color: "#BEE106",
    paddingLeft: 213,
    //paddingTop: 10,
    marginTop: -20,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 30,
  },
});
export default Onboarding;
