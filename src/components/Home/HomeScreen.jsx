import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DestinationSlide from "./DestinationSlide";
import AvailableRides from "./AvailableRides";
import ConfirmPickup from "./ConfirmPickup";
import ConnectToDriver from "./ConnectToDriver";
import MapView from "react-native-maps";

function HomeScreen({ navigation }) {
  return (
    <View>
      {/* <DestinationSlide /> */}
      {/* <AvailableRides /> */}
      {/* <ConfirmPickup navigation={navigation} /> */}
      {/* <ConnectToDriver navigation={navigation} /> */}
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
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
});

export default HomeScreen;
