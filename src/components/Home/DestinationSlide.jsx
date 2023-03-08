import React, { useRef, useState, useLayoutEffect } from "react";
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
} from "react-native";
import GenInput from "../General/GeneralInput";
import GeneralButton from "../General/GeneralButton";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// function ClickSearch({ value, setValue, name }) {
//   // const [checked, setChecked] = useState(false)

//   function onCheckmarkPress() {
//     setValue(name);
//   }

//   return (
//     <Pressable onPress={onCheckmarkPress}>
//       {value === name ? (

//       ) : (
//         <Ionicons name="radio-button-off" size={24} color="black" />
//       )}
//     </Pressable>
//   );
// }

function DestinationSlide() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [isChanged, setIsChanged] = useState("");
  const [isSearched, setIsSearched] = useState("");

  return (
    <View>
      {!isSearched ? (
        <View style={styles.Container}>
          <View style={{ marginBottom: 20 }}></View>
          {/* <TouchableOpacity onPress={() => setModalOpen(false)}> */}
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
          {/* </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => setIsSearched((isSearched) => !isSearched)}
          >
            <View style={styles.searchcard}>
              <Ionicons
                name="search-outline"
                size={30}
                color="black"
                style={styles.shift}
              />
              <Text style={styles.text1}>
                {isChanged ? "Where to?" : "go joor"}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }}></View>
          <Ionicons
            name="home-outline"
            size={24}
            color="black"
            style={styles.icons}
          />
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text2}>No. 2 Lawanson Road, Ikeja</Text>
          <View style={styles.line1} />
          <MaterialIcons
            name="work-outline"
            size={24}
            color="black"
            style={styles.icons}
          />
          <Text style={styles.text}>Work</Text>
          <Text style={styles.text2}>No. 2 Lawanson Road, Ikeja</Text>
          <View style={styles.line1} />
          <EvilIcons
            name="location"
            size={30}
            color="black"
            style={styles.icons}
          />
          <Text style={styles.text}>Eko Hotel Suites</Text>
          <Text style={styles.text2}>No. 2 Lawanson Road, Ikeja</Text>
        </View>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.Container2}>
            <TouchableOpacity
              onPress={() => setIsSearched((isSearched) => !isSearched)}
            >
              <AntDesign
                name="close"
                size={33}
                color="black"
                style={{ marginLeft: 20, marginTop: 70 }}
              />
            </TouchableOpacity>
            <Text style={styles.topic}>Select Destination</Text>
            <View style={styles.center}>
              <GenInput
                style={styles.center}
                placeholder={"Your location"}
                value={currentLocation}
                onChangeValue={setCurrentLocation}
                keyboardType={"default"}
                marginTop={30}
                backgroundColor={"#EEEEEE"}
                height={55}
              />
              <GenInput
                placeholder={"Destination"}
                value={destination}
                onChangeValue={setDestination}
                keyboardType={"default"}
                backgroundColor={"#EEEEEE"}
                height={55}
              />
            </View>
            <Text style={styles.topic2}>
              Please keep stop times {"\n"}
              short
            </Text>
            <Text style={styles.faint}>
              Be considerate of your driver; when{"\n"}you stop, don't keep them
              waiting{"\n"} for too long
            </Text>

            <GeneralButton
              marginHorizontal={30}
              marginTop={30}
              message={"Done"}
              marginLeft={-25}
              backgroundColor={"#052941"}
              color={"#ffffff"}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#000000",

    marginTop: 350,
    height: 470,

    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  line1: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 300,
    marginTop: 10,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: 45,
  },
  searchcard: {
    height: 55,
    width: 330,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginHorizontal: 30,
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    marginHorizontal: 85,
    marginTop: -30,
  },
  center: {
    marginHorizontal: 30,
  },
  text1: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 24,
    paddingLeft: 60,

    marginTop: -30,
  },
  text: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 18,
    paddingLeft: 80,
    paddingVertical: 0,
    marginTop: -22,
  },
  text2: {
    color: "#8F8F8F",
    fontWeight: "300",
    fontSize: 18,
    paddingLeft: 80,

    marginTop: 0,
  },
  shift: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  icons: {
    marginLeft: 20,
    // marginTop: 10,
  },

  Container2: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "black",

    marginTop: 0,
    height: 850,
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    marginHorizontal: 85,
    marginTop: -30,
  },
  topic2: {
    fontSize: 25,
    fontWeight: "700",
    marginHorizontal: 30,
    marginTop: 220,
    color: "#2F2F2F",
  },
  faint: {
    fontSize: 15.5,
    fontWeight: "450",
    marginHorizontal: 30,
    marginTop: 0,
    color: "#2F2F2F",
  },
});

export default DestinationSlide;
