//TODO: Work on this file is incomplete and it is causing TS issues - disabling until someone will get here

// import { useGetPaySchedulesByCompany, usePaySchedulePreview } from '@gusto/embedded-api';
// import { TFunction } from 'i18next';
// import { Button } from 'react-aria-components';
// import { useTranslation } from 'react-i18next';
// import { SetupPayrollSchedule } from '@/components/PayrollSchedule';
// import { componentEvents } from '@/shared/constants';
// import { BaseComponent, type BaseComponentInterface } from '@/components/Base';
// import { useI18n } from '@/i18n';

// interface PaySchedulesProps {
//   companyId: string;
// }

// export const PaySchedules = (props: PaySchedulesProps & BaseComponentInterface) => {
//   const { onEvent, companyId } = props;
//   useI18n('Employee.PaySchedules');
//   const { t } = useTranslation('Employee.PaySchedules');
//   const { data: paySchedules, refetch } = useGetPaySchedulesByCompany(companyId);
//   if (paySchedules.length === 0) {
//     return <SetupPayrollSchedule companyId={companyId} onEvent={() => void refetch} />;
//   }

//   return (
//     <BaseComponent {...props}>
//       {paySchedules.map(paySchedule => (
//         <PaySchedule t={t} paySchedule={paySchedule} companyId={companyId} key={paySchedule.uuid} />
//       ))}
//       <Button
//         type="button"
//         onPress={() => {
//           onEvent(componentEvents.SUCCESS);
//         }}
//       >
//         {t('saveAndContinueCta')}
//       </Button>
//       <Button type="button">{t('labels.cancel', { ns: 'common' })}</Button>
//     </BaseComponent>
//   );
// };

// type PayScheduleType = NonNullable<Parameters<typeof usePaySchedulePreview>[1]>;
// function PaySchedule({
//   paySchedule,
//   companyId,
//   t,
// }: {
//   paySchedule: PayScheduleType;
//   companyId: string;
//   t: TFunction<'Employee.PaySchedules'>;
// }) {
//   // TODO: Fix this any
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
//   const { data } = usePaySchedulePreview(companyId, paySchedule as any);

//   if (!data || !data.pay_periods) return <div>Loading...</div>;

//   const firstPayPeriod = data.pay_periods[0];

//   return (
//     <div>
//       <br />
//       <h2>{t('pageTitle')}</h2>
//       <hr />
//       <div>
//         {/* TODO: Fix this later */}
//         {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
//         <h4>{paySchedule.frequency}</h4>
//         <p>{t('labels.frequency')}</p>
//       </div>
//       <div>
//         <h4>{firstPayPeriod.check_date}</h4>
//         <p>{t('labels.firstPayDate')}</p>
//       </div>
//       <div>
//         <h4>{firstPayPeriod.run_payroll_by}</h4>
//         <p>{t('labels.deadline')}</p>
//       </div>

//       <hr />

//       <p>{t('pleaseVerify')}</p>
//     </div>
//   );
// }
