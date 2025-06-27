import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
import { useState } from "react";
import { storageGetUsers } from "@storage/storageUser";

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useAuth()
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true)
      await signIn(email, password)

    } catch (error) {
      const isAppError = error instanceof AppError
      Alert.alert(isAppError ? error.message : 'Não foi possível logar. Tente novamente mais tarde.')

      setIsLoading(false)
    }
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

            <Controller
              control={control}
              name="email"
              rules={{ required: 'Informe o e-mail' }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: 'Informe a senha' }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button
              title="Acessar"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
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