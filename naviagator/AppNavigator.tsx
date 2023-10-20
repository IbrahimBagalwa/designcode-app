import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import SectionScreen from "../screens/SectionScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{
            header: () => null,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name='Section'
          options={{ header: () => null }}
          component={SectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
