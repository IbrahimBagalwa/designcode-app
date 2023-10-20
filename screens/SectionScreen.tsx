import { Button } from "react-native";
import styled from "styled-components/native";

export default function SectionScreen({ navigation }: any) {
  return (
    <Container>
      <Text>Session Screen</Text>
      <Button title='close' onPress={() => navigation.goBack()} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
