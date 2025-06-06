import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBackToSignIn() {
    navigation.goBack();
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
              Crie sua conta
            </Heading>

            <Input
              placeholder="Nome"
            />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Senha"
              secureTextEntry
            />
            <Input
              placeholder="Confirme a Senha"
              secureTextEntry
            />

            <Button
              title="Criar e acessar"
              mt="$3"
            />

          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleBackToSignIn}
          />

        </VStack>
      </VStack>
    </ScrollView>
  );
}