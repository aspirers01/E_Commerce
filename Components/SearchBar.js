import { Pressable, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
function SearchBar() {
  return (
    <Pressable style={styles.container}>
      <Feather name="search" size={22} color="black" />
      <TextInput
        style={{ padding: 5, fontSize: 20 }}
        placeholder="Search amazon.in"
      />
    </Pressable>
  );
}
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    flex: 1,
    padding: 8,
  },
});
