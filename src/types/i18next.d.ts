import 'i18next'
import Resources from './i18nresources'
import { defaultNS } from '@/i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: typeof Resources
  }
}
