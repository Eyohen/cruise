import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LocationScroll from "../components/Home/LocationScroll";
import BackHeader from "../components/General/BackHeader";

function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.Space}>
      <BackHeader navigation={navigation} message={"Electricity"} />
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Space: {
    paddingLeft: 20,
    paddingVertical: 24,

    backgroundColor: "#FFFFFF",
    position: "relative",

    //marginTop: -15,
    height: 1500,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 30,
  },
  text: {
    fontWeight: "700",
    fontSize: 22,
    color: "#444444",
    marginTop: 0,
    paddingLeft: 110,
    paddingVertical: -30,
  },
  arrange: {
    marginTop: 30,
    marginLeft: 4,
  },
});

export default Home;
