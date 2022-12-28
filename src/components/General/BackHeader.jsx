import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

const BackHeader = ({
  navigation,
  message,
  submessage,
  color,
  marginLeft,
  paddingLeft,
}) => {
  return (
    <View>
      <View style={styles.flex_container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          {/* <Image
            style={{ ...styles.image, paddingLeft: paddingLeft }}
            source={require("../../../assets/leftarrow.png")}
            onPress={() => {
              //encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcaUY4BnStRd5mvk1HyZjAUQjj9rXMAyVy87sKq6iXAzUYxGnBdkkswGnCw8oqZs7PPU&usqp=CAU
              // console.lod()
              navigation.goBack();
            }}
          ></Image> */}
        </TouchableOpacity>
        {/* <AntDesign name="left" size={24} color="black" /> */}
        {/* <FontAwesome color={color} size={18} name="chevron-left" onPress={() => { */}
        {/* // console.lod() */}
        {/* navigation.goBack() */}
        {/* }}>  */}
        {/* </FontAwesome> */}
        <Text style={{ ...styles.text, color: color, marginLeft: marginLeft }}>
          {message}
        </Text>
      </View>
      <Text style={styles.submessage}>{submessage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flex_container: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    // marginLeft:10,
    fontSize: 24,
    //color: '#4FBCA9',
  },
  submessage: {
    marginTop: 20,
    fontSize: 16,
  },
  image: {
    // marginLeft:20
    width: 55,
    height: 30,
    resizeMode: "stretch",
  },
});

export default BackHeader;
