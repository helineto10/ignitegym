import { Avatar, AvatarFallbackText, AvatarImage, Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import AvatarUserPhoto from "@assets/userPhotoDefault.png"
import { LogOut } from 'lucide-react-native';
import { useAuth } from "@hooks/useAuth";
import { TouchableOpacity } from "react-native";


export function HomeHeader() {
  const { user, signOut } = useAuth()
  return (
    <HStack bg="$gray600" pt="$8" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : AvatarUserPhoto}
        alt="Imagem do Usuário"
        w="$16"
        h="$16"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md" >Olá,</Text>
        <Heading color="$gray100" fontSize="$md" >{user.name}</Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  )
}