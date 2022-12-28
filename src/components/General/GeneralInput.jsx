import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const GenInput = ({
  name,
  placeholder,
  value,
  onChangeValue,
  requestAmount,
  password,
  marginHorizontal,
  marginTop,
}) => {
  // console.log(requestAmount)
  return (
    <View
      style={{
        ...styles.container,
        marginHorizontal: marginHorizontal,
        marginTop: marginTop,
      }}
    >
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeValue(text)}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 13,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 16,
  },
  input: {
    height: 62,
    padding: 10,
    backgroundColor: "#F8F8F8",
    //borderColor: '#BABABA',
    borderRadius: 10,
    width: 333,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },
  desc: {
    height: 135,
  },
});

export default GenInput;
