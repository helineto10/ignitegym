import { FormControl, Input as GlueStackInput, InputField, FormControlErrorText, FormControlError } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null
  isInvalid?: boolean
}

export function Input({ errorMessage = null, isInvalid = false, ...rest }: Props) {

  const invalid = !!errorMessage || isInvalid
  return (
    <FormControl isInvalid={invalid} w="$full">
      <GlueStackInput
        isInvalid={isInvalid}
        h='$14'
        borderWidth='$0'
        borderRadius='$md'
        $focus={{
          borderWidth: '$1',
          borderColor: invalid ? '$red500' : '$green500',
        }}
        $invalid={{
          borderWidth: '$1',
          borderColor: '$red500',
        }}
      >
        <InputField
          bg="$gray700"
          px='$4'
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$gray300"
          {...rest} />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}