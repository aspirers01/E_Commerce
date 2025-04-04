import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

import Entypo from "@expo/vector-icons/Entypo";

function Logowithinput(props) {
  return (
    <View style={styles.container}>
      <Entypo name={props.iconname} size={24} color="black" />
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        value={props.value}
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="off"
        keyboardType={props.title === "Username" ? "email-address" : "default"}
        secureTextEntry={
          props.placeholder === ("Password" || "Confirm Password")
            ? true
            : false
        }
        onChangeText={(text) => props.setValue(text)}
      />
    </View>
  );
}

export default Logowithinput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#D0D0D0",
    borderRadius: 10,
    padding: 10,
    margintop: 30,
    marginBottom: 20,
  },
  textInput: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontWeight: "bold",
    fontSize: 18,
  },
});
