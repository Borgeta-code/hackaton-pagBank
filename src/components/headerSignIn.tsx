import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import PagVendas from "@assets/PagVendas.svg"
import { Bell, EyeOff, HelpCircle, Lock, LockKeyhole } from "lucide-react-native";

export function HeaderSignIn() {
  return (
    <View className="w-full flex-row justify-between items-center px-6 py-4 bg-pagbank-yellow-light" style={{paddingTop: Platform.OS === "android" ? 36 : 0}}>
        <PagVendas width={120} /> 
        <HelpCircle size={24} color='#0078AD' />
    </View>
  );
}
