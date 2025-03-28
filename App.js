import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "./Store/Redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />;
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
