import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <TouchableOpacity onPress={() => setCount(count + 1)}>
      <View style={styles.button}>
        <Text>count {count}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
  text: {
    marginTop: 200,
    marginHorizontal: 120,
  },
  button: {
    height: 55,
    width: 330,
    // backgroundColor: "#273B4A",
    backgroundColor: "#a232a8",
    borderRadius: 10,
    marginTop: 250,
    borderColor: "#808080",
    borderWidth: 1,
  },
});

export default Example;
