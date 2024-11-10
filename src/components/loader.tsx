import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

export function Loader({ ...rest }: ActivityIndicatorProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator color={"#0078AD"} {...rest} />
    </View>
  );
}
