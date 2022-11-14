import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBarHeight } from "../../utilities/headerMethods";
import TouchableButton from "../../components/TouchableButton";
import { useKeyboard } from "../../utilities/Keyboard";
import RoundBtn from "../../components/RoundBtn";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import RNSpeedometer from "react-native-speedometer";
import CustomModal from "../../components/CustomModal";
import Slider from "@react-native-community/slider";
import axios from "axios";
const { height, width } = Dimensions.get("window");

const BMIChecker = (props) => {
  const [userData, setData] = useState();
  const [_searchForm, setSearchForm] = useState(false);
  const [_input, setInput] = useState();
  const [_width, setWidth] = useState(false);
  const [_navigate, setNavigate] = useState(false);
  const [bmiCalc, setbmiCalc] = useState({});
  const isKeyBoardOpen = useKeyboard();
  const button1AnimationValue = React.useRef(new Animated.Value(0)).current;
  const button2AnimationValue = React.useRef(new Animated.Value(0)).current;
  // console.log(">", _input);
  const buttonPressed = () => {
    button1AnimationValue.setValue(0);

    Animated.stagger(100, [
      Animated.timing(button1AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {});
  };
  const searchbtnPressed = () => {
    button2AnimationValue.setValue(0);

    Animated.stagger(100, [
      Animated.timing(button2AnimationValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {});
  };

  // const options = {
  //   method: 'GET',
  //   url: 'https://instagram47.p.rapidapi.com/search',
  //   params: {search: _in},
  //   headers: {
  //     'X-RapidAPI-Key': '3f68f00ceamshca31bab5fe53e85p126040jsn82ad10eda287',
  //     'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const searchuser = () => {
     axios({
      method: "GET",
      url: "https://instagram47.p.rapidapi.com/search",
      params: { search: _input },
      headers: {
        "X-RapidAPI-Key": "3f68f00ceamshca31bab5fe53e85p126040jsn82ad10eda287",
        "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
      },
      // method: 'POST',
      // url: 'http://6242-182-186-104-132.ngrok.io/api/login',
      // data: { email: email, password: password },
    })
      .then((res) => {
        console.log(">>",res.data.body.users)
        setData(res.data.body.users[0].user);
      })
      .catch((e) => {
        console.log(">",e);
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/ibg.jpg")}
      style={{ height: "100%", width: width }}
      resizeMode={"cover"}
    >
      <View
        style={{
          alignItems: "center",
          // justifyContent: "center",
          height: "80%",
          // flex: 1,
          marginTop: "10%",
        }}
      >
        <View
          style={{
            // height: "10%",
            marginTop: height / 17,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "800", color: "black" }}>
            InView
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "200", color: "black" }}>
            View Instagram Profiles
          </Text>
        </View>
        {_searchForm && (
          <Animated.View
            style={{
              marginTop: "20%",
              backgroundColor: "rgba(255,255,255,0.6)",
              height: height / 2.5,
              width: width / 1.2,
              borderRadius: 25,
              overflow: "hidden",
              opacity: button2AnimationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),

              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "400", color: "black" }}>
              View Profile
            </Text>
            <View
              style={{
                width: width / 1.5,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderRadius: 25,
                // borderColor: "#eee",
                // borderWidth: 0.5,
                backgroundColor: "white",
                marginTop: "8%",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "17%", //15 pad 10
                  alignItems: "center",
                  justifyContent: "center",
                  //  borderRadius: 25,
                  // borderColor: "white",
                  // borderWidth: 1,
                  // backgroundColor:"white"
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <TextInput
                keyboardType="default"
                maxLength={25}
                placeholder="Username"
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "transparent",
                  position: "absolute",
                  paddingLeft: 40,
                }}
                underlineColor="transparent"
                selectionColor="black"
                activeOutlineColor="black"
                multiline={false}
                theme={{ colors: { primary: "white" } }}
                onChangeText={(_input) => setInput(_input)}
              />
            </View>

            <RoundBtn
              rippleColor="rgba(0,0,0,0.1)"
              // linearColors={["#0C0B0B", "#0D0A0A"]}
              style={{
                height: "17%",
                width: width / 3,
                borderRadius: 300,
                // elevation: 2,
                backgroundColor: "white",
                marginTop: "10%",
              }}
              childCont={{ justifyContent: "center" }}
              onTap={
                () => searchuser()
                // props.navigation.replace("BMIChecker", {
                //   data: _male ? _male : false,
                // })
              }
            >
              <Text>Search</Text>
            </RoundBtn>

            {typeof userData == "object" ? (
              <LinearGradient
                // Button Linear Gradient
                colors={["#36D1DC", "#5B86E5"]}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  // backgroundColor:"#eee",
                  width: width / 1.6,
                  borderRadius: 100,
                  height: height / 15,
                  marginTop: "10%",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    height: "100%",
                    paddingLeft: 8,
                    width: "100%",
                  }}
                >
                  <View style={{ height: 50, width: 50 }}>
                    <Image
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 50,
                      }}
                      source={{
                        uri: userData.profile_pic_url,
                      }}
                    />
                  </View>
                  <Text style={{ color: "white", fontWeight: "600" }}>
                    {" "}
                    {userData.full_name}
                  </Text>
                  <View
                    style={{
                      alignItems: "flex-end",
                      position: "absolute",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <RoundBtn
                      rippleColor="rgba(255,255,255,0.3)"
                      // linearColors={["#0C0B0B", "#0D0A0A"]}
                      style={{
                        height: height / 16.5,
                        width: width / 7.5,
                        borderRadius: 300,
                        // elevation: 3,
                        backgroundColor: "transparent",
                        marginTop: 0,
                      }}
                      childCont={{ justifyContent: "center" }}
                      onTap={() => {
                        // props.navigation.replace("BMIChecker", {
                        //   data: _male ? _male : false,
                        // })
                      }}
                    >
                      <MaterialCommunityIcons
                        name="account-eye"
                        size={27}
                        color="white"
                      />
                    </RoundBtn>
                  </View>
                </View>
              </LinearGradient>
            ) : undefined}
          </Animated.View>
        )}
      </View>
      {!isKeyBoardOpen ? (
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "20%",
            paddingBottom: 25,
            alignItems: "flex-start",
            justifyContent: "flex-end",

            paddingLeft: 15,
          }}
        >
          <RoundBtn
            rippleColor="rgba(255,255,255,0.3)"
            // linearColors={["#0C0B0B", "#0D0A0A"]}
            style={{
              height: height / 11.9,
              width: _width ? width / 2 : width / 5.5,
              borderRadius: 300,
              elevation: 3,
              backgroundColor: "white",
              marginTop: 0,
            }}
            childCont={{ justifyContent: "center" }}
            onTap={
              () => {
                {
                  setWidth(!_width);
                }
                {
                  buttonPressed();
                }
              }
              // props.navigation.replace("BMIChecker", {
              //   data: _male ? _male : false,
              // })
            }
          >
            {!_width && (
              <MaterialIcons name="navigate-next" size={60} color="black" />
            )}
            <Animated.View
              style={{
                flexDirection: "row",
                opacity: button1AnimationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            >
              {_width && (
                <RoundBtn
                  rippleColor="rgba(255,255,255,0.3)"
                  // linearColors={["#0C0B0B", "#0D0A0A"]}
                  style={{
                    height: height / 16.5,
                    width: width / 7.5,
                    borderRadius: 300,
                    elevation: 3,
                    backgroundColor: "black",
                    marginTop: 0,
                  }}
                  childCont={{ justifyContent: "center" }}
                  onTap={() => {
                    {
                      setSearchForm(!_searchForm);
                    }
                    {
                      searchbtnPressed();
                    }
                    // props.navigation.replace("BMIChecker", {
                    //   data: _male ? _male : false,
                    // })
                  }}
                >
                  <FontAwesome5 name="search" size={24} color="white" />
                </RoundBtn>
              )}
            </Animated.View>
          </RoundBtn>
        </View>
      ) : undefined}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BMIChecker;
