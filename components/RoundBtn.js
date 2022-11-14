import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableComponent from "./TouchableComponent";

const RoundBtn = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TouchableComponent
        onTap={props.onTap}
        disabled={props.disabled}
        rippleColor={props.rippleColor}
        ripple={false}
      >
        <View style={{ ...styles.innerCont, ...props.innerContStyle }}>
          {props.children}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45, //SirMunawar Height is 70dpi
    borderRadius: 25,
    overflow: "hidden",
    marginHorizontal: 5,
    backgroundColor:"white"
  },
  innerCont: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundBtn;
