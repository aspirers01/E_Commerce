import { View, StyleSheet, Text } from "react-native";
import { BottomModal, ModalContent } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
function Location(props) {
  return (
    <BottomModal
      onBackdropPress={props.toggleModal}
      swipeDirection={["up", "down"]}
      swipeThreshold={200}
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
        <View>
          <Text>Choose your location</Text>
        </View>
      </ModalContent>
    </BottomModal>
  );
}
export default Location;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "400",
  },
});
