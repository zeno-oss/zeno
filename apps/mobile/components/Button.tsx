import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import colors from "../../../colors";

type ButtonProps = {
  title: string;
  onPress: () => void;
  children?: React.ReactNode;
};

const Button = (props: ButtonProps & PressableProps) => {
  const { title, onPress, children, ...rest } = props;
  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      {children || <Text className="text-gray-950 font-semibold">{title}</Text>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lemon[400],
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 16,
  },
  pressed: {
    backgroundColor: colors.lemon[200],
  },
});
