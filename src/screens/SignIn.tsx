import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }
  return (
    <ScrollView
    bgColor="$gray700" 
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="Pessoas treinando"
          w='$full'
          h={624}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16" >
          <Center my={"$24"}>
            <Logo />
            <Text color="$gray100" fontSize="$sm" >
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center flex={1} gap="$3">
            <Heading color="$gray100">
              Acesse sua conta
            </Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              secureTextEntry
            />

            <Button
              title="Acessar"
            />

          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4" gap="$2">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>
            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}