// import { useGetEmployeeFederalTaxes, useUpdateEmployeeFederalTaxes } from '@gusto/embedded-api';
// import { valibotResolver } from '@hookform/resolvers/valibot';
// import {
//   Form,
//   Input,
//   Label,
//   ListBoxItem,
//   NumberField,
//   Radio,
//   RadioGroup,
//   Link,
// } from 'react-aria-components';
// import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
// import { Trans, useTranslation } from 'react-i18next';
// import * as v from 'valibot';
// import { useBase, BaseComponent, type BaseComponentInterface } from '@/components/Base';
// import { Button, Flex, Select, SelectCategory, useAsyncError } from '@/components/Common';
// import { useFlow, type EmployeeOnboardingContextInterface } from '@/components/Flow';
// import { useI18n } from '@/i18n';
// import { componentEvents } from '@/shared/constants';

// interface FederalTaxesProps {
//   employeeId: string;
// }

// const FederalTaxesSchema = v.object({
//   // filing_status: v.picklist(['Single', 'Married', 'Head of Household', 'Exempt from withholding']),
//   filing_status: v.pipe(v.string(), v.nonEmpty()),
//   two_jobs: v.boolean(),
//   dependents_amount: v.pipe(v.number(), v.transform(String)),
//   other_income: v.pipe(v.number(), v.transform(String)),
//   deductions: v.pipe(v.number(), v.transform(String)),
//   extra_withholding: v.pipe(v.number(), v.transform(String)),
//   w4_data_type: v.picklist(['pre_2020_w4', 'rev_2020_w4']),
// });

// export type FederalTaxesInputs = v.InferInput<typeof FederalTaxesSchema>;
// export type FederalTaxesPayload = v.InferOutput<typeof FederalTaxesSchema>;

// export const FederalTaxes = (props: FederalTaxesProps & BaseComponentInterface) => {
//   const { employeeId, onEvent } = props;
//   const { setError } = useBase();
//   useI18n('Employee.Taxes');
//   const { t } = useTranslation('Employee.Taxes');
//   const throwError = useAsyncError();
//   const { data: employeeFederalTaxes } = useGetEmployeeFederalTaxes(employeeId);

//   const { control, handleSubmit } = useForm<FederalTaxesInputs, unknown, FederalTaxesPayload>({
//     resolver: valibotResolver(FederalTaxesSchema),
//     defaultValues: {
//       ...employeeFederalTaxes,
//       two_jobs: employeeFederalTaxes.two_jobs ?? false,
//       deductions: employeeFederalTaxes.deductions ? Number(employeeFederalTaxes.deductions) : 0,
//       dependents_amount: employeeFederalTaxes.dependents_amount
//         ? Number(employeeFederalTaxes.dependents_amount)
//         : 0,
//       other_income: employeeFederalTaxes.other_income
//         ? Number(employeeFederalTaxes.other_income)
//         : 0,
//       extra_withholding: employeeFederalTaxes.extra_withholding
//         ? Number(employeeFederalTaxes.extra_withholding)
//         : 0,
//     },
//   });

//   const { mutateAsync: mutateEmployeeFederalTaxes, isPending } = useUpdateEmployeeFederalTaxes({
//     onError: setError,
//   });

//   const onSubmit: SubmitHandler<FederalTaxesPayload> = async payload => {
//     try {
//       const responseData = await mutateEmployeeFederalTaxes({
//         employeeId: employeeId,
//         body: { ...payload, version: employeeFederalTaxes.version as string },
//       });
//       onEvent(componentEvents.EMPLOYEE_FEDERAL_TAXES_UPDATED, responseData);
//     } catch (err) {
//       throwError(err);
//     }
//   };

//   const filingStatusCategories = [
//     { id: 'Single', name: t('filingStatusSingle') },
//     { id: 'Married', name: t('filingStatusMarried') },
//     { id: 'Head of Household', name: t('filingStatusHeadOfHousehold') },
//     { id: 'Exempt from Witholding', name: t('filingStatusExemptFromWitholding') },
//   ];

//   return (
//     <BaseComponent {...props}>
//       <h1>{t('federalTaxesTitle')}</h1>
//       <h2>{t('step1')}</h2>
//       <p>
//         <Trans
//           i18nKey={'irs_calculator'}
//           t={t}
//           components={{
//             irs_calculator: <Link />,
//           }}
//         />
//       </p>

