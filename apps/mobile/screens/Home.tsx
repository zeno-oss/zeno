import { Button, Text, View } from "react-native";

import { countAtom } from "$store";
import { api } from "$trpc";
import { useAtom } from "jotai";
import Loader from "../components/Loader";

const Home = () => {
  const hello = api.example.hello.useQuery({ text: "client" });
  const [count, setCount] = useAtom(countAtom);

  if (!hello.data) return <Loader />;

  return (
    <View className="flex h-[100vh] flex-col items-center justify-center">
      <Text className=" text-2xl">Greetings from Zeno 💞</Text>
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
