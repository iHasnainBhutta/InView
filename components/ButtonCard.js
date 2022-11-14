import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLOURS from "../constants/Colors";
const ButtonCard = (props) => {
  return (
    <View
      style={{
        marginTop: 20,
        // alignItems: "center",
        // width: "50%",
        // // borderWidth: 1,
      }}
    >
      <View
        style={{
          overflow: "hidden",
          width: width / 3,
          height: height / 5,
          marginHorizontal: 15,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundLight,
          elevation: 6,
          marginBottom: 20,
        }}
      >
        <TouchableNativeFeedback
          style={{ flex: 1 }}
          //   onPress={() =>
          //     navigation.navigate("ServiceInfoScreen", { serviceID: data.id })
          //   }
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <View
                style={{
                  alignItems: "center",
                  borderRadius: 200,
                  width: width / 3.5,
                  height: height / 7.5,
                  borderWidth: 5,
                  borderColor: "white",
                  backgroundColor: "white",
                  overflow: "hidden",
                }}
              >
                {/* <Image
                  source={data.productImage}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="cover"
                /> */}
              </View>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: "500",
                  textAlign: "center",
                  // textTransform: "uppercase",
                }}
              >
                Test
                {/* {data.productName} */}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonCard;
