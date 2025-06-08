import { Center, Heading, Image, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o email.').email("Email inválido."),
  password: yup
  .string()
  .required("Informe a senha")
  .min(6, "A senha deve ter pelo menos 6 caracteres."),
  password_confirm: yup
  .string()
  .required("Confirme a senha.")
  .oneOf([yup.ref("password"), ""], "A confirmação da senha nao confere.")
})

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })

  const navigation = useNavigation();
  function handleBackToSignIn() {
    navigation.goBack();
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data)
  }
  return (
    <ScrollView
      bgColor="$gray700"
      contentContainerStyle={{ paddingBottom: 170 }}
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

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  autoCapitalize="sentences"
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirme a Senha"
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  errorMessage={errors.password_confirm?.message}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Criar e acessar"
              mt="$3"
              onPress={handleSubmit(handleSignUp)}
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