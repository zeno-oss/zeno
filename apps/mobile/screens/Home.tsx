import { StyleSheet, Text, View } from "react-native";
import { trpc } from "../utils/trpc";

const Home = () => {
  const hello = trpc.example.useQuery();

  if (!hello.data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text>{hello.data.message}</Text>
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
});
