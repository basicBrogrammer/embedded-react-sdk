import { valibotResolver } from '@hookform/resolvers/valibot'
import { useEffect, useState } from 'react'
import { Form } from 'react-aria-components'
import { FormProvider, useForm, useWatch, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import * as v from 'valibot'
import {
  useBase,
  BaseComponent,
  type BaseComponentInterface,
  type CommonComponentInterface,
  createCompoundContext,
} from '@/components/Base'
import { Actions } from '@/components/Employee/PaymentMethodCombo/Actions'
import {
  BankAccountEdit,
  BankAccountSchema,
} from '@/components/Employee/PaymentMethodCombo/BankAccountEdit'
import { BankAccountsList } from '@/components/Employee/PaymentMethodCombo/BankAccountsList'
import { Head } from '@/components/Employee/PaymentMethodCombo/Head'
import {
  PAYMENT_METHODS,
  PaymentTypeForm,
  type PaymentTypePayload,
  type PaymentTypeInputs,
} from '@/components/Employee/PaymentMethodCombo/PaymentTypeForm'
import { Split } from '@/components/Employee/PaymentMethodCombo/Split'
import { useFlow, type EmployeeOnboardingContextInterface } from '@/components/Flow'
import { useI18n } from '@/i18n'
import { componentEvents } from '@/shared/constants'
import type { BankAccountInputs } from '@/components/Employee/PaymentMethodCombo/BankAccountEdit'
import type { Schemas } from '@/types'
import {
  useAddEmployeeBankAccount,
  useDeleteEmployeeBankAccount,
  useGetEmployeeBankAccounts,
  useGetEmployeePaymentMethod,
  useUpdateEmployeePaymentMethod,
} from '@/api/queries/employee'
import { ApiError } from '@/api/queries/helpers'

interface PaymentMethodProps extends CommonComponentInterface {
  employeeId: string
  defaultValues?: never
}

type PaymentMethodContextType = {
  bankAccounts: Schemas['Employee-Bank-Account'][]
  isPending: boolean
  watchedType: string
  mode: MODE
  handleAdd: () => void
  handleEdit: (uuid: string) => void
  handleCancel: () => void
  handleDelete: (uuid: string) => void
}

const [usePaymentMethod, PaymentMethodProvider] =
  createCompoundContext<PaymentMethodContextType>('PaymentMethodContext')
export { usePaymentMethod }

enum SPLIT_BY {
  percentage = 'Percentage',
  amount = 'Amount',
}

export function PaymentMethod(props: PaymentMethodProps & BaseComponentInterface) {
  return (
    <BaseComponent {...props}>
      <Root {...props}>{props.children}</Root>
    </BaseComponent>
  )
}
const CombinedSchema = v.variant('type', [
  v.object({
    type: v.literal('Direct Deposit'),
    ...BankAccountSchema.entries,
  }),
  v.object({ type: v.literal('Check') }),
])

type MODE = 'ADD' | 'LIST' | 'EDIT'
export const Root = ({ employeeId, className }: PaymentMethodProps) => {
  useI18n('Employee.PaymentMethod')
  const { setError, throwError, onEvent } = useBase()

  const { data: paymentMethod } = useGetEmployeePaymentMethod(employeeId)
  const { data: bankAccounts } = useGetEmployeeBankAccounts(employeeId)
  const paymentMethodMutation = useUpdateEmployeePaymentMethod(employeeId)
  const deleteBankAccountMutation = useDeleteEmployeeBankAccount(employeeId)
  const addBankAccountMutation = useAddEmployeeBankAccount(employeeId)

  const [currentBank, setCurrentBank] = useState<(typeof bankAccounts)[number] | null>(null)
  const [mode, setMode] = useState<MODE>(bankAccounts.length < 1 ? 'ADD' : 'LIST')

  const defaultValues = {
    type: paymentMethod.type,
    name: currentBank?.name ?? '',
    routing_number: currentBank?.routing_number ?? '',
    account_number: currentBank?.hidden_account_number ?? '',
    account_type: currentBank?.account_type ?? 'Checking',
  }
  const formMethods = useForm<PaymentTypeInputs & BankAccountInputs>({
    resolver: valibotResolver(CombinedSchema),
    defaultValues,
  })
  useEffect(() => {
    formMethods.reset(defaultValues)
  }, [currentBank])
  //TODO: reset mode upon switching to check
  const watchedType = useWatch<PaymentTypeInputs & BankAccountInputs>({
    name: 'type',
    control: formMethods.control,
  })

  const onSubmit: SubmitHandler<PaymentTypePayload & BankAccountInputs> = async data => {
    try {
      const { type, ...bankPayload } = data
      if (type === PAYMENT_METHODS.directDeposit && mode === 'ADD') {
        //TODO: add edit
        const bankAccountResponse = await addBankAccountMutation.mutateAsync({
          body: bankPayload,
        })
        onEvent(componentEvents.EMPLOYEE_BANK_ACCOUNT_CREATED, bankAccountResponse)
        setMode('LIST')
      } else {
        const body =
          type === PAYMENT_METHODS.check
            ? { version: paymentMethod.version as string }
            : {
                ...paymentMethod,
                version: paymentMethod.version as string,
                split_by: paymentMethod.split_by ?? SPLIT_BY.percentage,
                splits: paymentMethod.splits ?? [],
              }
        const paymentMethodResponse = await paymentMethodMutation.mutateAsync({
          body: { ...body, type: type },
        })
        onEvent(componentEvents.EMPLOYEE_PAYMENT_METHOD_UPDATED, paymentMethodResponse)
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err)
      } else throwError(err)
    }
  }

  const handleDelete = async (uuid: string) => {
    const data = await deleteBankAccountMutation.mutateAsync(uuid)
    onEvent(componentEvents.EMPLOYEE_BANK_ACCOUNT_DELETED, data)
  }
  const handleCancel = () => {
    onEvent(componentEvents.CANCEL)
  }
  const handleAdd = () => {
    setMode('ADD')
    setCurrentBank(null)
    formMethods.reset(defaultValues)
  }
  const handleEdit = (uuid: string) => {
    const bankToEdit = bankAccounts.find(bank => bank.uuid === uuid)
    if (bankToEdit) {
      setMode('EDIT')
      setCurrentBank(bankToEdit)
    }
  }
  return (
    <section className={className}>
      <PaymentMethodProvider
        value={{
          bankAccounts,
          isPending: deleteBankAccountMutation.isPending,
          watchedType,
          mode,
          handleEdit,
          handleCancel,
          handleAdd,
          handleDelete,
        }}
      >
        <FormProvider {...formMethods}>
          <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <Head />
            <PaymentTypeForm />
            <BankAccountsList />
            <BankAccountEdit />
            <Split />
            <Actions />
          </Form>
        </FormProvider>
      </PaymentMethodProvider>
    </section>
  )
}

export const PaymentMethodContextual = () => {
  const { employeeId, onEvent } = useFlow<EmployeeOnboardingContextInterface>()
  const { t } = useTranslation('common')

  if (!employeeId) {
    throw new Error(
      t('errors.missingParamsOrContext', {
        component: 'PaymentMethod',
        param: 'employeeId',
        provider: 'FlowProvider',
      }),
    )
  }
  return <PaymentMethod employeeId={employeeId} onEvent={onEvent} />
}
