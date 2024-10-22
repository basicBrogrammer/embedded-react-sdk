import { forwardRef } from 'react'
import {
  Label,
  Button,
  Select as _Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  FieldError,
  Text,
} from 'react-aria-components'
import { useTranslation } from 'react-i18next'
import CaretDown from '@/assets/caret-down.svg?react'
import { useTheme } from '@/contexts'
import type {
  ListBoxItemProps,
  SelectProps as _SelectProps,
  ValidationResult,
} from 'react-aria-components'

interface SelectProps<T extends object> extends Omit<_SelectProps<T>, 'children'> {
  label: string
  placeholder?: string
  description?: React.ReactNode
  errorMessage?: string | ((validation: ValidationResult) => string)
  items: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  onChange?: (...event: unknown[]) => void
}

export interface SelectCategory {
  id: string
  name: string
}

export const Select = forwardRef(function <T extends object>(
  { label, placeholder, description, errorMessage, children, items, ...props }: SelectProps<T>,
  ref: React.RefObject<HTMLInputElement>,
) {
  const { container } = useTheme()
  const { t } = useTranslation()
  return (
    <_Select {...props} ref={ref} onSelectionChange={props.onChange}>
      <Label>{label}</Label>
      {description && <Text slot="description">{description}</Text>}
      <Button>
        <SelectValue>
          {({ defaultChildren, isPlaceholder }) => {
            return isPlaceholder && placeholder ? placeholder : defaultChildren
          }}
        </SelectValue>
        <div aria-hidden="true">
          <CaretDown title={t('icons.selectArrow')} />
        </div>
      </Button>

      <FieldError>{errorMessage}</FieldError>
      {/* NOTE: Popover is injected into the body of the document and does not render inside our GSDK scope. To force this we provide  UNSTABLE_portalContainer which is a reference to our theme container element*/}
      <Popover UNSTABLE_portalContainer={container.current ?? undefined}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </_Select>
  )
})
Select.displayName = 'Select'

//TODO: this is uneccessary
export function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`
      }
    />
  )
}
