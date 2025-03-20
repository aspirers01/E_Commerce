import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logowithinput from "../Components/Logowithinput";
import Button from "../Components/Button";

const RegisterScreen = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Image
              style={{ width: 150, height: 100 }}
              source={require("../assets/mainIcon.webp")}
            />
          </View>
          <View style={styles.LogoTextView}>
            <Text style={styles.LogoText}> Welcome To E-Commerce </Text>
            <Text style={styles.LogoText}> Login To Your Account </Text>
          </View>

          <View style={{ marginTop: 100 }}>
            <Logowithinput
              iconname="user"
              placeholder="Name"
              setValue={setName}
            />
            <Logowithinput
              iconname="email"
              placeholder="UserEmail"
              setValue={setEmail}
            />
            <Logowithinput
              iconname="lock"
              placeholder="Password"
              setValue={setPassword}
            />
            <Logowithinput
              iconname="lock"
              placeholder="Confirm Password"
              setValue={setConfirmPassword}
            />
            <View style={styles.registerButton}>
              <Button title="Register" navigation={props.navigation} />
            </View>
          </View>
          <View>
            <Text style={styles.registertext}>
              Don't have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => props.navigation.replace("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  LogoTextView: {
    alignItems: "center",
  },
  LogoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#041E42",
    marginTop: 10,
  },
  registertext: {
    textAlign: "center",
    marginVertical: 20,
  },
  link: {
    color: "#f4511e",
  },
  registerButton: {
    backgroundColor: "#febe10",
    padding: 10,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 50,
  },
});
