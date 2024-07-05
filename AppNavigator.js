import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Home from "./screens/Home";
import MenuScreen from "./screens/MenuScreen";
import { Provider } from "react-redux";
import store from "../store";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrderScreen";
import LoadingScreen from "./screens/LoadingScreen";
import UserProfile from "./screens/UserProfile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </>
  );
};

export default AppNavigator;
