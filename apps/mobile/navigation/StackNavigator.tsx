import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorParamList } from "types";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator<NavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
