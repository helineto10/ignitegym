import { ComponentProps } from "react";
import { ButtonSpinner, Center, Button as GlueStackButton, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string;
  isLoading?: boolean;
  variant?: "solid" | "outline";
}

export function Button({ title, variant, isLoading = false, ...rest }: Props) {
  return (
    <GlueStackButton
      w="$full"
      h="$14"
      bg={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === "outline" ? "$gray700" : "$green500"}
      $active-borderColor={variant === "outline" ? "$success700" : "$green500"}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading ?
          <ButtonSpinner color="$white" />
          :
          <Text
            color={variant === "outline" ? "$green500" : "$white"}
            fontFamily="$heading"
            fontSize="$md"
          >
            {title}
          </Text>
      }
    </GlueStackButton>
  );
}