import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MenuItem, { MenuItemProps } from "./MenuItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeMenu } from "../redux/menuSlice";
import { RootState } from "../redux/store";

const screenHeight = Dimensions.get("window").height;

export default function Menu() {
  const dispatch = useDispatch();
  const { operation } = useSelector((state: RootState) => state.action);

  useEffect(() => {
    toggledMenu();
  }, [operation]);

  function handlePress() {
    dispatch(closeMenu("closeMenu"));
  }
  const top = useRef(new Animated.Value(screenHeight)).current;

  function toggledMenu() {
    if (operation === "openMenu") {
      Animated.spring(top, {
        toValue: 60,
        useNativeDriver: false,
      }).start();
    }
    if (operation === "closeMenu") {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  }

  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image source={require("../assets/background2.jpg")} />
        <Title>Ibrahim Bag</Title>
        <Subtitle>Designer at TheGym</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {menuItems.map((items: MenuItemProps, index: number) => (
          <MenuItem key={index} {...items} />
        ))}
      </Content>
    </AnimatedContainer>
  );
}

const Container = styled.View`
  position: absolute;
  background: white;
  height: 100%;
  width: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;
const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
`;

const menuItems = [
  { icon: "ios-settings", title: "Account", text: "Settings" },
  { icon: "ios-card", title: "Billing", text: "Payments" },
  { icon: "ios-compass", title: "Learn React", text: "Start Course" },
  { icon: "ios-exit", title: "Log out", text: "See you soon!" },
];