//       <p>{t('whatToHaveReady')}</p>
//       <ul>
//         <li>{t('totalHouseholdIncome')}</li>
//         <li>{t('mostRecentPayStubIfAny')}</li>
//         <li>{t('mostRecentTaxReturnIfAny')}</li>
//         <li>{t('w4Form')}</li>
//       </ul>

//       <h2>{t('step2')}</h2>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Controller
//           control={control}
//           name="filing_status"
//           render={({ field, fieldState: { invalid }, formState: { defaultValues } }) => (
//             <Select
//               {...field}
//               isInvalid={invalid}
//               label={t('federalFilingStatus1c')}
//               description={t('selectWithholdingDescription')}
//               items={filingStatusCategories}
//               defaultSelectedKey={defaultValues?.filing_status}
//             >
//               {(category: SelectCategory) => <ListBoxItem>{category.name}</ListBoxItem>}
//             </Select>
//           )}
//         />
//         <Controller
//           control={control}
//           name="two_jobs"
//           render={({ field, fieldState: { invalid } }) => (
//             <RadioGroup {...field} value={field.value.toString()} isInvalid={invalid}>
//               <Label>{t('includesSpouseExplanation')}</Label>
//               <Radio value="true">{t('labels.yes', { ns: 'common' })}</Radio>
//               <Radio value="false">{t('labels.no', { ns: 'common' })}</Radio>
//             </RadioGroup>
//           )}
//         />
//         <Controller
//           control={control}
//           name="dependents_amount"
//           render={({ field, fieldState: { invalid } }) => (
//             <NumberField {...field} isInvalid={invalid} isRequired>
//               <Label>{t('dependentsTotalIfApplicable')}</Label>
//               <small>
//                 <Trans
//                   i18nKey={'irs_calculator'}
//                   t={t}
//                   components={{
//                     irs_calculator: <Link />,
//                   }}
//                   values={{ lineNum: '3' }}
//                 />
//               </small>
//               <Input />
//             </NumberField>
//           )}
//         />
//         <Controller
//           control={control}
//           name="other_income"
//           render={({ field, fieldState: { invalid } }) => (
//             <NumberField {...field} isInvalid={invalid} isRequired>
//               <Label>{t('otherIncome')}</Label>
//               <small>
//                 <Trans
//                   i18nKey={'irs_calculator'}
//                   t={t}
//                   components={{
//                     irs_calculator: <Link />,
//                   }}
//                   values={{ lineNum: '4a' }}
//                 />
//               </small>
//               <Input />
//             </NumberField>
//           )}
//         />
//         <Controller
//           control={control}
//           name="deductions"
//           render={({ field, fieldState: { invalid } }) => (
//             <NumberField {...field} isInvalid={invalid} isRequired>
//               <Label>{t('deductions')}</Label>
//               <small>
//                 <Trans
//                   i18nKey={'irs_calculator'}
//                   t={t}
//                   components={{
//                     irs_calculator: <Link />,
//                   }}
//                   values={{ lineNum: '4b' }}
//                 />
//               </small>
//               <Input />
//             </NumberField>
//           )}
//         />
//         <Controller
//           control={control}
//           name="extra_withholding"
//           render={({ field, fieldState: { invalid } }) => (
//             <NumberField {...field} isInvalid={invalid} isRequired>
//               <Label>{t('deductions')}</Label>
//               <small>
//                 <Trans
//                   i18nKey={'irs_calculator'}
//                   t={t}
//                   components={{
//                     irs_calculator: <Link />,
//                   }}
//                   values={{ lineNum: '4c' }}
//                 />
//               </small>
//               <Input />
//             </NumberField>
//           )}
//         />

//         <Flex>
//           <Button
//             type="button"
//             variant="secondary"
//             onPress={() => {
//               onEvent(componentEvents.CANCEL);
//             }}
//           >
//             {t('cancelCta')}
//           </Button>
//           <Button type="submit" isLoading={isPending}>
//             {t('submitCta')}
//           </Button>
//         </Flex>
//       </Form>
//     </BaseComponent>
//   );
// };

// export const FederalTaxesContextual = () => {
//   const { employeeId, onEvent } = useFlow<EmployeeOnboardingContextInterface>();
//   const { t } = useTranslation();

//   if (!employeeId) {
//     throw new Error(
//       t('errors.missingParamsOrContext', {
//         component: 'EmployeeFederalTaxes',
//         param: 'employeeId',
//         provider: 'FlowProvider',
//       }),
//     );
//   }
//   return <FederalTaxes employeeId={employeeId} onEvent={onEvent} />;
// };
