import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { color } from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");
const Input = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.buttonController, ...props.styleMe }}>
      <LinearGradient colors={props.linearColors}>
        <TouchableNativeFeedback
          style={{ flex: 1 }}
          onPress={props.onTap}
          background={TouchableNativeFeedback.Ripple(
            props.rippleColor
            
          )}
          disabled={props.disabled}
        >
          <View style={{ ...styles.innerContainer, ...props.iconStyle }}>
            <View style={{...styles.titleCont, ...props.childCont}}>
              {/* <Text style={{ ...styles.text, ...props.text }}>
                {props.name}
              </Text> */}
              {props.children}
            </View>
          </View>
        </TouchableNativeFeedback>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonController: {
    width: width / 1.12,
    height: 50,
    marginVertical: 10,
    minWidth: 100,
    borderRadius: 50,
    overflow: "hidden",
    // backgroundColor: "rgba(255, 255, 255 , 0.3)",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },

  titleCont: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // justifyContent: "space-evenly",
 
  },
});

export default Input;
