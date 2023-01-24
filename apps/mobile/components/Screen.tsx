import { LinearGradient } from "expo-linear-gradient";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ViewProps,
} from "react-native";
import colors from "tailwindcss/colors";

type ScreenProps = {
  children: React.ReactNode;
};

const Screen: React.FC<ScreenProps & ViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <LinearGradient
      colors={[colors.purple[600], colors.purple[900]]}
      className="h-[100vh]"
    >
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={style}
          className="flex-1"
          {...props}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Screen;
