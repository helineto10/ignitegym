import { Center, Heading, HStack } from "@gluestack-ui/themed";

type Props = {
  title: string;
}

export function ScreenHeader({ title }: Props) {
  return (
    <Center
      bg="$gray600"
      pt="$5"
      pb="$8"
      px="$8"
    >
      <Heading
        color="$white"
        fontFamily="$heading"
        fontSize="$xl"
      >
        {title}
      </Heading>
    </Center>
  )
}