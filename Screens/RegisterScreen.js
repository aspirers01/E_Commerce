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
import axios from "axios";

const RegisterScreen = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function registerHandler() {
    // console.log all data email passwrod name and confirm password
    console.log("Email:", Email);
    console.log("Password:", Password);
    console.log("Name:", Name);
    console.log("Confirm Password:", ConfirmPassword);

    try {
      setLoading(true);
      if (!Email || !Password || !Name || !ConfirmPassword) {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }
      if (Password !== ConfirmPassword) {
        alert("Password and Confirm Password should be same");
        setLoading(false);
        return;
      }
      const baseURL =
        Platform.OS === "android"
          ? "http://10.0.2.2:8080/api/v1/auth/register"
          : "http://localhost:8080/api/v1/auth/register";
      const { data } = await axios.post(baseURL, {
        email: Email,
        password: Password,
        name: Name,
      });
      setLoading(false);
      if (data) {
        alert("Registration Successful");
        props.navigation.replace("Login");
      }
      console.log(data);
      return;
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Invalid Credentials");
    }
  }

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
              <Button
                title="Register"
                onPress={registerHandler}
                loading={loading}
              />
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
