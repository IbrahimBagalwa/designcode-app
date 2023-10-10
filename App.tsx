import styled from "styled-components/native";
import Card from "./components/Card";
import { SafeAreaView, ScrollView } from "react-native";
import SvgNotification from "./assets/IconNotification";
import Logo from "./components/Logo";
const data = {
  title: "Styled Components",
  image: require("./assets/background2.jpg"),
  logo: require("./assets/logo-react.png"),
  caption: "React Native",
  subtitle: "3 of 12 sections",
};
const logoData = {
  title: "Framer X",
  image: require("./assets/logo-framerx.png"),
};
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
          <Logo {...logoData} />
          <Subtitle>Continue learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card {...data} />
            <Card {...data} />
            <Card {...data} />
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
  margin-top: 50px;
  text-transform: uppercase;
`;
