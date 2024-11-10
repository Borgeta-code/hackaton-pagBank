import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import Avatar from "@assets/avatar.svg"
import { Bell, EyeOff, Lock, LockKeyhole } from "lucide-react-native";

export function Header() {
  return (
    <View className="w-full flex-row justify-between items-center px-6 py-4 bg-pagbank-yellow-light" style={{paddingTop: Platform.OS === "android" ? 36 : 0}}>
      <View className="flex-row justify-center items-center gap-2 p-2 pr-10 border rounded-full border-pagbank-yellow-dark bg-pagbank-yellow-medium">
          <Avatar width={32} height={32} /> 
          <Text className="text-lg font-medium">Olá, Julia</Text>
      </View>
      <View className="flex-row justify-center items-center gap-5">
        <LockKeyhole size={20} color='#000' />
        <Bell size={20} color='#000' />
        <EyeOff size={20} color='#000' />
      </View>
    </View>
  );
}
