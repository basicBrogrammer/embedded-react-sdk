import { FieldError, Input, Label, Text, Radio, RadioGroup, TextField } from 'react-aria-components'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as v from 'valibot'
import checkImage from '@/assets/check.png'
import { usePaymentMethod } from '@/components/Employee/PaymentMethodCombo/PaymentMethod'
import { useI18n } from '@/i18n'

export const BankAccountSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty()),
  routing_number: v.pipe(v.string(), v.regex(/^[0-9]{9}$/)),
  account_number: v.pipe(v.string(), v.regex(/^[0-9]{9,18}$/)),
  account_type: v.picklist(['Checking', 'Savings']),
})

export type BankAccountInputs = v.InferInput<typeof BankAccountSchema>

export const BankAccountEdit = () => {
  const { mode } = usePaymentMethod()
  useI18n('Employee.BankAccount')
  const { t } = useTranslation('Employee.BankAccount')
  const { control } = useFormContext<BankAccountInputs>()

  if (mode !== 'ADD' && mode !== 'EDIT') {
    return
  }

  return (
    <>
      <img src={checkImage} alt={t('checkImageAlt')} />
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired validationBehavior="aria" isInvalid={invalid}>
            <Label>{t('nameLabel')}</Label>
            <Input ref={field.ref} />
            <FieldError>{t('validations.accountName', { ns: 'common' })}</FieldError>
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="routing_number"
        rules={{ required: 'Routing number is required' }}
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired validationBehavior="aria" isInvalid={invalid}>
            <Label>{t('routingNumberLabel')}</Label>
            <Text slot="description">{t('routingNumberDescription')}</Text>
            <Input ref={field.ref} />
            <FieldError>{t('validations.routingNumber', { ns: 'common' })}</FieldError>
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="account_number"
        rules={{ required: 'Account number is required' }}
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired validationBehavior="aria" isInvalid={invalid}>
            <Label>{t('accountNumberLabel')}</Label>
            <Input ref={field.ref} />
            <FieldError>{t('validations.accountNumber', { ns: 'common' })}</FieldError>
          </TextField>
        )}
      />

      <Controller
        control={control}
        name="account_type"
        render={({ field, fieldState: { invalid } }) => (
          <RadioGroup {...field} isInvalid={invalid}>
            <Label>{t('accountTypeLabel')}</Label>
            <Radio value={'Checking'}>{t('accountTypeChecking')}</Radio>
            <Radio value={'Savings'}>{t('accountTypeSavings')}</Radio>
          </RadioGroup>
        )}
      />
    </>
  )
}
