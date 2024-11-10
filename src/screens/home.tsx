import Button from "@components/button";
import { ChevronDown, ChevronRight, CircleHelp } from "lucide-react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Checkbox from 'expo-checkbox';
import chart from '@assets/chart.png'
import AvatarPagbank from "@assets/avatar.svg"
import AvatarNubank from "@assets/avatar-nubank.svg"
import AvatarItau from "@assets/avatar-itau.svg"
import { FullScreenModal } from "@components/fullscreenModal";
import { storagePermissionGet, storagePermissionRemove, storagePermissionSave } from "@storage/storagePermission";
import Swiper from "react-native-swiper";

export function Home() {

  const [score, setScore] = useState(840);
  const scoreColor = score <= 400 ? '#FF4D4D' : score <= 600 ? '#FFD700' : '#3CB371';

  const [balance, setBalance] = useState('4.550,00');
  const [toReceive, setToReceive] = useState('3.000,00');

  const [permission, setPermission] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Todos');

  const [itemLightColor, setItemLightColor] = useState('#E8B81C');
  const [itemMediumColor, setItemMediumColor] = useState('#D4A017');
  const [itemDarkColor, setItemDarkColor] = useState('#A67C00');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  async function getPermission() {
    try {
      const permission = await storagePermissionGet();
      setPermission(permission);
    } catch (e) {
      console.log(e);
    }
  }

  async function updatePermission() {
    try {
      const permission = await storagePermissionGet();
      setPermission(permission);
      setBalance('2.150,00');
      setToReceive('3.000,00');
      setScore(640);
    } catch (e) {
      console.log(e);
    }
  }

  function handleSelection(title: string) {
    setSelectedItem(title);

    if (title === 'PagBank') {
      setBalance('950,00');
      setScore(679);
      setItemLightColor('#FFD13A');
      setItemMediumColor('#E8B81C');
      setItemDarkColor('#8C7324');
    } else if (title === 'Nubank') {
      setBalance('200,00');
      setScore(253);
      setItemLightColor('#8A30E3');
      setItemMediumColor('#7A25CE');
      setItemDarkColor('#680EC2');
    } else if (title === 'Itaú') {
      setBalance('3.400,00');
      setToReceive('2.000,00');
      setScore(590);
      setItemLightColor('#FF8800');
      setItemMediumColor('#0760C0');
    } else {
      setBalance('4.550,00');
      setToReceive('3.000,00');
      setScore(640);
      setItemLightColor('#FFD13A');
      setItemMediumColor('#E8B81C');
      setItemDarkColor('#8C7324');
    }
  }

  const [cards, setCards] = useState([
    {
      id: 1,
      bank_title: 'PagBank',
      confirmed: false,
      title: 'Otimize seus pagamentos altere as datas de vencimento',
      options: [
        { id: '1', label: 'Quinto Andar', description: 'Altere do dia 08 para dia 15 de todo mês' },
        { id: '2', label: 'Claro', description: 'Altere do dia 10 para dia 15 de todo mês' },
        { id: '3', label: 'Netflix', description: 'Altere do dia 20 para dia 30 de todo mês' },
      ],
    },
    {
      id: 2,
      bank_title: 'PagBank',
      confirmed: false,
      title: 'Invista R$500 por mês, em 30 anos você terá cerca de R$500.000,00!',
      description: 'Esse valor equivale a apenas 5% de seu salário e você pode resgatar caso tenha alguma emergência.',
      details: 'Aproveite para planejar uma viagem longa, a compra de um veículo ou imóvel, ou até planejar sua aposentadoria!',
    },
    {
      id: 3,
      bank_title: 'PagBank',
      confirmed: false,
      title: 'Você precisa faturar 40% a mais para ter capital de giro saudável',
      options: [
        { id: '1', label: 'Catálogo Online', description: 'Crie o seu catálogo online com a nossa IA' },
        { id: '2', label: 'Link de pagamento', description: 'Venda diretamente pelo Whatsapp e fature até 40% a mais' },
        { id: '3', label: 'Delivery', description: 'Integre delivery entrega fácil' },
      ],
    },
    {
      id: 4,
      bank_title: 'Nubank',
      confirmed: false,
      title: 'Traga sua dívida para o PagBank e vamos te ajudar a sair do aperto!',
      options: [
        { id: '1', label: null, description: 'Te oferecemos um empréstimo de R$ 20.000,00 para liquidar sua dívida' },
        { id: '2', label: null, description: 'Você paga em até 48x de R$1.043,54' },
        { id: '3', label: null, description: 'O valor das parcelas comprometem apenas 10% de sua renda mensal' },
      ],
    },
    {
      id: 5,
      bank_title: 'Itaú',
      confirmed: false,
      title: 'Faça a portabilidade de salário e concentre seu recebíveis',
      options: [
        { id: '1', label: null, description: 'Te oferecemos um empréstimo de R$ 20.000,00 para liquidar sua dívida' },
        { id: '2', label: null, description: 'Você paga em até 48x de R$1.043,54' },
        { id: '3', label: null, description: 'O valor das parcelas comprometem apenas 10% de sua renda mensal' },
      ],
    },
    
  ]);

  const handleAuthorize = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, confirmed: !card.confirmed } : card
      )
    );
  };


  const showCards = cards.filter((card) => card.bank_title === selectedItem && card.confirmed === false);
  

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 80 }}>
      <View className="flex-1 px-4 py-2 border-b" style={{backgroundColor: itemLightColor, borderColor: itemMediumColor}}>
        {
          permission && (
            <FlatList
              className="pb-6"
              data={[
                { title: 'Todos', hasAvatar: false, avatar: null },
                { title: 'PagBank', hasAvatar: true, avatar: AvatarPagbank },
                { title: 'Nubank', hasAvatar: true, avatar: AvatarNubank },
                { title: 'Itaú', hasAvatar: true, avatar: AvatarItau },
              ]}
              horizontal
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <View
                  className="flex-row justify-center items-center gap-2 px-4 py-2 bg-white rounded-full"
                  style={[
                    item.title === selectedItem && { backgroundColor: '#0078AD' },
                  ]}
                  onTouchEnd={() => handleSelection(item.title)}
                >
                  {item.hasAvatar && item.avatar && <item.avatar width={24} height={24} />}
                  <Text
                    className="text-center"
                    style={[item.title === selectedItem && { color: '#fff' }]}
                  >
                    {item.title}
                  </Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View className="w-2" />}
              showsHorizontalScrollIndicator={false}
            />
          )
        }
        <Text className="text-lg">Saldo</Text>
        <Text className="text-3xl font-semibold py-1">R$ {balance}</Text>
      </View>
      <View className="flex-1 gap-5 px-4 py-5 bg-pagbank-yellow-light border-b border-pagbank-yellow-medium" style={[permission && { paddingBottom: 36, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, zIndex: 999, borderColor: 'transparent' }]}>
        {
          selectedItem === 'Todos' &&
          <View className="flex-1 flex-row justify-between items-center">
            <View>
              <Text className="text-lg">Vendas a receber</Text>
              <Text className="text-2xl font-semibold py-1">R$ {toReceive}</Text>
            </View>
            <Button title="Antecipar" />
          </View>
        }
        <View className="flex-1 flex-row justify-between items-center rounded-full px-4 py-2 border-2 border-pagbank-yellow-dark">
          <Text className="text-base font-medium">Extrato da conta</Text>
          <ChevronRight size={24} color={'#000'} />
        </View>
      </View>
      {
        !permission && (
          <View className="flex-1 flex-row items-center justify-between p-6 pb-8 bg-pagbank-yellow-light rounded-b-3xl z-10">
            <View>
              <Text className="text-lg">Conheça o seu novo</Text>
              <Text className="text-3xl py-1">Gerente do Futuro</Text>
            </View>
            <Button title="Saiba mais" onPress={openModal} />
          </View>
        )
      }
      <View className="flex gap-3 px-3 py-6 pt-10 items-center justify-center bg-white rounded-b-3xl border border-t-0 border-zinc-300 -mt-4">
        <Text className="text-2xl font-medium pb-4">Sua conta está saudável!</Text>
        <AnimatedCircularProgress
          size={180}
          width={22}
          fill={(score / 1000) * 100}
          tintColor={scoreColor}
          backgroundColor={"#e0e0e0"}
          lineCap="round"
        >
          {() => (
            <View className="flex gap-2 items-center justify-center">
              <Text className="text-4xl font-medium">
                {score}
              </Text>
              <Text className="text-xl font-medium">
                de 1000
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <View className="flex justify-center items-center pt-3">
          <Text className="text-lg">Sua saúde financeira está ótima!</Text>
          <Text className="text-lg">Que tal investir no seu futuro?</Text>
        </View>
      </View>
      {showCards.length > 0 && (
        <View className="flex-1 py-9 px-4 gap-3">
          <View className="pb-3">
            <Text className="text-2xl">Hoje temos essas</Text>
            <Text className="text-2xl">recomendações para você</Text>
          </View>
          <Swiper
            height={480}
            paginationStyle={{ bottom: 0 }}
            loop={false}
            showsPagination
            dotStyle={{
              backgroundColor: "#d3d3d3",
              width: 8,
              height: 8,
              borderRadius: 4,
            }}
            activeDotStyle={{
              backgroundColor: "#0078AD",
              width: 8,
              height: 8,
              borderRadius: 4,
            }}
          >
            {showCards.map((card) => {

              if(card.confirmed) return;

              return (
              <View key={card.id} className="pr-4">
                <View className="px-5 pt-5 pb-8 bg-white border border-zinc-300 rounded-2xl">
                  <View className="flex-row items-center justify-between">
                    <Text className="w-80 text-lg text-wrap font-medium">{card.title}</Text>
                    <CircleHelp size={24} color={'#0078AD'} />
                  </View>

                  {card.options?.map((option) => (
                    <View key={option.id} className="flex-row justify-center items-center gap-8 pt-5">
                      <Checkbox value={true} className="size-6 rounded border border-gray-300" color={'#0078AD'} />
                      <View className="flex-1 border-b border-zinc-200 pb-5">
                        <Text className="text-lg">{option.label}</Text>
                        <Text className="text-base text-zinc-500">{option.description}</Text>
                      </View>
                    </View>
                  ))}

                  {card.description && <Text className="text-base text-zinc-500 pt-4 pb-4">{card.description}</Text>}
                  {card.details && <Text className="text-base text-zinc-500 pb-4">{card.details}</Text>}

                  <View className="pt-8">
                    <Button title="Eu autorizo" variant="secondary" onPress={() => handleAuthorize(card.id)} />
                  </View>
                </View>
              </View>
            )})}
          </Swiper>
        </View>
      )}
      <View className="flex-1 pt-6 pb-3 px-4 gap-3">
        <Text className="text-3xl">Confira o balanço financeiro de sua conta</Text>
        <View className="flex-row justify-center items-center gap-3 py-4">
          <View className="flex-row gap-2 justify-center items-center p-2 px-4 rounded-full bg-pagbank-blue">
            <Text className="text-lg text-white">Novembro</Text>
            <ChevronDown size={24} color={'#fff'} />
          </View>
          <View className="flex-row gap-2 justify-center items-center p-2 px-4 rounded-full bg-white border border-zinc-300">
            <Text className="text-lg">Semana</Text>
            <ChevronDown size={24} color={'#0078AD'} />
          </View>
          <View className="flex-row gap-2 justify-center items-center p-2 px-4 rounded-full bg-white border border-zinc-300">
            <Text className="text-lg">Dia</Text>
            <ChevronDown size={24} color={'#0078AD'} />
          </View>
        </View>
        <View className="flex-row justify-center items-center gap-3 pb-4">
          <View className="flex-1 bg-white border border-zinc-200 rounded-2xl overflow-hidden">
            <View className="w-full h-5 bg-[#FFA100]" />
            <View className="p-4 flex justify-center items-center">
              <Text className="text-lg font-medium text-zinc-500">Total gasto</Text>
              <Text className="text-xl font-medium pt-1">R$ 965,20</Text>
            </View>
          </View>
          <View className="flex-1 bg-white border border-zinc-200 rounded-2xl overflow-hidden">
            <View className="w-full h-5 bg-[#46A8C7]" />
            <View className="p-4 flex justify-center items-center">
              <Text className="text-lg font-medium text-zinc-500">Total recebido</Text>
              <Text className="text-xl font-medium pt-1">R$ 965,20</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 px-4 gap-3">
        <View className="px-5 pt-5 pb-8 bg-white border border-zinc-300 rounded-2xl">
          <Image className="w-full" source={chart} />
        </View>
      </View>

      <FullScreenModal visible={isModalVisible} onClose={closeModal} updatePermission={updatePermission} />
    </ScrollView>
  );
}
