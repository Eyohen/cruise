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
  Pressable,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import GeneralButton from "../General/GeneralButton";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function ConnectToDriver({ navigation, onPress }) {
  const [change, setChange] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.Container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Cancel Ride</Text>
            <Text style={styles.modalText2}>
              If you cancel you might have to wait longer.
            </Text>
            <Pressable
              style={[styles.button2, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle2}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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

      <Text style={styles.title}>connecting to your driver</Text>
      <Text style={styles.pickup}>
        A few cars are available. Searching for the best match
      </Text>

      <>
        {!change ? (
          <View>
            <TouchableOpacity onPress={() => setChange((change) => !change)}>
              <Image
                style={styles.image}
                source={require("../../../assets/female.jpg")}

                // source={imageUri}
              />
              <Text style={styles.name}>James Nelson</Text>
            </TouchableOpacity>
            <View style={styles.cancelBox}>
              <Text style={styles.cancelText}>Cancel Ride</Text>
            </View>
            <View style={{ marginBottom: 50 }}></View>
            <View style={styles.line1} />
            <Text style={styles.text}>Ikorodu Street, Ikeja</Text>
            <AntDesign
              name="edit"
              size={24}
              color="black"
              style={styles.edit}
            />
            <View style={styles.line2} />
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={() => setChange((change) => !change)}>
              <Image
                style={styles.image}
                source={require("../../../assets/female.jpg")}
              />
              <Text style={styles.name}>James Nelson</Text>
            </TouchableOpacity>
            <Text style={styles.cartype}>Red Toyota Corolla</Text>
            <Text style={styles.carnumber}>BUU-189-WE</Text>
            <View style={styles.call}>
              <Ionicons
                name="call"
                size={24}
                color="black"
                style={styles.icon}
              />
            </View>
            <View style={styles.chat}>
              <TouchableOpacity onPress={() => navigation.navigate("chat")}>
                <Ionicons
                  name="md-chatbox-ellipses"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.safety}>
              <TouchableOpacity onPress={() => navigation.navigate("chat")}>
                <Ionicons
                  name="md-chatbox-ellipses"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </>

      {/* <Image
        style={styles.image}
        source={require("../../../assets/female.jpg")}
      />
      <Text style={styles.name}>James Nelson</Text>
      <Text style={styles.cartype}>Red Toyota Corolla</Text>
      <Text style={styles.carnumber}>BUU-189-WE</Text>
      <View style={styles.call}>
        <Ionicons name="call" size={24} color="black" />
      </View>
      <View style={styles.chat}>
        <Ionicons name="md-chatbox-ellipses" size={24} color="black" />
      </View>
      <View style={styles.safety}>
        <Ionicons name="md-chatbox-ellipses" size={24} color="black" />
      </View> */}

      <TouchableOpacity onPress={() => setChange((change) => !change)}>
        <View style={styles.outercard}>
          <View style={styles.innercard}>
            <Text style={styles.text2}>CARD</Text>
          </View>
          <Text style={styles.text3}>****1234</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.cancelRide}>
          <Text style={styles.cancelRideText}>Cancel Ride</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#000000",

    marginTop: 350,
    height: 410,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line1: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 320,
    marginTop: -40,
    // marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: 30,
  },
  progress: {
    width: 200,
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
    marginHorizontal: 30,
  },
  image: {
    height: 50,
    width: 50,
    marginHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  name: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    marginTop: -50,
    marginHorizontal: 90,
  },
  cancelBox: {
    height: 50,
    width: 130,
    //backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: -22,
    marginHorizontal: 220,
    borderWidth: 1,
  },
  cancelRide: {
    height: 50,
    width: 330,
    //backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: 12,
    marginHorizontal: 30,
    borderWidth: 0.4,
  },
  cancelText: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 17,

    marginTop: 10,
    //marginHorizontal: 30,
    paddingLeft: 18,
  },
  cancelRideText: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 17,

    marginTop: 10,
    //marginHorizontal: 30,
    paddingLeft: 118,
  },
  cartype: {
    color: "#8F8F8F",
    fontWeight: "400",
    fontSize: 15,

    marginTop: -20,
    //marginHorizontal: 30,
    paddingLeft: 225,
  },
  carnumber: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 15,

    marginTop: 0,
    //marginHorizontal: 30,
    paddingLeft: 225,
  },
  call: {
    height: 55,
    width: 60,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: 22,
    marginHorizontal: 30,
  },
  chat: {
    height: 55,
    width: 60,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: -52,
    marginHorizontal: 160,
  },
  safety: {
    height: 55,
    width: 60,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: -52,
    marginHorizontal: 300,
  },
  pickup: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 17,

    marginTop: 5,
    marginHorizontal: 30,
  },
  price: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    marginTop: -20,
    marginHorizontal: 150,
  },
  text: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 17,
    //paddingLeft: 270,
    // paddingVertical: 0,
    marginTop: 10,
    marginHorizontal: 30,
  },
  edit: {
    marginTop: -20,
    paddingLeft: 320,
  },
  line2: {
    borderBottomColor: "#8F8F8F",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: 320,
    marginTop: 5,
    // marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: 30,
  },
  outercard: {
    height: 55,
    width: 330,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 30,
  },
  innercard: {
    height: 30,
    width: 50,
    backgroundColor: "#000000",
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 20,
  },
  text2: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  text3: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 16,
    marginHorizontal: 80,

    marginTop: -25,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 300,
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    //elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 260,
    borderWidth: 0.4,
    marginTop: 20,
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 260,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    //backgroundColor: "#2196F3",
  },
  buttonClose2: {
    backgroundColor: "#052941",
  },
  textStyle: {
    color: "#000000",
    // color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 26,
    marginBottom: 15,
    textAlign: "center",
  },
  modalText2: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  icon: {
    paddingHorizontal: 17,
    paddingTop: 14,
  },
});

export default ConnectToDriver;
