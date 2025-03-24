import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const list = [
  {
    id: "0",
    image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
    name: "Home",
  },
  {
    id: "1",
    image:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
    name: "Deals",
  },
  {
    id: "3",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
    name: "Electronics",
  },
  {
    id: "4",
    image:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
    name: "Mobiles",
  },
  {
    id: "5",
    image:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
    name: "Music",
  },
  {
    id: "6",
    image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
    name: "Fashion",
  },
];

function ListItems() {
  return (
    <FlatList
      horizontal
      style={styles.container}
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: item.image }}
          />
          <Text style={{ fontWeight: "500" }}>{item.name}</Text>
        </View>
      )}
    />
  );
}

export default ListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5FCFF",
    flexdirection: "row",
  },
});
