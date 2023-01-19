import { View } from "react-native";

import { countAtom } from "$store";
import { api } from "$trpc";
import { useAtom } from "jotai";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Text from "../components/Text";

const Home = () => {
  const hello = api.example.hello.useQuery({ text: "client" });
  const [count, setCount] = useAtom(countAtom);

  if (!hello.data) return <Loader />;

  return (
    <View className="flex h-[100vh] flex-col items-center justify-center">
      <Text className=" text-lemon-400 text-2xl font-bold">
        Greetings from Zeno 👋
      </Text>
      <View className="mt-4">
        <View className="mt-4 flex flex-col items-center">
          <Text>This comes from trpc server:</Text>
          <Text className="font-bold">{hello.data.greeting}</Text>
        </View>
        <View className="mt-4 flex flex-col items-center">
          <Text>This comes from jotai state: </Text>
          <Text className="font-bold">{count}</Text>
          <Button onPress={() => setCount(count + 1)} title="Increment" />
        </View>
      </View>
    </View>
  );
};

export default Home;
