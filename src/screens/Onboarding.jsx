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
          backgroundColor={"#a232a8"}
          message="Continue with Email"
          color={"#ffffff"}
          marginLeft={0}
          route="onboarding2"
          navigation={navigation}
        />

        <Text style={styles.text2}> OR </Text>
        <GeneralButton
          backgroundColor={"#ffffff"}
          message="Continue with Google"
          color={"#a232a8"}
          marginLeft={0}
          marginTop={60}
          imageUri={require("../../assets/googleicon.png")}
        />
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
    fontSize: 20,
    color: "#273B4A",
    paddingLeft: 25,
    marginTop: 70,
    marginLeft: 110,
  },
  button: {
    marginHorizontal: 30,
    marginTop: 30,
  },

  slide: {
    borderBottomColor: "#273B4A",
    borderBottomWidth: 5,
    width: 34,
    //marginTop: -10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    //borderRadius: 4,
  },
  slide1: {
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 5,
    width: 34,
    //marginTop: -10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    //borderRadius: 4,
  },
  grid3: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: 'space-between',
    //width: 310
    marginTop: 17,
    marginLeft: 90,
  },
  grid4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //justifyContent: 'center',
    width: 370,
    paddingLeft: 20,
  },
});
export default Onboarding;
