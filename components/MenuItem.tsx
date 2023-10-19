import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export interface MenuItemProps {
  icon: string;
  title: string;
  text: string;
}
export default function MenuItem({ icon, title, text }: MenuItemProps) {
  return (
    <Container>
      <IconView>
        <Ionicons name={icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;
const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  padding-left: 20px;
`;
const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;
const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
