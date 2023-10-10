import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
export interface CardProps {
  image: ImageSourcePropType;
  title: string;
  logo: ImageSourcePropType;
  caption: string;
  subtitle: string;
}
export default function Card({
  image,
  title,
  logo,
  caption,
  subtitle,
}: CardProps) {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}
const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Logo = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  overflow: hidden;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
