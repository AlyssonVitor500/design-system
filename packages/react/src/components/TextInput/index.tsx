import { ComponentProps } from 'react'
import { Input, Prefix, TextInputcontainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputcontainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputcontainer>
  )
}

TextInput.displayName = 'TextInput'
