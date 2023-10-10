import styled from "styled-components/native";
import Card, { CardProps } from "./components/Card";
import { SafeAreaView, ScrollView } from "react-native";
import SvgNotification from "./assets/IconNotification";
import Logo, { LogoProps } from "./components/Logo";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back</Title>
            <Name>Ibrahim</Name>
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
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
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
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 25px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
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
    image: require("./assets/logo-framerx.png"),
  },
  {
    title: "Figma",
    image: require("./assets/logo-figma.png"),
  },
  {
    title: "Studio",
    image: require("./assets/logo-studio.png"),
  },
  {
    title: "React",
    image: require("./assets/logo-react.png"),
  },
  {
    title: "Swift",
    image: require("./assets/logo-swift.png"),
  },
  {
    title: "Sketch",
    image: require("./assets/logo-sketch.png"),
  },
];

const cardData = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    caption: "React Native",
    subtitle: "1 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    logo: require("./assets/logo-react.png"),
    caption: "React Native",
    subtitle: "2 of 12 sections",
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-react.png"),
    caption: "React Native",
    subtitle: "3 of 12 sections",
  },
  {
    title: "Static Data amd Loop",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-react.png"),
    caption: "React Native",
    subtitle: "4 of 12 sections",
  },
];
