import { useTranslation } from 'react-i18next'
import { Button, Flex } from '@/components/Common'
import { usePaymentMethod } from '@/components/Employee/PaymentMethodCombo/PaymentMethod'

export const Actions = () => {
  const { handleAdd, isPending, mode } = usePaymentMethod()
  const { t } = useTranslation('Employee.PaymentMethod')
  return (
    <Flex justifyContent="flex-end">
      {mode === 'LIST' && (
        <Button type="button" variant="secondary" onPress={handleAdd}>
          {t('addAnotherCta')}
        </Button>
      )}
      <Button type="submit" isLoading={isPending}>
        {t('submitCta')}
      </Button>
    </Flex>
  )
}
