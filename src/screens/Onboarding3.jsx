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
import BackHeader from "../components/General/BackHeader";

const { width, height } = Dimensions.get("window");
const Onboarding3 = ({ navigation, onPress }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        flex: 1,
      }}
    >
      <BackHeader navigation={navigation} />
      <Text style={styles.text}>Enter your Name</Text>
      <Text style={styles.text2}>
        Driver will confirm picking up the right person {"\n"} by your name
      </Text>
      <GeneralInput placeholder={"First Name"} marginHorizontal={27} />
      <GeneralInput placeholder={"Last Name"} marginHorizontal={27} />
      <View style={styles.button}>
        <GeneralButton
          backgroundColor={"#a232a8"}
          message="Continue"
          color={"#ffffff"}
          marginLeft={0}
          marginTop={110}
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
    marginTop: 10,
    //marginLeft: 40,
    marginHorizontal: 0,
  },
  text2: {
    fontWeight: "200",
    fontSize: 16,
    color: "#273B4A",
    paddingLeft: 25,
    marginTop: 10,
    //marginLeft: 40,
    marginHorizontal: 0,
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
export default Onboarding3;