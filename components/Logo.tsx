import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
interface LogoProps {
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

const Container = styled.View``;
const Image = styled.Image`
  width: 36px;
  height: 36px;
`;
const Title = styled.Text``;
