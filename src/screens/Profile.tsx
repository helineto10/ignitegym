import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

import { gluestackUIConfig as theme } from "../../config/gluestack-ui.config";

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { ToastMessage } from "@components/ToastMessage";


export function Profile() {
  const [userPhoto, setUserPhoto] = useState("https://github.com/helineto10.png")

  const toast = useToast()

  async function handleUserPhotoSelect() {
    try {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    })
    // Validação se o usuário cancelar
    if (photoSelected.canceled) {
      return
    }

    const photoURI = photoSelected.assets[0].uri

    // Validação se a imagem passa de 5MB
    if (photoURI) {
      const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
        size: number
      }

      if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
        return Alert.alert("Essa imagem é muito grande. Escolha uma de até 5MB")
      }

      setUserPhoto(photoURI)
    }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.tokens.colors.gray600 }}>
      <ScreenHeader title="Perfil" />

      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: theme.tokens.colors.gray700,
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingTop: 16,
        paddingBottom: 64
      }}>
        <Center>
          <UserPhoto
            source={{ uri: userPhoto }}
            size="xl"
            alt="Imagem do Usuário"
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Heading
              color="$green500"
              fontSize="$sm"
              fontFamily="$heading">
              Alterar foto
            </Heading>
          </TouchableOpacity>
        </Center>

        <Center gap="$4" mb="$8" mt="$6">
          <Input
            bg="$gray600"
            placeholder="Nome"
            value="Heli Rufino"
          />

          <Input
            bg="$gray600"
            placeholder="email@email.com"
            keyboardType="email-address"
          />
        </Center>

        //Senhas
        <VStack gap="$3">
          <Text
            color="$gray200"
            fontSize="$sm"
            fontFamily="$heading"
            alignSelf="flex-start"
          >
            Alterar senha
          </Text>

          <Center gap="$4">
            <Input
              bg="$gray600"
              placeholder="Senha antiga"
              secureTextEntry
            />

            <Input
              bg="$gray600"
              placeholder="Senha nova"
              secureTextEntry
            />
            <Input
              bg="$gray600"
              placeholder="Confirmar senha"
              secureTextEntry
            />
          </Center>
        </VStack>

        <Button
          title="Atualizar"
          mt="$6"
          mb="$8"
        />

      </ScrollView>
    </SafeAreaView>
  );
}