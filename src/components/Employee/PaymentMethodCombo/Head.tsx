import { Trans, useTranslation } from 'react-i18next'

export function Head() {
  const { t } = useTranslation('Employee.PaymentMethod')
  return (
    <>
      <h2>{t('title')}</h2>
      <Trans t={t} i18nKey="description" components={{ item: <p /> }} />
    </>
  )
}
