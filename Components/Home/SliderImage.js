const images = [
  "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
];
import { View, Image, StyleSheet, Dimensions } from "react-native";

function SliderImage() {
  return (
    <View style={styles.container}>
      <SwipeableViews>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: Dimensions.get("window").width, height: 300 }}
          />
        ))}
      </SwipeableViews>
    </View>
  );
}
export default SliderImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
