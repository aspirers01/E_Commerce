import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import Logowithinput from "../Components/Logowithinput";
import { use, useEffect, useState } from "react";
import Button from "../Components/Button";
import axios from "axios";
import asyncstorage from "@react-native-async-storage/async-storage";

function LoginScreen(props) {
  useEffect(() => {
    async function checkAuth() {
      try {
        const token = await asyncstorage.getItem("@authToken");
        if (token) {
          props.navigation.replace("MainScreen");
        }
      } catch (error) {
        console.log("error message", error);
      }
    }
    checkAuth();
  }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function loginHandler() {
    try {
      setLoading(true);
      if (!Email || !Password) {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }
      const baseURL =
        Platform.OS === "android"
          ? "http://10.0.2.2:8080/api/v1/auth/login"
          : "http://localhost:8080/api/v1/auth/login";
      const { data } = await axios.post(baseURL, {
        email: Email,
        password: Password,
      });
      await asyncstorage.setItem("@authToken", data.token);
      setLoading(false);
      if (data) {
        alert("Login Successful");
        props.navigation.replace("MainScreen");
      }

      return;
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Invalid Credentials");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <Image
          style={{ width: 150, height: 100 }}
          source={require("../assets/mainIcon.webp")}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.LogoTextView}>
          <Text style={styles.LogoText}> Welcome To E-Commerce </Text>
          <Text style={styles.LogoText}> Login To Your Account </Text>
        </View>

        <View style={{ marginTop: 150 }}>
          <Logowithinput
            iconname="email"
            placeholder="Username"
            setValue={setEmail}
          />
          <Logowithinput
            iconname="lock"
            placeholder="Password"
            setValue={setPassword}
          />

          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged in</Text>
            <Text style={{ color: "#007fff" }}>Forget Password</Text>
          </View>
          <View style={styles.loginButton}>
            <Button title="Login" onPress={loginHandler} loading={loading} />
          </View>
          <View>
            <Text style={styles.logintext}>
              Don't have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => props.navigation.replace("Register")}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;

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
  logintext: {
    textAlign: "center",
    marginVertical: 20,
  },
  link: {
    color: "#f4511e",
  },
  loginButton: {
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
