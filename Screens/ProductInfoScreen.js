import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
function ProductInfoScreen(prams) {
  const { item } = prams.route.params;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.searcharea}>
        <SearchBar />
        <FontAwesome name="microphone" size={24} color="black" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.carouselImages.map((image, index) => (
          <ImageBackground
            source={{ uri: image }}
            key={index}
            style={{
              width: width - 20,
              height: height / 2,
              margin: 10,
              resizeMode: "contain",
              marginTop: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={[styles.icon, { backgroundColor: "#c60c30" }]}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  20% Off
                </Text>
              </View>

              <View style={styles.icon}>
                <FontAwesome name="share" size={24} color="black" />
              </View>
            </View>
            <View
              style={[
                styles.icon,
                {
                  marginTop: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#e0e0e0",
                },
              ]}
            >
              <FontAwesome name="heart-o" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={{ pading: 10, margin: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>{item.title}</Text>
        <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 5 }}>
          {item.price} $
        </Text>
      </View>
      <Text style={{ borderWidth: 1, height: 1, color: "d0d0d0" }} />
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Text> Color:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.color}</Text>
      </View>
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
        <Text> Color:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.color}</Text>
      </View>
    </ScrollView>
  );
}

export default ProductInfoScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    flex: 1,
    backgroundColor: "white",
  },
  searcharea: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 45,
    height: 45,
    backgroundColor: "#e0e0e0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    padding: 5,
    flexDirection: "row",
  },
});
