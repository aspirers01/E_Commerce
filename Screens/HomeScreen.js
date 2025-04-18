import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import SearchBar from "../Components/SearchBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ListItems from "../Components/ListItems";
import SliderImage from "../Components/Home/SliderImage";
import Deals from "../Components/Home/Deals";
import Offers from "../Components/Home/Offers";
import Products from "../Components/Home/Products";
import { useState } from "react";
import Location from "../Components/Home/location/Location";

function HomeScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searcharea}>
          <SearchBar />
          <FontAwesome name="microphone" size={24} color="black" />
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#AFEEEE",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            android_ripple={{ color: "#00000020" }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
              Deliver to Pankaj - Gorakhpur 273008
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ListItems />
        </ScrollView>
        {/* <SliderImage />  will set it later 
        right now its not working use any other 
        components  */}
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          Trending Deals of this week
        </Text>
        <Deals />
        <Text style={{ height: 1, borderWidth: 2, borderColor: "#D0d0d0" }} />
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          Today's Deals
        </Text>
        <Offers navigation={props.navigation} />
        <Text style={{ height: 1, borderWidth: 2, borderColor: "#D0d0d0" }} />

        <Products />
      </ScrollView>
      <Location
        modal={modalVisible}
        toggleModal={() => setModalVisible(!modalVisible)}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "white",
  },
  searcharea: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
