import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBarHeight } from "../../utilities/headerMethods";
import TouchableButton from "../../components/TouchableButton";
import RoundBtn from "../../components/RoundBtn";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import RNSpeedometer from "react-native-speedometer";
import CustomModal from "../../components/CustomModal";
import Slider from "@react-native-community/slider";
const { height, width } = Dimensions.get("window");

const BMIChecker = (props) => {
  const { data } = props.route.params;
  // console.log(data)
  const [weightCount, setWeightCount] = useState(0);
  const [ageCount, setAgeCount] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const [bmiCalc, setbmiCalc] = useState({});
  console.log(">", bmiCalc.result);

  const calculate = (height, weight) => {
    //calculation
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result = result.toFixed(2);
    // console.log(result);
    // display result
    setbmiCalc({ bmi: result });
    if (result < 18.5) {
      setbmiCalc({ BmiResult: "Underweight", result });
    } else if (result >= 18.5 && result < 25) {
      setbmiCalc({ BmiResult: "Normal weight", result });
    } else if (result >= 25 && result < 30) {
      setbmiCalc({ BmiResult: "Overweight", result });
    } else if (result >= 30) {
      setbmiCalc({ BmiResult: "Obese", result });
    } else {
      alert("Incorrect Input!");
      setbmiCalc({ BmiResult: "" });
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          marginTop: "10%",
        }}
      >
        <View style={{ height: "20%" }}>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>BMI CHECKER</Text>
        </View>
        <TouchableButton
          disabled={true}
          linearColors={["#F2F2F2", "#E6E6E6"]}
          styleMe={{
            width: width / 1.15,
            height: height / 6,
            borderRadius: 12,
            elevation: 4,

            marginTop: 0,
          }}
          childCont={{ justifyContent: "center" }}
        >
          <Text>HEIGHT</Text>
          <Text style={{ fontSize: 35, fontWeight: "800" }}>
            {userHeight.toFixed(0)}{" "}
            <Text style={{ fontSize: 20, fontWeight: "300" }}>CM</Text>
          </Text>
          <Slider
            style={{ width: "90%", marginTop: 5 }}
            minimumValue={142}
            maximumValue={203}
            minimumTrackTintColor="black"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setUserHeight(value)}
            thumbTintColor="black"
          />
        </TouchableButton>
        <View
          style={{
            height: height / 4,
            marginTop: 20,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: 20,

            borderColor: "red",
          }}
        >
          <TouchableButton
            disabled={true}
            linearColors={["#F2F2F2", "#E6E6E6"]}
            styleMe={{
              width: width / 2.5,
              height: "20%",
              borderRadius: 15,
              elevation: 8,
              height: height / 5,
              marginTop: 0,
              marginRight: width / 13,
            }}
            childCont={{ justifyContent: "center" }}
          >
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text>WEIGHT</Text>
              <Text style={{ fontSize: 35, fontWeight: "800" }}>
                {weightCount}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <RoundBtn
                disabled={weightCount == 0}
                style={{
                  backgroundColor: "white",
                  elevation: 10,
                  shadowColor: "black",
                }}
                onTap={() =>
                  setWeightCount(
                    weightCount == 0 ? weightCount - 0 : weightCount - 1
                  )
                }
              >
                <AntDesign name="minus" size={24} color="black" />
              </RoundBtn>
              <RoundBtn
                style={{
                  backgroundColor: "white",
                  elevation: 10,
                  shadowColor: "black",
                }}
                onTap={() => setWeightCount(weightCount + 1)}
              >
                <MaterialIcons name="add" size={25} color="black" />
              </RoundBtn>
            </View>
          </TouchableButton>
          <TouchableButton
            disabled={true}
            linearColors={["#F2F2F2", "#E6E6E6"]}
            styleMe={{
              width: width / 2.5,
              height: "20%",
              borderRadius: 15,
              elevation: 8,

              height: height / 5,

              marginTop: 0,
            }}
            childCont={{ justifyContent: "center" }}
          >
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text>AGE</Text>
              <Text style={{ fontSize: 35, fontWeight: "800" }}>
                {ageCount}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <RoundBtn
                disabled={ageCount == 0}
                style={{
                  backgroundColor: "white",
                  elevation: 10,
                  shadowColor: "black",
                }}
                onTap={() =>
                  setAgeCount(ageCount == 0 ? ageCount - 0 : ageCount - 1)
                }
              >
                <AntDesign name="minus" size={24} color="black" />
              </RoundBtn>
              <RoundBtn
                style={{
                  backgroundColor: "white",
                  elevation: 10,
                  shadowColor: "black",
                }}
                onTap={() => setAgeCount(ageCount + 1)}
              >
                <MaterialIcons name="add" size={25} color="black" />
              </RoundBtn>
            </View>
          </TouchableButton>

          {/* <TouchableButton linearColors={["#959595", "#646262"]} /> */}
        </View>
      </View>
      <View style={{ height: "20%", width: "98%", marginBottom: 20 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={
            data
              ? require("../../assets/images/malee.png")
              : require("../../assets/images/sitting.png")
          }
          resizeMode={"contain"}
        />
      </View>
      <CustomModal visible={visible}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          {bmiCalc.result && (
            <Image
              style={{
                width:
                  bmiCalc.result == Infinity
                    ? width / 2
                    : bmiCalc.result >= 0.5 && bmiCalc.result < 18.5
                    ? width / 2.8
                    : width / 1.5,
                height: height / 6,
              }}
              source={
                bmiCalc.result >= 0.5 && bmiCalc.result < 18.5
                  ? require("../../assets/images/sad.gif")
                  : bmiCalc.result >= 18.5 && bmiCalc.result < 25
                  ? require("../../assets/images/normal.gif")
                  : bmiCalc.result >= 25 && bmiCalc.result < 30
                  ? require("../../assets/images/overweight.gif")
                  : bmiCalc.result >= 30 && bmiCalc.result < 40
                  ? require("../../assets/images/obese.gif")
                  : bmiCalc.result >= 40 && bmiCalc.result < 50
                  ? require("../../assets/images/obesidad.gif")
                  : bmiCalc.result == Infinity
                  ? require("../../assets/images/error.gif")
                  : require("../../assets/images/notfound.gif")
              }
              resizeMode={"cover"}
            />
          )}

          {bmiCalc.result == Infinity && (
            <Text style={{ fontWeight: "500" }}>Invaild Height or Weight</Text>
          )}
          {bmiCalc.result >= 18.5 && bmiCalc.result < 25 && (
            <>
              <Text style={{ color: "green", fontWeight: "900" }}>
                NORMAL{"\n"}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                Your BMI is{" "}
                <Text style={{ fontWeight: "900", color: "green" }}>
                  {bmiCalc.result}
                </Text>
              </Text>
            </>
          )}
          {bmiCalc.result >= 25 && bmiCalc.result < 30 && (
            <>
              <Text style={{ color: "#FFC300", fontWeight: "900" }}>
                OVERWEIGHT{"\n"}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                Your BMI is{" "}
                <Text style={{ fontWeight: "900", color: "#FFC300" }}>
                  {bmiCalc.result}
                </Text>
              </Text>
            </>
          )}
          {bmiCalc.result >= 30 && bmiCalc.result < 40 && (
            <>
              <Text style={{ color: "#FF6B05", fontWeight: "900" }}>
                OBESO{"\n"}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                Your BMI is{" "}
                <Text style={{ fontWeight: "900", color: "#FF6B05" }}>
                  {bmiCalc.result}
                </Text>
              </Text>
            </>
          )}
          {bmiCalc.result >= 40 && bmiCalc.result < 50 && (
            <>
              <Text style={{ color: "#C70039", fontWeight: "900" }}>
                OBESIDAD{"\n"}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                Your BMI is{" "}
                <Text style={{ fontWeight: "900", color: "#C70039" }}>
                  {bmiCalc.result}
                </Text>
              </Text>
            </>
          )}
          {bmiCalc.result >= 0.5 && bmiCalc.result < 18.5 && (
            <>
              <Text style={{ color: "#C70039", fontWeight: "900" }}>
                UNDERWEIGHT{"\n"}
              </Text>
              <Text style={{ fontWeight: "500" }}>
                Your BMI is{" "}
                <Text style={{ fontWeight: "900", color: "#C70039" }}>
                  {bmiCalc.result}
                </Text>
              </Text>
            </>
          )}

          {/* <RNSpeedometer
            value={bmiCalc.result}
            //value for Speedometer
            size={130}
            //Size of Speedometer
            minValue={16.5}
            //Min value for Speedometer
            maxValue={32}
            //Max value for Speedometer
            allowedDecimals={2}
            //Decimals value allowed or not
            labels={[
              {
                name: "Underweight",
                labelColor: "#ff2900",
                activeBarColor: "#ff2900",
              },

              {
                name: "Normal weight",
                labelColor: "#00ff6b",
                activeBarColor: "#00ff6b",
              },
              {
                name: "Normal weight",
                labelColor: "#00ff6b",
                activeBarColor: "#00ff6b",
              },

              {
                name: "Overweight",
                labelColor: "#FFC300",
                activeBarColor: "#FFC300",
              },

              {
                name: "Overweight",
                labelColor: "#ff2900",
                activeBarColor: "#ff2900",
              },
            ]}
            //Labels for the different steps of Speedometer
          /> */}
        </View>
        <View style={{ marginTop: height / 16 }}></View>
        <TouchableButton
          rippleColor="rgba(255,255,255,0.2)"
          linearColors={["#0C0B0B", "#0D0A0A"]}
          styleMe={{
            width: width / 3,
            height: height / 20,
            borderRadius: 50,
            elevation: 3,

            marginTop: 0,
          }}
          childCont={{ justifyContent: "center" }}
          onTap={() => setVisible(false)}
        >
          <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
            BACK
          </Text>
        </TouchableButton>
      </CustomModal>
      <View
        style={{
          flex: 0.1,
          width: "100%",
          height: "20%",
          paddingBottom: 20,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableButton
          disabled={!weightCount}
          rippleColor="rgba(8,113,11,0.4)"
          linearColors={["#0C0B0B", "#0D0A0A"]}
          styleMe={{
            width: width / 1.15,
            height: height / 15,
            borderRadius: 12,
            elevation: 3,

            marginTop: 0,
          }}
          childCont={{ justifyContent: "center" }}
          onTap={() => {
            calculate(userHeight, weightCount);
            setVisible(true);
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
            CALCULATE
          </Text>
        </TouchableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default BMIChecker;
