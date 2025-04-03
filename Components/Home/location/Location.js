import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { BottomModal, ModalContent } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
function Location(props) {
  return (
    <BottomModal
      onBackdropPress={props.toggleModal}
      swipeDirection={["up", "down"]}
      swipeThreshold={50}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={props.toggleModal}
      visible={props.modal}
      onTouchOutside={props.toggleModal}
    >
      <ModalContent style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", margin: 5 }}>
            Choose your location
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",

              color: "grey",
            }}
          >
            Select a Delivery Location to see product availabilty and Delivery
            options
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* already added loactions */}
          <Pressable style={styles.location}>
            <Text style={styles.text}>add an address or a pickup point</Text>
          </Pressable>
        </ScrollView>
        <View style={{ flexDirection: "column", gap: 7, marginBottom: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text style={styles.pincodetext}>Enter the Pincode</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <FontAwesome6 name="location-crosshairs" size={24} color="black" />
            <Text style={styles.pincodetext}>Use My Current Location</Text>
          </View>
        </View>
      </ModalContent>
    </BottomModal>
  );
}
export default Location;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "450",
  },
  text: {
    textAlign: "center",
    color: "#0066b2",
    fontWeight: "500",
  },
  location: {
    height: 140,
    width: 140,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  pincodetext: {
    fontSize: 16,
    fontWeight: "500",
    margin: 5,
    color: "#0066b2",
  },
});
