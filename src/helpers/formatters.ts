//TODO: this is inconsistent with react-aria - needs refactoring
const DEFAULT_CURRENCY_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const DEFAULT_DATE_FORMATTER = new Intl.DateTimeFormat('en-US')

export const currency = (value: number) => DEFAULT_CURRENCY_FORMAT.format(value)
export const shortDate = (value: Date) => DEFAULT_DATE_FORMATTER.format(value)
