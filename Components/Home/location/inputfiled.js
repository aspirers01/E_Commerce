import { View, Text, TextInput } from "react-native";

function InputFiled({ lable, type, placeholder, value, onChange }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          margin: 5,
          textDecorationColor: "black",
        }}
      >
        {lable}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"black"}
        value={value}
        onChangeText={onChange}
        keyboardType={type}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        style={{
          margin: 5,
          padding: 10,
          borderWidth: 1,
          borderColor: "#D0d0d0",
          borderRadius: 5,
        }}
      />
    </View>
  );
}

export default InputFiled;
