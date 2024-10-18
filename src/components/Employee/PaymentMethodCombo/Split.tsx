import { RadioGroup, Label, Radio, Text } from 'react-aria-components'
import { Controller, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { usePaymentMethod } from '@/components/Employee/PaymentMethodCombo/PaymentMethod'
// import * as v from 'valibot';
// import type { PaymentMethodType } from '@gusto/embedded-api';

// interface SplitPaycheckProps {
//   paymentMethod: PaymentMethodType;
//   employeeId: string;
// }

// const SplitSchema = v.variant('split_by', [
//   v.object({
//     split_by: v.literal('Percentage'),
//     split_amount: v.pipe(
//       v.record(v.string(), v.pipe(v.number(), v.maxValue(100), v.minValue(0))),
//       v.check(input => Object.values(input).reduce((acc, curr) => acc + curr, 0) === 100),
//     ),
//   }),
//   v.object({
//     split_by: v.literal('Amount'),
//     priority: v.pipe(
//       v.record(v.string(), v.number()),
//       v.check(input => {
//         const arr = Object.values(input);
//         return arr.filter((item, index) => arr.indexOf(item) !== index).length === 0;
//       }),
//     ),
//     split_amount: v.record(v.string(), v.pipe(v.number(), v.minValue(0))),
//     remainder: v.string(),
//   }),
// ]);

// type Inputs = v.InferInput<typeof SplitSchema>;
// type Payload = v.InferOutput<typeof SplitSchema>;

// const splitByPrioritySort = (
//   a: NonNullable<PaymentMethodType['splits']>[number],
//   b: NonNullable<PaymentMethodType['splits']>[number],
// ) => ((a.priority as number) > (b.priority as number) ? 1 : -1);

export function Split() {
  const { bankAccounts } = usePaymentMethod()
  const { control } = useFormContext()
  const { t } = useTranslation('Employee.PaymentMethod')

  if (bankAccounts.length < 2) return

  return (
    <>
      <Controller
        control={control}
        name="doSplit"
        render={({ field, fieldState: { invalid } }) => (
          <RadioGroup {...field} isInvalid={invalid}>
            <Label>{t('splitTitle')}</Label>
            <Text slot="description">{t('splitDescription')}</Text>
            <Radio value={'true'}>{t('splitYesLabel')}</Radio>
            <Radio value={'false'}>{t('splitNoLabel')}</Radio>
          </RadioGroup>
        )}
      />
    </>
  )
}
