import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

function GeneralButton({
  navigation,
  onPress,
  message,
  backgroundColor,
  color,
  marginLeft,
  marginTop,
  imageUri,
  route,
  marginHorizontal,
}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={{
          ...styles.button,
          backgroundColor: backgroundColor,
          marginTop: marginTop,
          marginHorizontal: marginHorizontal,
          imageUri: imageUri,
        }}
      >
        <Image
          style={styles.stretch}
          // source={require("../../../assets/googleicon.png")}
          source={imageUri}
        />

        <Text
          style={{ ...styles.buttontext, color: color, marginLeft: marginLeft }}
        >
          {message}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: 330,
    // backgroundColor: "#273B4A",
    backgroundColor: "#a232a8",
    borderRadius: 10,
    marginTop: 25,
    borderColor: "#808080",
    borderWidth: 1,
  },
  buttontext: {
    fontWeight: "400",
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: -35,
    marginLeft: 130,
    textAlign: "center",
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});

export default GeneralButton;
