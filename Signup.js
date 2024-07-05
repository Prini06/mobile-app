import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import Colors from "../common/Colors";
import CommonButton from "../common/CommonButton";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: "black" }}>
            Create Account
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 48,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 22,
          }}>
            <Ionicons name="person-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Name"
              placeholderTextColor={Colors.black}
              keyboardType="default"
              style={{ flex: 1 }}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 48,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 22,
          }}>
            <Ionicons name="location-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Address"
              placeholderTextColor={Colors.black}
              keyboardType="default"
              style={{ flex: 1 }}
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 48,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 22,
          }}>
            <Ionicons name="mail-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.black}
              keyboardType="email-address"
              style={{ flex: 1 }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 48,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 22,
          }}>
            <TextInput
              placeholder="+91"
              placeholderTextColor={Colors.black}
              keyboardType="numeric"
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: Colors.grey,
                height: "100%",
                marginRight: 10,
              }}
            />
            <Ionicons name="call-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={Colors.black}
              keyboardType="numeric"
              style={{ flex: 1 }}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 48,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 22,
            position: "relative",
          }}>
            <Ionicons name="lock-closed-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.black}
              secureTextEntry={!isPasswordShown}
              style={{ flex: 1 }}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: "absolute", right: 12 }}
            >
              <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 6, alignItems: "center" }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.primary : undefined}
          />
          <Text>I agree to the terms and conditions</Text>
        </View>

        <CommonButton
          title="Sign up"
          onPress={() => {
            navigation.navigate("Home");
          }}
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
        />

        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "grey", marginHorizontal: 10 }} />
          <Text style={{ fontSize: 14 }}> Or Sign up with</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "grey", marginHorizontal: 10 }} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: "grey",
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/facebook.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text> Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: "grey",
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/google.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text> Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: "black" }}>
            Already Have a Account
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 16, color: Colors.primary, fontWeight: "bold", marginLeft: 6 }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
