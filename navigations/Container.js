import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

const Container = (props) => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Container;
