import {
  HOURS_PER_PAY_PERIOD_ANNUALLY,
  HOURS_PER_PAY_PERIOD_MONTHLY,
  HOURS_PER_PAY_PERIOD_WEEKLY,
} from '@/shared/constants'

export const hourlyRate = (
  amount: number,
  paymentUnit: 'Hour' | 'Week' | 'Month' | 'Year' | 'Paycheck',
) => {
  switch (paymentUnit) {
    case 'Hour':
      return amount
    case 'Week':
      return amount / HOURS_PER_PAY_PERIOD_WEEKLY
    case 'Month':
      return amount / HOURS_PER_PAY_PERIOD_MONTHLY
    case 'Year':
      return amount / HOURS_PER_PAY_PERIOD_ANNUALLY
    default:
      return 0
  }
}
export const yearlyRate = (
  amount: number,
  paymentUnit: 'Hour' | 'Week' | 'Month' | 'Year' | 'Paycheck',
) => {
  return hourlyRate(amount, paymentUnit) * HOURS_PER_PAY_PERIOD_ANNUALLY
}
