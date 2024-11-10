import React, { useState } from 'react';
import { View, Modal, Pressable, Text } from 'react-native';
import Swiper from "react-native-swiper";
import { ArrowLeft, Check, ChevronDown, X } from 'lucide-react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

import Ilustration from "@assets/modal-ilustration.svg";
import Ilustration2 from "@assets/modal-ilustration2.svg";
import Avatar from "@assets/avatar.svg";
import Button from './button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { storagePermissionSave } from '@storage/storagePermission';

interface Props {
  visible: boolean;
  onClose: () => void;
  updatePermission: () => void;
  className?: string; 
}

export function FullScreenModal({ visible, onClose, updatePermission }: Props) {
  const [showOpenFinanceConfirm, setShowOpenFinanceConfirm] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onClose();
    setShowOpenFinanceConfirm(false);
    setShowCongratulations(false);
  };

  const handleContinue = () => {
    setShowOpenFinanceConfirm(true);
  };

  const handleOpenFinanceConfirm = () => {
    setIsLoading(true)
    
    setTimeout(() => {
      setShowCongratulations(true);
      setShowOpenFinanceConfirm(false);
    }, 2000)
  };

  const handleFinish = () => {
    onClose();
    setShowOpenFinanceConfirm(false);
    setShowCongratulations(false);
    storagePermissionSave("true");

    setTimeout(() => {
      updatePermission();
    }, 500)
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View className='flex-1 bg-white justify-center items-center'>
        {!showOpenFinanceConfirm || showCongratulations ? (
          <Pressable onPress={handleClose} className='absolute top-8 left-4 z-30'>
            <X size={32} color={showCongratulations ? '#0078AD' : '#000'} />
          </Pressable>
        ) : (
          <Pressable onPress={handleClose} className='absolute top-8 left-4 z-30'>
            <ArrowLeft size={32} color='#0078AD' />
          </Pressable>
        )}

        {showOpenFinanceConfirm ? (
          <View className='flex-1'>
            <View className='pt-20'>
              <Text className="text-3xl">Esses são os dados que você</Text>
              <Text className="text-3xl">vai compartilhar</Text>
              <Text className="text-lg pt-3">Vamos analisar seus dados e propor soluções</Text>
              <Text className="text-lg">exclusivas e pensadas para você.</Text>
            </View>
            <View className="flex-row  justify-between items-center p-5 px-4 rounded-xl bg-white border border-zinc-300 mt-7">
              <Text className="text-lg">Dados do cadastro</Text>
              <ChevronDown size={24} color={'#0078AD'} />
            </View>
            <View className="flex-row  justify-between items-center p-5 px-4 rounded-xl bg-white border border-zinc-300 mt-4">
              <Text className="text-lg">Dados da conta</Text>
              <ChevronDown size={24} color={'#0078AD'} />
            </View>
            <View className="flex-row  justify-between items-center p-5 px-4 rounded-xl bg-white border border-zinc-300 mt-4">
              <Text className="text-lg">Dados do cartão de crédito</Text>
              <ChevronDown size={24} color={'#0078AD'} />
            </View>
            <View className="flex-row  justify-between items-center p-5 px-4 rounded-xl bg-white border border-zinc-300 mt-4">
              <Text className="text-lg">Dados de operação de crédito</Text>
              <ChevronDown size={24} color={'#0078AD'} />
            </View>
            <View className="flex-row  justify-between items-center p-5 px-4 rounded-xl bg-white border border-zinc-300 mt-4">
              <Text className="text-lg">Dados de investimento</Text>
              <ChevronDown size={24} color={'#0078AD'} />
            </View>
            <View className='flex-1 absolute bottom-0 pb-10'>
              <Button variant='secondary' title='Cadastrar no Open Finance' isLoading={isLoading} onPress={handleOpenFinanceConfirm} />
              <Text className="text-base text-center pt-3">Ao continuar você declara estar de acordo com os</Text>
              <Text className="text-base text-center text-pagbank-blue">Termos e Condições do Open Finance</Text>
            </View>
          </View>
        ) : !showCongratulations ? (
          <>
            <Swiper
              loop={false}
              showsPagination={true}
              paginationStyle={{ bottom: 20 }}
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
              <View className='flex justify-center items-center'>
                <Ilustration width={300} height={300} style={{ marginTop: 20 }} />
                <Text className="text-2xl text-center -mt-10">Já imaginou como seria o</Text>
                <Text className="text-2xl text-center pb-4">Banco do Futuro?</Text>
                <Text className="text-lg text-center text-zinc-500 px-6">
                  O Gerente do Futuro reúne seus bancos no PagBank e usa IA para organizar suas finanças por você.
                </Text>
              </View>

              <View className='flex justify-center items-center'>
                <Ilustration2 width={300} height={300} style={{ marginTop: 20 }} />
                <Text className="text-2xl text-center -mt-10">Aproveite e comece a fazer</Text>
                <Text className="text-2xl text-center pb-4">parte do futuro!</Text>
                <Text className="text-lg text-center text-zinc-500 px-6 pb-8">
                  Identificamos algumas contas que você pode trazer para o PagBank:
                </Text>

                <View className='flex gap-3'>
                  {["Itaú", "Nubank", "Mercado Pago"].map((bank, index) => (
                    <View key={index} className="flex-row justify-center items-center gap-8 pt-2">
                      <Checkbox value={true} className="size-6 rounded border border-gray-300" color={'#0078AD'} />
                      <View className='flex-row gap-4'>
                        <Avatar width={38} height={38} />
                        <View className="w-64 border-b border-zinc-200 pb-5">
                          <Text className="text-lg">{bank}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </Swiper>

            <View className='w-full py-4 pb-8 px-2'>
              <Button variant='secondary' title='Continuar' onPress={handleContinue} />
            </View>
          </>
        ) : (
          <View className='flex-1 items-center'>
            <View className='flex justify-center items-center size-16 rounded-full bg-[#CFFCCB] mt-32'>
              <Check size={24} color={'#295921'} />
            </View>
            <Text className="text-2xl text-center pt-5">Parabéns! Agora você faz </Text>
            <Text className="text-2xl text-center">parte do Banco do Futuro.</Text>
            <Text className="text-lg text-center pt-4 text-zinc-500">Comece a explorar os insights e propostas</Text>
            <Text className="text-lg text-center text-zinc-500">que temos para você.</Text>

            <View className='flex-1 w-full absolute bottom-0 px-3 py-6'>
              <Button variant='secondary' title='Explorar' onPress={handleFinish} />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}
