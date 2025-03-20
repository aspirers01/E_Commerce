import { Pressable, Text } from "react-native";

function Button(props) {
  return (
    <Pressable onPress={() => props.navigation.replace("Home")}>
      <Text>{props.title}</Text>
    </Pressable>
  );
}

export default Button;
