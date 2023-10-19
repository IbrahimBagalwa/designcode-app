import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
export interface LogoProps {
  title: string;
  image: ImageSourcePropType;
}

export default function Logo({ title, image }: LogoProps) {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;
const Image = styled.Image`
  width: 36px;
  height: 36px;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;
