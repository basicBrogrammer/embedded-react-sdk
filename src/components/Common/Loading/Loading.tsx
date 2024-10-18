import { useTranslation } from 'react-i18next'

export const Loading = () => {
  const { t } = useTranslation('common')
  return (
    <section aria-live="polite" aria-busy>
      {t('status.loading')}
    </section>
  )
}
