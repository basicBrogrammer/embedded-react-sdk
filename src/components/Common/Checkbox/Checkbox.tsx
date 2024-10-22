import { forwardRef, useId, type ReactNode } from 'react'
import { type CheckboxProps, Checkbox as _Checkbox } from 'react-aria-components'
import IconChecked from '@/assets/icons/checkbox.svg?react'
import IconCheckedIndeterminate from '@/assets/icons/checkbox_indeterminate.svg?react'

interface CheckboxDescriptionProps extends CheckboxProps {
  description?: string | ReactNode
}
export const Checkbox = forwardRef(function (
  { children, description, ...props }: CheckboxDescriptionProps,
  ref: React.RefObject<HTMLLabelElement>,
) {
  const descriptionId = useId()
  return (
    <div>
      <_Checkbox {...props} aria-describedby={descriptionId} ref={ref}>
        {({ isIndeterminate }) => (
          <>
            <div className="checkbox">
              {isIndeterminate ? <IconCheckedIndeterminate /> : <IconChecked />}
            </div>
            {children}
          </>
        )}
      </_Checkbox>
      {description && (
        <small id={descriptionId} className="react-aria-Checkbox-description">
          {description}
        </small>
      )}
    </div>
  )
})
Checkbox.displayName = 'Checkbox'
