import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/Text";

const Welcome = () => {
  const navigation = useNavigation();

  const goBackHandler = () => navigation.goBack();

  return (
    <Screen>
      <View className="flex h-[100vh] flex-col items-center justify-center">
        <Text className=" text-lemon-400 text-2xl font-bold">
          This is the welcome page 🎉
        </Text>
        <View className="mt-4">
          <View className="mt-4 flex flex-col items-center">
            <Button onPress={goBackHandler} title="Go Back To Home" />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Welcome;
