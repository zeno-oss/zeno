import { Button, StyleSheet, Text, View } from "react-native";

import { countAtom } from "$store";
import { api } from "$trpc";
import { useAtom } from "jotai";

const Home = () => {
  const hello = api.example.hello.useQuery({ text: "client" });
  const [count, setCount] = useAtom(countAtom);

  if (!hello.data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greetings from Zeno 💞</Text>
      <View style={{ marginTop: 16 }}>
        <View style={styles.section}>
          <Text>This comes from trpc server:</Text>
          <Text style={styles.bold}>{hello.data.greeting}</Text>
        </View>
        <View style={styles.section}>
          <Text>This comes from jotai state: </Text>
          <Text style={styles.bold}>{count}</Text>
          <Button onPress={() => setCount(count + 1)} title="Increment" />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 16,
  },
});
