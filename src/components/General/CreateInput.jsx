import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CreateInput = ({ name, placeholder, value, onChangeValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeValue(text)}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
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
    // borderRadius: 0,
    width: 333,
    borderBottomWidth: 5,
    //borderColor: '#C4C4C4'
  },
  desc: {
    height: 135,
  },
});

export default CreateInput;
