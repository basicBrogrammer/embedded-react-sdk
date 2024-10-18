import {
  Input,
  Label,
  Link,
  ListBoxItem,
  NumberField,
  Radio,
  RadioGroup,
  Text,
} from 'react-aria-components'
import { Controller, useFormContext } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import * as v from 'valibot'
import { Select, SelectCategory } from '@/components/Common'
import { useLocale } from '@/contexts/LocaleProvider'

export const FederalFormSchema = v.object({
  // filing_status: v.picklist(['Single', 'Married', 'Head of Household', 'Exempt from withholding']),
  filing_status: v.pipe(v.string(), v.nonEmpty()),
  two_jobs: v.boolean(),
  dependents_amount: v.pipe(v.number(), v.transform(String)),
  other_income: v.pipe(v.number(), v.transform(String)),
  deductions: v.pipe(v.number(), v.transform(String)),
  extra_withholding: v.pipe(v.number(), v.transform(String)),
  w4_data_type: v.picklist(['pre_2020_w4', 'rev_2020_w4']),
})

export type FederalFormInputs = v.InferInput<typeof FederalFormSchema>
export type FederalFormPayload = v.InferOutput<typeof FederalFormSchema>

export function FederalForm() {
  const { control } = useFormContext<FederalFormInputs>()
  const { t } = useTranslation('Employee.Taxes')
  const { currency } = useLocale()

  const filingStatusCategories = [
    { id: 'Single', name: t('filingStatusSingle') },
    { id: 'Married', name: t('filingStatusMarried') },
    { id: 'Head of Household', name: t('filingStatusHeadOfHousehold') },
    { id: 'Exempt from Witholding', name: t('filingStatusExemptFromWitholding') },
  ]

  return (
    <>
      <Controller
        control={control}
        name="filing_status"
        render={({ field, fieldState: { invalid }, formState: { defaultValues } }) => (
          <Select
            {...field}
            isInvalid={invalid}
            label={t('federalFilingStatus1c')}
            placeholder={t('federalFillingStatusPlaceholder')}
            items={filingStatusCategories}
            defaultSelectedKey={defaultValues?.filing_status}
            errorMessage={t('validations.federalFilingStatus')}
          >
            {(category: SelectCategory) => <ListBoxItem>{category.name}</ListBoxItem>}
          </Select>
        )}
      />
      <Controller
        control={control}
        name="two_jobs"
        render={({ field, fieldState: { invalid } }) => (
          <RadioGroup {...field} value={field.value.toString()} isInvalid={invalid}>
            <Label>{t('multipleJobs2c')}</Label>
            <Text slot="description">
              <Trans
                i18nKey={'includesSpouseExplanation'}
                t={t}
                components={{
                  irs_link: <Link />,
                }}
              />
            </Text>
            <Radio value="true">{t('labels.yes', { ns: 'common' })}</Radio>
            <Radio value="false">{t('labels.no', { ns: 'common' })}</Radio>
          </RadioGroup>
        )}
      />
      <Controller
        control={control}
        name="dependents_amount"
        render={({ field, fieldState: { invalid } }) => (
          <NumberField {...field} isInvalid={invalid} isRequired={false}>
            <Label>{t('dependentsTotalIfApplicable')}</Label>
            <Input placeholder="0" />
          </NumberField>
        )}
      />
      <Controller
        control={control}
        name="other_income"
        render={({ field, fieldState: { invalid } }) => (
          <NumberField
            {...field}
            isInvalid={invalid}
            isRequired
            formatOptions={{
              style: 'currency',
              currency: currency,
              currencyDisplay: 'symbol',
            }}
            minValue={0}
            validationBehavior="aria"
          >
            <Label>{t('otherIncome')}</Label>
            <Input />
          </NumberField>
        )}
      />
      <Controller
        control={control}
        name="deductions"
        render={({ field, fieldState: { invalid } }) => (
          <NumberField
            {...field}
            isInvalid={invalid}
            isRequired
            formatOptions={{
              style: 'currency',
              currency: currency,
              currencyDisplay: 'symbol',
            }}
            minValue={0}
            validationBehavior="aria"
          >
            <Label>{t('deductions')}</Label>
            <Input />
          </NumberField>
        )}
      />
      <Controller
        control={control}
        name="extra_withholding"
        render={({ field, fieldState: { invalid } }) => (
          <NumberField
            {...field}
            isInvalid={invalid}
            isRequired
            formatOptions={{
              style: 'currency',
              currency: currency,
              currencyDisplay: 'symbol',
            }}
            minValue={0}
            validationBehavior="aria"
          >
            <Label>{t('extraWithholding')}</Label>
            <Input />
          </NumberField>
        )}
      />
    </>
  )
}
