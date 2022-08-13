import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { trpc } from '../utils/trpc';

const Test = () => {
  const hello = trpc.useQuery(['hello', { text: 'client' }]);
  if (!hello.data) return <Text>Loading...</Text>;
  return (
    <View>
      <Text>{hello.data.greeting}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
