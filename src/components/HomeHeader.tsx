import { Avatar, AvatarFallbackText, AvatarImage, Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import AvatarUserPhoto from "@assets/userPhotoDefault.png"
import { LogOut } from 'lucide-react-native';


export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$8" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/helineto10.png" }}
        alt="Imagem do Usuário"
        w="$16"
        h="$16"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md" >Olá,</Text>
        <Heading color="$gray100" fontSize="$md" >Heli Rufino</Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}