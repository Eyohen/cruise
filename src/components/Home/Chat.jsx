// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Dimensions,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   Pressable,
//   Button,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import socketServices from "../../utils/socketService";
// import BackHeader from "../General/BackHeader";
// import { Ionicons } from "@expo/vector-icons";
// import io from "socket.io-client";
// //192.168.136.50

// function Chat({ navigation }) {
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     socketServices.initializeSocket();
//   }, []);

//   useEffect(() => {
//     socketServices.on("received_message", (msg) => {
//       console.log("message received in react native app", msg);
//       let cloneArry = [...data];
//       setData(cloneArry.concat(msg));
//     });
//   }, [data]);

//   const sendMessage = () => {
//     if (!!message) {
//       socketServices.emit("send_message", message);
//       setMessage("");
//       return;
//     }
//     alert("Please enter your message");
//   };

//   return (
//     <View style={styles.container}>
//       <BackHeader navigation={navigation} message={"Chat"} marginLeft={130} />
//       <Image
//         style={styles.image}
//         source={require("../../../assets/female.jpg")}

//         // source={imageUri}
//       />

//       <Text style={styles.name}>James Nelson</Text>
//       <Text style={styles.cartype}>Red Toyota Corolla</Text>
//       <Text style={styles.carnumber}>BUU-189-WE</Text>
//       <Ionicons name="call" size={24} color="black" style={styles.icon} />

//       <View style={styles.chatContainer}>
//         {/* <View style={{ flexDirection: "row", marginTop: 50 }}>
//           <TextInput
//             placeholder="Enter your message..."
//             value={message}
//             onChangeText={(text) => setMessage(text)}
//             style={styles.inputStyle}
//           ></TextInput>
//           <Button onPress={sendMessage} title="send" style={styles.button} />
//         </View>
//         {data.map((val, i) => {
//           return <Text style={{ Top: 80, fontWeight: "bold" }}>{val}</Text>;
//         })} */}
//       </View>
//     </View>
//   );
// }

import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ScrollView,
} from "react-native";
import io from "socket.io-client";
import BackHeader from "../General/BackHeader";
import { Ionicons } from "@expo/vector-icons";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatMessage: "",
      chatMessages: [],
    };
  }
  componentDidMount() {
    this.socket = io("http://localhost:9000");
    this.socket.on("chat message", (msg) => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));
    return (
      <View style={styles.container}>
        {/* <BackHeader navigation={navigation} message={"Chat"} marginLeft={130} /> */}
        <Image
          style={styles.image}
          source={require("../../../assets/female.jpg")}

          // source={imageUri}
        />

        <Text style={styles.name}>James Nelson</Text>
        <Text style={styles.cartype}>Red Toyota Corolla</Text>
        <Text style={styles.carnumber}>BUU-189-WE</Text>
        <Ionicons name="call" size={24} color="black" style={styles.icon} />

        <View>
          {/* <View style={{ flexDirection: "row", marginTop: 50 }}>
           <TextInput
             placeholder="Enter your message..."
             value={message}
             onChangeText={(text) => setMessage(text)}
             style={styles.inputStyle}
           ></TextInput>
           <Button onPress={sendMessage} title="send" style={styles.button} />
         </View>
         {data.map((val, i) => {
           return <Text style={{ Top: 80, fontWeight: "bold" }}>{val}</Text>;
         })} */}
          <View
            style={{
              marginTop: 40,
              height: 40,
              width: 90,
              borderWidth: 1.5,
              borderRadius: 10,
            }}
          >
            {chatMessages}
          </View>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={(chatMessage) => this.setState({ chatMessage })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },
  image: {
    height: 55,
    width: 55,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: -20,
  },
  icon: {
    paddingHorizontal: 335,
    marginTop: -47,
  },
  name: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    marginTop: -55,
    marginHorizontal: 90,
  },

  cartype: {
    color: "#8F8F8F",
    fontWeight: "400",
    fontSize: 15,

    marginTop: 0,
    marginHorizontal: 90,
    // paddingLeft: 225,
  },
  carnumber: {
    color: "#000000",
    fontWeight: "400",
    fontSize: 15,

    marginTop: 0,
    marginHorizontal: 90,
    //paddingLeft: 225,
  },
  chatContainer: {
    backgroundColor: "#EEEEEE",
    // height: 600,
  },
  inputStyle: {
    // marginHorizontal: 90,
    // marginTop: 300,
    backgroundColor: "#EEEEEE",
    height: 50,
    width: 300,
    borderRadius: 15,
    // marginTop: 750,
    marginHorizontal: 15,
  },
  button: {
    // marginTop: 750,
  },
  extra: {
    marginTop: 120,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1.5,
    marginTop: 350,
  },
});
