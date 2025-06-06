import { Box, Center, Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProp } from "@routes/app.routes";
import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepSvg from "@assets/repetitions.svg"
import { Button } from "@components/Button";

export function Exercise() {

  const navigation = useNavigation<AppNavigationRoutesProp>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      // Header
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack gap="$4" pt="$2" pb="$8" alignItems="center" >
          <Heading
            flex={1}
            color="$gray100"
            fontSize="$lg"
            fontFamily="$heading"
            numberOfLines={2}
          >
            Puxada Frontal
          </Heading>

          <HStack gap="$1" alignItems="center">
            <BodySvg />

            <Heading
              color="$gray200"
              fontSize="$md"
              fontFamily="$body"
              textTransform="capitalize"
            >
              Costas
            </Heading>
          </HStack>
        </HStack>
      </VStack>

      // Content
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p="$8">
          <Image
            source={{
              uri: "https://github.com/helineto10.png"
            }}
            alt="Imagem do exercício"
            mb="$3"
            rounded="$lg"
            w="$full"
            h="$80"
          />

          <Box bg="$gray600" p="$4" rounded="$md">
            <HStack pb="$5" px="$4" gap="$2">
              <HStack flex={1} gap="$1.5" alignItems="center" justifyContent="center" >
                <SeriesSvg />

                <Text numberOfLines={1} fontFamily="$body" fontSize="$md" color="$gray200" >
                  3 séries
                </Text>
              </HStack>

              <HStack flex={1} gap="$1.5" alignItems="center" justifyContent="center" >
                <RepSvg />

                <Text numberOfLines={1} fontFamily="$body" fontSize="$md" color="$gray200" >
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button
              title="Marcar como realizado"
            />
          </Box>
        </VStack>
      </ScrollView>

    </VStack>
  );
}