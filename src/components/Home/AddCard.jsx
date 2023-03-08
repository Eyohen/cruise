import React from "react";
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
import GenInput from "../General/GeneralInput";
import GeneralButton from "../General/GeneralButton";
import { AntDesign } from "@expo/vector-icons";

function AddCard({ navigation }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign
          name="close"
          size={33}
          color="black"
          style={{ marginLeft: 30, marginTop: 70 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Add a Card</Text>
      <GenInput
        placeholder={"Card Number"}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={330}
        marginHorizontal={30}
      />
      <GenInput
        placeholder={"Expiry Date"}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={160}
        marginHorizontal={30}
        marginTop={-10}
      />
      <GenInput
        placeholder={"CVV"}
        backgroundColor={"#EEEEEE"}
        height={55}
        width={160}
        marginHorizontal={200}
        marginTop={-80}
      />

      <GeneralButton
        message={"Add Card"}
        backgroundColor={"#052941"}
        color={"#FFFFFF"}
        marginTop={230}
        marginHorizontal={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    //backgroundColor: "#000000",

    marginTop: 0,
    height: 850,
  },
  title: {
    marginHorizontal: 30,
    fontSize: 25,
    fontWeight: "600",
    marginTop: 20,
  },
});

export default AddCard;
