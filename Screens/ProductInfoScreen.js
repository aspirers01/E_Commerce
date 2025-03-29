import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/Redux/CartReducer";
import { useState } from "react";
function ProductInfoScreen(prams) {
  const { item } = prams.route.params;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [cartstate, setCartstate] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.searcharea}>
        <SearchBar />
        <FontAwesome name="microphone" size={24} color="black" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item?.carouselImages?.map((image, index) => (
          <ImageBackground
            source={{ uri: image }}
            key={index}
            style={{
              width: width - 20,
              height: height / 2,
              margin: 10,

              marginTop: 20,
            }}
            imageStyle={{
              resizeMode: "contain", // Ensures the image fits properly
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
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text> Color:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.color}</Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text> Size:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.size}</Text>
      </View>
      <Text style={{ borderWidth: 1, height: 1, color: "d0d0d0" }} />
      <Text
        style={{
          color: "green",
          marginHorizontal: 10,
          fontWeight: "500",
          padding: 10,
        }}
      >
        In Stock
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(addToCart(item));
          setCartstate(true);
          setTimeout(() => {
            setCartstate(false);
          }, 60000);
          alert("Product added to cart");
        }}
      >
        {cartstate ? (
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            added to cart
          </Text>
        ) : (
          <Text style={{ textAlign: "center", fontWeight: "500" }}>
            Add to Cart
          </Text>
        )}
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{ textAlign: "center", fontWeight: "500" }}>Buy Now</Text>
      </Pressable>
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
  button: {
    backgroundColor: "#ffc72c",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: " center ",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
});
