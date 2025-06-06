import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { gluestackUIConfig as theme } from "../../config/gluestack-ui.config";
import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";


export function Profile() {
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
            source={{ uri: "https://github.com/helineto10.png" }}
            size="xl"
            alt="Imagem do Usuário"
          />

          <TouchableOpacity>
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