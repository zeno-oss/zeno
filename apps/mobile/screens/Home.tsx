import { Button, StyleSheet, Text, View } from "react-native";

import { increment, useAppDispatch, useAppSelector } from "store";
import { trpc } from "../utils/trpc";

const Home = () => {
  const hello = trpc.hello.useQuery({ text: "client" });
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

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
          <Text>This comes from redux: </Text>
          <Text style={styles.bold}>{count}</Text>
          <Button onPress={() => dispatch(increment())} title="Increment" />
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
