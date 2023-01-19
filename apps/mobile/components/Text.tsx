import { Text as RNText, TextProps as RNTextProps } from "react-native";

type TextProps = {
  children: React.ReactNode;
};

const Text = (props: TextProps & RNTextProps) => {
  const { children, ...rest } = props;
  return (
    <RNText className="text-gray-50" {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
