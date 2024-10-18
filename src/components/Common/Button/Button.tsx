import { type ButtonProps as _ButtonProps, Button as _Button } from 'react-aria-components'

interface ButtonProps extends _ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon'
  isError?: boolean
  isLoading?: boolean
}
export const Button = (props: ButtonProps) => (
  <_Button
    {...props}
    isDisabled={props.isDisabled || props.isLoading}
    data-variant={props.variant ?? 'primary'}
    data-loading={props.isLoading}
    data-error={props.isError}
  />
)
