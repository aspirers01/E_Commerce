import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import SearchBar from "../Components/SearchBar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

function AdressScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.searcharea}>
          <SearchBar />
          <FontAwesome name="microphone" size={24} color="black" />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Your Adresses
          </Text>
          <Pressable
            onPress={() => {
              // navigate to add address screen
              navigation.navigate("AddAdress");
            }}
            style={styles.newaddress}
          >
            <Text>Add a New Address</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </Pressable>
          <Pressable>{/* all the added adresses */}</Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default AdressScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  searcharea: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  newaddress: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D0d0d0",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
});
