//TODO: Work on this file is incomplete and it is causing TS issues - disabling until someone will get here
// import type { FC } from 'react';

// import { useGetHistoricalPayrolls } from '@gusto/embedded-api';
// import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';
// import { useTranslation } from 'react-i18next';
// import { currency, shortDate } from '@/helpers/formatters';
// import { BaseComponent, type BaseComponentInterface } from '@/components/Base';
// import { useI18n } from '@/i18n';

// interface PayrollHistoryListProps {
//   companyId: string;
// }

// const PAGINATION_TIME_FRAME = 6;
// const LOOKAHEAD_TIME_FRAME = 3;

// type PayPeriod = {
//   start_date: string;
//   end_date: string;
// };

// type ProcessedPayroll = {
//   payroll_uuid: string;
//   pay_period: PayPeriod;
//   off_cycle_reason: string | null;
//   totals: {
//     gross_pay: string;
//     employer_taxes: string;
//     reimbursements: string;
//     benefits: string;
//   };
//   payroll_status_meta: {
//     cancellable: boolean;
//   };
//   check_date: string;
// };

// export const PayrollHistoryList: FC<PayrollHistoryListProps & BaseComponentInterface> = props => {
//   const { companyId } = props;
//   useI18n('Payroll.PayrollHistoryList');
//   const { t } = useTranslation('Payroll.PayrollHistoryList');

//   const startDate = new Date();
//   startDate.setMonth(startDate.getMonth() - PAGINATION_TIME_FRAME);

//   const endDate = new Date();
//   endDate.setMonth(startDate.getMonth() + PAGINATION_TIME_FRAME + LOOKAHEAD_TIME_FRAME);

//   const { data }: { data: ProcessedPayroll[] } = useGetHistoricalPayrolls(
//     companyId,
//     startDate,
//     endDate,
//   );

//   return (
//     <BaseComponent {...props}>
//       <Table aria-label="Payroll summaries table">
//         <TableHeader>
//           <Column isRowHeader>{t('period')}</Column>
//           <Column>{t('payrollType')}</Column>
//           <Column>{t('payrollCancellable')}</Column>
//           <Column>{t('checkDate')}</Column>
//           <Column>{t('payrollTotal')}</Column>
//         </TableHeader>
//         <TableBody>
//           {data.map(payroll => {
//             const { gross_pay, employer_taxes, reimbursements, benefits } = payroll.totals;
//             const totalParts = [gross_pay, employer_taxes, reimbursements, benefits];
//             const payrollTotal = totalParts.reduce((sum, value) => sum + Number(value), 0);

//             return (
//               <Row key={payroll.payroll_uuid}>
//                 <Cell>
//                   {shortDate(new Date(payroll.pay_period.start_date))} -{' '}
//                   {shortDate(new Date(payroll.pay_period.end_date))}
//                 </Cell>
//                 <Cell>{payroll.off_cycle_reason || 'Regular'}</Cell>
//                 <Cell>{payroll.payroll_status_meta.cancellable ? 'Yes' : 'No'} </Cell>
//                 <Cell>{shortDate(new Date(payroll.check_date))}</Cell>
//                 <Cell>{currency(payrollTotal)}</Cell>
//               </Row>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </BaseComponent>
//   );
// };
