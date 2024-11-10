import { Pressable, ScrollView, Text, View } from "react-native";
import { icons, LockKeyhole } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import Supporting from "@assets/supporting.svg";
import Transfer from "@assets/transfer.svg";
import Pix from "@assets/pix.svg";
import Account from "@assets/account.svg";
import Charge from "@assets/charge.svg";
import GiftCard from "@assets/giftCard.svg";
import ApplyMoney from "@assets/applyMoney.svg";
import Fgts from "@assets/fgts.svg";
import Cards from "@assets/cards.svg";
import Gift from "@assets/gift.svg";

export function SignIn() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <ScrollView className="flex-1 bg-pagbank-yellow-light">
      <Text className="text-3xl pl-6 pt-6 pb-6">Bem-vindo ao PagVendas</Text>
      <View className="flex-1 justify-center items-center px-4">
        <Pressable className="w-full" onPress={() => navigation.navigate('home')}>
          <View className="w-full items-center justify-center gap-3 bg-white py-8 rounded-xl" >
            <LockKeyhole size={24} color={"#000"} />
            <Text className="text-base font-medium text-[#18A589]">Acessar a home</Text>
          </View>
        </Pressable>

        <View className="flex-row flex-wrap justify-between pt-2">
          {[
            { text: "Transferências", icon: Transfer },
            { text: "Pix e QR Code", icon: Pix },
            { text: "Pagar contas e DDA", icon: Account },
            { text: "Indique e Ganhe", icon: Gift },
            { text: "Cobranças", icon: Charge },
            { text: "Recargas e Gift Cards", icon: GiftCard },
            { text: "Aplicar meu dinheiro", icon: ApplyMoney },
            { text: "Consignados e FGTS", icon: Fgts },
            { text: "Cartões", icon: Cards },
          ].map((item, index) => (
            <View key={index} className="w-[32%] items-center justify-center gap-3 bg-white py-6 rounded-xl my-1">
              { item.icon &&  <item.icon width={24} />}
              <Text className="text-base font-medium text-[#18A589] text-center">
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        <View className="w-full items-center justify-center gap-3 bg-white py-8 rounded-xl mt-2 mb-6">
          <Supporting width={24} />
          <Text className="text-base font-medium text-[#18A589]">Atendimento via WhatsApp</Text>
        </View>
      </View>
    </ScrollView>
  );
}
