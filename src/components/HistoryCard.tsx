import { Box, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

type Props = {
  name: string;
}

export function HistoryCard({ name }: Props) {
  return (
    <HStack
      w="$full"
      mb="$3"
      bg="$gray600"
      px="$5"
      py="$4"
      rounded="$md"
      justifyContent="space-between"
      alignItems="center"
      gap="$2"
    >

      <VStack flex={1} gap="$1">
        <Heading color="$white" fontSize="$md" fontFamily="$heading" textTransform="capitalize" numberOfLines={2}>
          Costas
        </Heading>
        <Text color="$gray100" fontSize="$md" fontFamily="$body">
          {name}
        </Text>
      </VStack>

      <Box >
        <Text color="$gray300" fontSize="$md" fontFamily="$body">
          08:56
        </Text>
      </Box>
    </HStack>
  )
}