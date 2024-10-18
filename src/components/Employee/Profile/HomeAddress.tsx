import { FieldError, Input, Label, Link, ListBoxItem, TextField } from 'react-aria-components'
import { Controller, useFormContext } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import * as v from 'valibot'
import { Alert, Select } from '@/components/Common'
import { Checkbox } from '@/components/Common'
import { STATES_ABBR } from '@/shared/constants'

export const HomeAddressSchema = v.object({
  street_1: v.pipe(v.string(), v.nonEmpty()),
  street_2: v.optional(v.string()),
  city: v.pipe(v.string(), v.nonEmpty()),
  state: v.pipe(v.string(), v.nonEmpty()),
  zip: v.pipe(
    v.string(),
    v.check(zip => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip)),
  ),
  effective_date: v.string(),
  courtesy_withholding: v.boolean(),
})

export type HomeAddressInputs = v.InferInput<typeof HomeAddressSchema>

export const HomeAddress = () => {
  const { t } = useTranslation('Employee.HomeAddress')

  const { control, watch } = useFormContext<HomeAddressInputs>()
  const watchedCourtesyWithholding = watch('courtesy_withholding')

  return (
    <>
      <h2>{t('formTitle')}</h2>
      <p>{t('desc')}</p>
      <Controller
        control={control}
        name="street_1"
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired isInvalid={invalid} validationBehavior="aria">
            <Label>{t('street1')}</Label>
            <Input />
            <FieldError>{t('validations.street1')}</FieldError>
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="street_2"
        render={({ field }) => (
          <TextField {...field} validationBehavior="aria">
            <Label>{t('street2')}</Label>
            <Input />
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired isInvalid={invalid} validationBehavior="aria">
            <Label>{t('city')}</Label>
            <Input />
            <FieldError>{t('validations.city')}</FieldError>
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="state"
        render={({ field, fieldState: { invalid }, formState: { defaultValues } }) => (
          <Select
            {...field}
            isInvalid={invalid}
            items={STATES_ABBR.map((stateAbbr: (typeof STATES_ABBR)[number]) => ({
              name: t(`statesHash.${stateAbbr}`, { ns: 'common' }),
              id: stateAbbr,
            }))}
            label={t('state')}
            placeholder={t('statePlaceholder')}
            errorMessage={t('validations.state')}
            isRequired
            validationBehavior="aria"
            defaultSelectedKey={defaultValues?.state}
          >
            {(state: { name: string; id: string }) => <ListBoxItem>{state.name}</ListBoxItem>}
          </Select>
        )}
      />
      <Controller
        control={control}
        name="zip"
        render={({ field, fieldState: { invalid } }) => (
          <TextField {...field} isRequired isInvalid={invalid} validationBehavior="aria">
            <Label>{t('zip')}</Label>
            <Input />
            <FieldError>{t('validations.zip')}</FieldError>
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="courtesy_withholding"
        render={({ field }) => (
          <Checkbox
            {...field}
            value={field.value.toString()}
            isSelected={field.value}
            description={
              <>
                {t('courtesyWhithholdingDescription')}
                <Trans t={t} i18nKey="learnMoreCta" components={{ learnMore: <Link /> }} />
              </>
            }
          >
            {t('courtesyWithholdingLabel')}
          </Checkbox>
        )}
      />
      {watchedCourtesyWithholding && (
        <Alert label={t('withholdingTitle')} variant="warning">
          <Trans t={t} i18nKey="withholdingNote" />
        </Alert>
      )}
    </>
  )
}
