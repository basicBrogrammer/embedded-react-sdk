import { forwardRef } from 'react'
import {
  Label,
  NumberField as _NumberField,
  FieldError,
  Text,
  Group,
  Input,
} from 'react-aria-components'
import type { NumberFieldProps as _NumberFieldProps, ValidationResult } from 'react-aria-components'

interface NumberFieldProps extends _NumberFieldProps {
  label: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: ValidationResult) => string)
  isPercent?: boolean
}

export const NumberField = forwardRef(function (
  { label, description, errorMessage, isPercent, children, ...props }: NumberFieldProps,
  ref: React.RefObject<HTMLInputElement>,
) {
  const value = isPercent && props.value ? props.value / 100 : props.value
  return (
    <_NumberField
      formatOptions={{ style: isPercent ? 'percent' : 'decimal' }}
      {...props}
      ref={ref}
      value={value}
    >
      <Label>{label}</Label>
      {description && <Text slot="description">{description}</Text>}
      <Group>
        <Input />
      </Group>
      <FieldError>{errorMessage}</FieldError>
    </_NumberField>
  )
})
NumberField.displayName = 'NumberField'
