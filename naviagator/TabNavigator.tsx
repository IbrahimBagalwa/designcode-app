import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SectionScreen from "../screens/SectionScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          options={{ header: () => null }}
          component={HomeScreen}
        />
        <Tab.Screen
          name='Courses'
          options={{ header: () => null }}
          component={SectionScreen}
        />
        <Tab.Screen
          name='Projects'
          component={SectionScreen}
          options={{ header: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabNavigator;
