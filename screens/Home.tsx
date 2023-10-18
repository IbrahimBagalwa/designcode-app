import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import SvgNotification from "../assets/IconNotification";
import Menu from "../components/Menu";
import Logo, { LogoProps } from "../components/Logo";
import Card, { CardProps } from "../components/Card";
import Course from "../components/Course";
import { useDispatch } from "react-redux";
import { openMenu } from "../redux/features/menuSlice";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Avatar from "../components/Avatar";
import { useGetUserInfoQuery } from "../redux/features/userInfo";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { operation } = useSelector((state: RootState) => state.action);
  const { data, isLoading } = useGetUserInfoQuery("");

  const name = `${data?.results[0]?.name?.title} ${data?.results[0]?.name?.first} ${data?.results[0]?.name?.last}`;
  const username = isLoading && isLoading ? "Ibrahim Bagalwa" : name;
  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
    toggledMenu();
  }, [operation]);

  const handlePress = () => {
    dispatch(openMenu("openMenu"));
  };
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  function toggledMenu() {
    if (operation === "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }

    if (operation === "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
    StatusBar.setBarStyle("dark-content", true);
  }
  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{ transform: [{ scale: scale }], opacity: opacity }}
      >
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={handlePress}
                style={{ position: "absolute", top: 0, left: 20 }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back</Title>
              <Name>{username}</Name>
              <SvgNotification
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
            >
              {logoData.map((items: LogoProps, index: number) => (
                <Logo key={index} {...items} />
              ))}
            </ScrollView>
            <Subtitle>Continue learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cardData.map((items: CardProps, index: number) => (
                <Card key={index} {...items} />
              ))}
            </ScrollView>
            <Subtitle>Popular courses</Subtitle>
            {coursesData.map((data, index) => (
              <Course key={index} {...data} />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;
const RootView = styled.View`
  background: black;
  flex: 1;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
const logoData = [
  {
    title: "Framer X",
    image: require("../assets/logo-framerx.png"),
  },
  {
    title: "Figma",
    image: require("../assets/logo-figma.png"),
  },
  {
    title: "Studio",
    image: require("../assets/logo-studio.png"),
  },
  {
    title: "React",
    image: require("../assets/logo-react.png"),
  },
  {
    title: "Swift",
    image: require("../assets/logo-swift.png"),
  },
  {
    title: "Sketch",
    image: require("../assets/logo-sketch.png"),
  },
];

const cardData = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "1 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "2 of 12 sections",
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "3 of 12 sections",
  },
  {
    title: "Static Data amd Loop",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "4 of 12 sections",
  },
];

const coursesData = [
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "Prototype in InVision Studio",
    image: require("../assets/background15.jpg"),
    subtitle: "10 sections",
    logo: require("../assets/logo-studio.png"),
    author: "Ibrahim Bag",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
];
