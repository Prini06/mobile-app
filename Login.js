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

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: "black" }}>
            Hey Welcome back !!!
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
            Email Address
          </Text>

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
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 8 }}>
            Password
          </Text>

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
            <Ionicons name="lock-closed-outline" size={24} color={Colors.black} style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.black}
              secureTextEntry={!isPasswordShown}
              style={{ flex: 1 }}
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
          <Text>Remember me</Text>
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
          <Text style={{ fontSize: 14 }}> Or Login with</Text>
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
            Don't have an Account !!
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ fontSize: 16, color: Colors.primary, fontWeight: "bold", marginLeft: 6 }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
