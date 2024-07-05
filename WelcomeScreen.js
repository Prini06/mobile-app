import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import Colors from "../common/Colors";
import CommonButton from "../common/CommonButton";

const WelcomeScreen = ({navigation}) => {

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View
        style={{
          paddingHorizontal: 22,
          position: "absolute",
          top: 100,
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "800",
            color: "#E09145",
            fontFamily: "cursive",
          }}
        >
          WELCOME
        </Text>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "800",
            color: "white",
            fontFamily: "cursive",
          }}
        >
          Where Artistry Meets Pastry
        </Text>
      </View>

      <CommonButton
        title="Get Started"
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={{ marginTop: 22, width: "80%" }}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >Already Have a Account ?</Text>
        <Pressable onPress={() => {
            navigation.navigate("Login");
        }}>
            <Text style={{
                fontSize: 16,
                color: Colors.white,
                fontWeight: "bold",
                marginLeft: 4
            }}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default WelcomeScreen;