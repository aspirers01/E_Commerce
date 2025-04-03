import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import InputFiled from "../Components/Home/location/inputfiled";
import { useState } from "react";

function AddAddressScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [country, setCountry] = useState("");
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View
        style={{
          height: 50,
          backgroundColor: "#00CED1",
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Add a New Address
        </Text>

        <InputFiled
          lable={"enter name "}
          placeholder={"enter your first and last name"}
          type={"default"}
          vaule={setName}
          onChange={setName}
        />
        <InputFiled
          lable={"enter phone number"}
          placeholder={"enter your phone number"}
          type={"numeric"}
          vaule={setPhone}
          onChange={setPhone}
        />
        <InputFiled
          lable={"enter address"}
          placeholder={"enter your address"}
          type={"default"}
          vaule={setAddress}
          onChange={setAddress}
        />
        <InputFiled
          lable={"LandMark"}
          placeholder={"eg near by school"}
          type={"default"}
          vaule={setLandmark}
          onChange={setLandmark}
        />
        <InputFiled
          lable={"City"}
          placeholder={"enter your city"}
          type={"default"}
          vaule={setCity}
          onChange={setCity}
        />
        <InputFiled
          lable={"State"}
          placeholder={"enter your state"}
          type={"default"}
          vaule={setState}
          onChange={setState}
        />
        <InputFiled
          lable={"postalCode"}
          placeholder={"enter your pincode"}
          type={"numeric"}
          vaule={setpostalCode}
          onChange={setpostalCode}
        />
        <InputFiled
          lable={"Country"}
          placeholder={"enter your country"}
          type={"default"}
          vaule={setCountry}
          onChange={setCountry}
        />

        <Pressable
          style={{
            backgroundColor: "#ffc72c",
            padding: 19,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginVertical: 10,
            marginTop: 20,
            marginBottom: 50,
            borderWidth: 1,
            borderColor: "#D0d0d0",
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Add Adress</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default AddAddressScreen;

const styles = StyleSheet.create({});
