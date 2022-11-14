import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import SelectGender from "../screens/appScreens/SelectGender";
import BMIChecker from "../screens/appScreens/BMIChecker";
const Stack = createStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={"SelectGender"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="SelectGender" component={SelectGender} />
      <Stack.Screen name="BMIChecker" component={BMIChecker} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
