import { Image, VStack, HStack, Heading, Text, Icon, Pressable } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  name: string;
}

export function ExerciseCard({ name, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bgColor="$gray500"
        mb="$3"
        p="$2"
        pr="$4"
        rounded="$md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image
          source={{ uri: "https://github.com/helineto10.png" }}
          alt="Foto do exercicio"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1} ml="$3" justifyContent="center" gap="$1">
          <Heading color="$white" fontSize="$lg" fontFamily="$heading">
            {name}
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body" numberOfLines={2}>
            3 series x 12 repetições
          </Text>
        </VStack>

        <Pressable>
          <Icon as={ChevronRight} size="xl" color="$gray300" />
        </Pressable>
      </HStack>
    </TouchableOpacity>
  )
}