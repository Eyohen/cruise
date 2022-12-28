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
} from "react-native";
//import { useLayoutEffect } from 'react/cjs/react.production.min';
import Feather from "@expo/vector-icons/Feather";
//import BottomSheet from 'reanimated-bottom-sheet'

import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const LocationScroll = ({ navigation, onPress, setModalOpen, modalOpen }) => {
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalContent}>
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
          <View style={{ marginBottom: 5 }}></View>
          <Text style={styles.text1}>Choose a Provider </Text>
          <View style={{ marginBottom: 20 }}></View>

          {/* <TouchableOpacity>
                    <View style={styles.inner}><Text style={styles.text}>Daily </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.inner}><Text style={styles.text}>Weekly</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.inner}><Text style={styles.text}>Monthly</Text>
                    </View>
                </TouchableOpacity>  */}

          <Text style={styles.text}>
            Benin Electricity Distribution{"\n"}Company
          </Text>
          <View style={styles.line1} />
          <Text style={styles.text}>
            Eko Electricity Distribution{"\n"}Company
          </Text>
          <View style={styles.line1} />
          <Text style={styles.text}>
            Enugu Electricity Distribution{"\n"}Company
          </Text>
          <View style={styles.line1} />
          <Text style={styles.text}>
            Ibadan Electricity Distribution{"\n"}Company
          </Text>
          <View style={styles.line1} />
          <Text style={styles.text}>
            Ikeja Electricity Distribution{"\n"}Company
          </Text>
          <View style={styles.line1} />
          <Text style={styles.text}>
            Jos Electricity Distribution{"\n"}Company
          </Text>
        </View>
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
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 30,
  },

  marginContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  line1: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    width: 420,
    marginTop: 10,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginLeft: -30,
  },

  white: {
    marginTop: 20,
    marginLeft: 20,
  },

  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    //elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  first: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    position: "absolute",

    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    bottom: -590,
    elevation: 24,
  },
  modalContent: {
    //flex: 4,
    //maxHeight: 300,
    height: 600,

    //backgroundColor: "#F8F8F8",
    backgroundColor: "#D8D8D8",

    //height: Dimensions.get('window').height * 0.5,
    bottom: -250,
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    //position: "absolute",
    // paddingLeft: 10
  },
  inner: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 335,
    marginLeft: 20,
    marginBottom: 10,
  },
  text1: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 18,
    paddingLeft: 120,
    //paddingVertical: -50,
    marginBottom: 30,
  },
  text: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 18,
    paddingLeft: 80,
    paddingVertical: 0,
    marginTop: -22,
  },
  modalToggle: {},
});

export default LocationScroll;
