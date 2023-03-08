import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Animated,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import GeneralButton from "../General/GeneralButton";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ConfirmPickup from "./ConfirmPickup";

function ColorChanger({ value, setValue, name }) {
  // const [checked, setChecked] = useState(false)

  function onCheckmarkPress() {
    setValue(name);
  }

  return (
    <Pressable onPress={onCheckmarkPress}>
      {value === name ? (
        <Ionicons name="style={styles.colorback}" size={24} color="#0ECB21" />
      ) : (
        <Ionicons name="style={styles.colorback}" size={24} color="black" />
      )}
    </Pressable>
  );
}

function AvailableRides({ backgroundColor }) {
  const [urban, setUrban] = useState(true);
  const [standard, setStandard] = useState(true);
  const [elite, setElite] = useState(true);
  const [confirm, setConfirm] = useState("");

  const handleUrban = () => {
    setUrban(false);
    setStandard(true);
    setElite(true);
  };

  const handleStandard = () => {
    setUrban(true);
    setStandard(false);
    setElite(true);
  };

  const handleElite = () => {
    setUrban(true);
    setStandard(true);
    setElite(false);
  };

  return (
    <View style={styles.Container}>
      <View style={{ marginBottom: 20 }}></View>
      <View
        style={{
          borderBottomColor: "#D6D6D6",
          borderBottomWidth: 5,
          width: 44,
          marginTop: -10,
          marginVertical: 30,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 160,
          borderRadius: 4,

          //fontSize: 50,
        }}
      ></View>
      <Text style={styles.title}>Available Rides</Text>
      <View style={{ marginBottom: 30 }}></View>
      <TouchableOpacity onPress={handleUrban}>
        {!urban ? (
          <View style={styles.colorback}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-2.png")}
            />
            <Text style={styles.text}>Urban</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>

            <View style={styles.line1} />
          </View>
        ) : (
          <View style={styles.noncolorback}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-2.png")}
            />
            <Text style={styles.text}>Urban</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>

            <View style={styles.line1} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStandard}>
        {!standard ? (
          <View style={styles.colorback2}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-3.png")}
            />
            <Text style={styles.text}>Standard</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>
            <View style={styles.line1} />
          </View>
        ) : (
          <View style={styles.noncolorback2}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-3.png")}
            />
            <Text style={styles.text}>Standard</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>
            <View style={styles.line1} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleElite}>
        {!elite ? (
          <View style={styles.colorback3}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-4.png")}
            />
            <Text style={styles.text}>Elite</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>
          </View>
        ) : (
          <View style={styles.noncolorback3}>
            <Image
              style={styles.icons}
              source={require("../../../assets/Rectangle-4.png")}
            />
            <Text style={styles.text}>Elite</Text>
            <Text style={styles.text2}>7 mins</Text>
            <Text style={styles.text3}>N1500</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity>
        <GeneralButton
          message={"Select Standard"}
          marginHorizontal={30}
          marginTop={18}
          marginLeft={-25}
          //backgroundColor={"#a232a8"}
          backgroundColor={"#052941"}
          color={"#ffffff"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",

    marginTop: 330,
    height: 470,

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  line1: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 420,
    marginTop: 15,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: -30,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginHorizontal: 30,
  },
  icons: {
    marginHorizontal: 30,
    marginTop: -15,
  },
  text: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 80,
    paddingVertical: 0,
    marginTop: -35,
    marginHorizontal: 30,
  },
  text2: {
    color: "#8F8F8F",
    fontWeight: "400",
    fontSize: 18,
    paddingLeft: 80,

    //marginTop: 0,
    marginHorizontal: 30,
  },
  text3: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 18,
    paddingLeft: 270,
    paddingVertical: 0,
    marginTop: -35,
    marginHorizontal: 30,
  },
  colorback: {
    //  backgroundColor: "#FF69B4",
    backgroundColor: "#B0C4DE",
    height: 80,
    paddingTop: 35,
    marginTop: -30,
  },
  noncolorback: {
    backgroundColor: "#FFFFFF",
    height: 80,
    paddingTop: 35,
    marginTop: -30,
  },
  colorback2: {
    // backgroundColor: "#FF69B4",
    backgroundColor: "#B0C4DE",
    height: 80,
    paddingTop: 35,
    marginTop: 0,
  },
  noncolorback2: {
    backgroundColor: "#FFFFFF",
    height: 80,
    paddingTop: 35,
    marginTop: 0,
  },
  colorback3: {
    //backgroundColor: "#FF69B4",
    backgroundColor: "#B0C4DE",
    height: 80,
    paddingTop: 35,
    marginTop: 0,
  },
  noncolorback3: {
    backgroundColor: "#FFFFFF",
    height: 80,
    paddingTop: 35,
    marginTop: 0,
  },
  pink: {
    backgroundColor: "#FF69B4",
  },
});

const style = StyleSheet.create({
  pink: {
    backgroundColor: "#FF69B4",
  },
});

export default AvailableRides;
