import { StyleSheet, Text, View } from 'react-native';

import { trpc } from '../utils/trpc';

const Home = () => {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text>Greetings from TERNER 💞</Text>
      <Text>This comes from the server:</Text>
      <Text>{hello.data.greeting}</Text>
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
