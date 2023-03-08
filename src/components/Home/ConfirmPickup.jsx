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
} from "react-native";
import GeneralButton from "../General/GeneralButton";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function CheckBoxCustom({ value, setValue, name }) {
  // const [checked, setChecked] = useState(false)

  function onCheckmarkPress() {
    setValue(name);
  }

  return (
    <Pressable onPress={onCheckmarkPress}>
      {value === name ? (
        <FontAwesome
          name="dot-circle-o"
          size={20}
          color="#a232a8"
          style={styles.outtercheck}
        />
      ) : (
        <FontAwesome
          name="dot-circle-o"
          size={20}
          color="#8F8F8F"
          style={styles.outtercheck}
        />
      )}
    </Pressable>
  );
}

function ConfirmPickup({ navigation }) {
  //   const [urban, setUrban] = useState(false);
  //   const [standard, setStandard] = useState(false);
  const [open, setOpen] = useState("");
  const [value, setValue] = useState("");

  return (
    <View>
      {!open ? (
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

          <Text style={styles.title}>Confirm pick-up</Text>
          <Text style={styles.pickup}>Pickup in 7 min</Text>
          <Text style={styles.price}>₦1,500</Text>
          <View style={{ marginBottom: 40 }}></View>
          <View style={styles.line1} />

          <Text style={styles.text}>Ikorodu Street, Ikeja</Text>
          <AntDesign name="edit" size={24} color="black" style={styles.edit} />

          <View style={styles.line2} />

          <TouchableOpacity onPress={() => setOpen((open) => !open)}>
            <View style={styles.outercard}>
              <View style={styles.innercard}>
                <Text style={styles.text2}>CARD</Text>
              </View>
              <Text style={styles.text3}>Add Payment Method</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("connecttodriver")}
          >
            <GeneralButton
              message={"Confirm Order"}
              marginHorizontal={30}
              marginTop={18}
              marginLeft={-25}
              // backgroundColor={"#a232a8"}
              backgroundColor={"#052941"}
              color={"#ffffff"}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.Container2}>
          <TouchableOpacity onPress={() => setOpen((open) => !open)}>
            <SimpleLineIcons
              name="arrow-left"
              size={24}
              color="black"
              style={styles.leftarrow}
            />
          </TouchableOpacity>
          <Text style={styles.payment}>Payment</Text>
          <View style={styles.bigcard}>
            <Text style={styles.cruisebalance}>Cruise Balance</Text>
            <Text style={styles.cruiseprice}>0.00</Text>
            <View style={styles.smallcard}>
              <Text style={styles.addfunds}>Add Funds</Text>
            </View>
          </View>

          <SimpleLineIcons
            name="question"
            size={24}
            color="#8F8F8F"
            style={styles.icon}
          />
          <Text style={styles.text4}>What is Cruise Balance ?</Text>
          <View style={styles.line2} />
          <SimpleLineIcons
            name="question"
            size={24}
            color="#8F8F8F"
            style={styles.icon}
          />
          <Text style={styles.text4}>See Transactions</Text>
          <View style={styles.line2} />

          <Text style={styles.paymentmethod}>Payment Methods</Text>

          <MaterialIcons
            name="payment"
            size={24}
            color="#8F8F8F"
            style={styles.icon}
          />
          <Text style={styles.text4}>****1284</Text>
          {/* <Octicons
              name="circle"
              size={15}
              color="#a232a8"
              style={styles.outtercheck}
            /> */}
          {/* <Octicons
              name="dot-fill"
              size={22}
              color="#a232a8"
              style={styles.outtercheck}
            /> */}
          <CheckBoxCustom
            value={value}
            setValue={setValue}
            name={"1"}
            style={styles.outtercheck}
          />
          <View style={styles.line2} />
          <MaterialIcons
            name="payment"
            size={24}
            color="#8F8F8F"
            style={styles.icon}
          />
          <Text style={styles.text4}>Cruise Wallet</Text>
          {/* <Octicons
              name="circle"
              size={15}
              color="#a232a8"
              style={styles.outtercheck}
            /> */}
          {/* <Octicons
              name="dot-fill"
              size={22}
              color="#a232a8"
              style={styles.outtercheck}
            /> */}
          <CheckBoxCustom
            value={value}
            setValue={setValue}
            name={"2"}
            style={styles.outtercheck}
          />
          <View style={styles.line2} />
          <TouchableOpacity onPress={() => navigation.navigate("addcard")}>
            <MaterialIcons
              name="payment"
              size={24}
              color="#8F8F8F"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text4}>Add debit/credit card</Text>

          <View style={styles.line2} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#000000",

    marginTop: 410,
    height: 380,

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
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginHorizontal: 30,
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
  Container2: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#000000",

    marginTop: 0,
    height: 850,
  },
  leftarrow: {
    marginTop: 60,
    marginHorizontal: 30,
  },
  payment: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 22,
    marginHorizontal: 30,

    marginTop: 15,
  },
  bigcard: {
    width: 330,
    height: 93,
    backgroundColor: "#B0C4DE",
    //backgroundColor={"#052941"}
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 20,
  },
  smallcard: {
    width: 90,
    height: 30,
    // backgroundColor: "#a232a8",
    backgroundColor: "#052941",
    borderRadius: 5,
    marginHorizontal: 225,
    marginTop: -27,
  },
  addfunds: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
    marginHorizontal: 8,

    marginTop: 7,
  },
  icon: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  outtercheck: {
    //marginHorizontal: 30,
    marginTop: -20,
    paddingLeft: 320,
  },
  text4: {
    color: "#2F2F2F",
    fontWeight: "400",
    fontSize: 16,
    marginHorizontal: 70,

    marginTop: -24,
  },
  line3: {
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
  line4: {
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
  cruisebalance: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 18,
    marginHorizontal: 20,

    marginTop: 15,
  },
  cruiseprice: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 26,
    marginHorizontal: 20,

    marginTop: 5,
  },
  paymentmethod: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 21,
    marginHorizontal: 30,

    marginTop: 20,
  },
});

export default ConfirmPickup;
