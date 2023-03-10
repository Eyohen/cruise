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

import Feather from "@expo/vector-icons/Feather";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LocationScroll = ({ navigation, onPress, setModalOpen, modalOpen }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <View>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.modalContent2}>
            <View style={{ marginBottom: 20 }}></View>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
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
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => setModalOpen(false)}>
            <View style={styles.searchcard}>
              <Ionicons
                name="search-outline"
                size={30}
                color="black"
                style={styles.shift}
              />
              <Text style={styles.text1}>Where to?</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginBottom: 60 }}></View>

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
            <Text style={styles.text2}>No. 2 Lawanson Road, Ikeja</Text> */}

            <AntDesign
              name="close"
              size={33}
              color="black"
              style={{ marginLeft: 20, marginTop: 20 }}
            />
            <Text style={styles.topic}>Select Destination</Text>
            <View style={styles.center}>
              <GenInput
                style={styles.center}
                placeholder={"Your location"}
                value={currentLocation}
                onChangeValue={setCurrentLocation}
                keyboardType={"default"}
              />
              <GenInput
                placeholder={"Destination"}
                value={destination}
                onChangeValue={setDestination}
                keyboardType={"default"}
              />
            </View>

            <GeneralButton
              message={"Choose on map"}
              marginTop={410}
              marginHorizontal={30}
              navigation={navigation}
              route={"onboarding3"}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Space: {
    paddingLeft: 20,
    paddingVertical: 24,
    //height: '100%',
    backgroundColor: "#FFFFFF",
    position: "relative",
    top: -30,
    marginBottom: 40,
    marginTop: -15,
    height: 1500,
    marginHorizontal: 50,
  },

  marginContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  line1: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 420,
    marginTop: 10,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: -30,
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
  // white: {
  //   marginTop: 20,
  //   marginLeft: 20,
  // },

  // header: {
  //   backgroundColor: "#FFFFFF",
  //   shadowColor: "#333333",
  //   shadowOffset: { width: -1, height: -3 },
  //   shadowRadius: 2,
  //   shadowOpacity: 0.4,
  //   //elevation: 5,
  //   paddingTop: 20,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },

  // first: {
  //   width: "100%",
  //   backgroundColor: "#F8F8F8",
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   padding: 20,
  //   position: "absolute",

  //   zIndex: 100,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   maxHeight: 300,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 12,
  //   },
  //   shadowOpacity: 0.58,
  //   shadowRadius: 16.0,
  //   bottom: -590,
  //   elevation: 24,
  // },
  modalContent: {
    //maxHeight: 300,
    height: 600,

    backgroundColor: "#FFFFFF",

    bottom: -370,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
  },
  modalContent2: {
    //maxHeight: 300,
    height: 850,

    backgroundColor: "#FFFFFF",

    // bottom: 0,
    //borderTopLeftRadius: 27,
    //borderTopRightRadius: 27,
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
    fontWeight: "400",
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
  modalToggle: {},
});

export default LocationScroll;
