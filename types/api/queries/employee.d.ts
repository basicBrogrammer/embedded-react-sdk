import { useMutation } from '@tanstack/react-query'
import { OnError } from '../typeHelpers'
export declare function useGetEmployeeByIdQuery(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    first_name: string
    middle_initial?: string | null
    last_name: string
    email?: string | null
    readonly company_uuid?: string
    readonly manager_uuid?: string
    readonly version?: string
    readonly department?: string | null
    readonly terminated?: boolean
    two_percent_shareholder?: boolean
    readonly onboarded?: boolean
    readonly onboarding_status?:
      | 'onboarding_completed'
      | 'admin_onboarding_incomplete'
      | 'self_onboarding_pending_invite'
      | 'self_onboarding_invited'
      | 'self_onboarding_invited_started'
      | 'self_onboarding_invited_overdue'
      | 'self_onboarding_completed_by_employee'
      | 'self_onboarding_awaiting_admin_review'
    jobs?: import('../../generated/schema').components['schemas']['Job'][]
    eligible_paid_time_off?: import('../../generated/schema').components['schemas']['Paid-Time-Off'][]
    terminations?: import('../../generated/schema').components['schemas']['Termination'][]
    garnishments?: import('../../generated/schema').components['schemas']['Garnishment'][]
    custom_fields?: import('../../generated/schema').components['schemas']['Employee-Custom-Field'][]
    readonly date_of_birth?: string | null
    has_ssn?: boolean
    ssn?: string
    phone?: string
    preferred_first_name?: string
    payment_method: 'Direct Deposit' | 'Check'
    work_email?: string | null
    readonly current_employment_status?:
      | 'full_time'
      | 'part_time_under_twenty_hours'
      | 'part_time_twenty_plus_hours'
      | 'variable'
      | 'seasonal'
  },
  Error
>
export declare function useUpdateEmployee(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetEmployeeHomeAddresses(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  ({
    version?: string
  } & {
    street_1?: string
    street_2?: string | null
    city?: string
    state?: string
    zip?: string
    country: string
    readonly active?: boolean
  } & {
    uuid?: string
    employee_uuid?: string
    effective_date?: string
    courtesy_withholding?: boolean
  })[],
  Error
>
export declare function useGetEmployeeHomeAddress(
  home_address_uuid: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    effective_date?: string
    readonly active?: boolean
    location_uuid?: string
    employee_uuid?: string
    version?: string
    readonly street_1?: string
    readonly street_2?: string | null
    readonly city?: string
    readonly state?: string
    readonly zip?: string
    readonly country: string
  }[],
  Error
>
export declare function useUpdateEmployeeHomeAddress(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useAddEmployeeHomeAddress(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useDeleteEmployeeHomeAddress(
  employee_id: string,
  opts: {
    onError: OnError
  } & Omit<Parameters<typeof useMutation>[0], 'mutationFn' | 'onError'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetEmployeeWorkAddresses(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    effective_date?: string
    readonly active?: boolean
    location_uuid?: string
    employee_uuid?: string
    version?: string
    readonly street_1?: string
    readonly street_2?: string | null
    readonly city?: string
    readonly state?: string
    readonly zip?: string
    readonly country: string
  }[],
  Error
>
export declare function useGetEmployeeWorkAddress(
  work_address_uuid: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    effective_date?: string
    readonly active?: boolean
    location_uuid?: string
    employee_uuid?: string
    version?: string
    readonly street_1?: string
    readonly street_2?: string | null
    readonly city?: string
    readonly state?: string
    readonly zip?: string
    readonly country: string
  }[],
  Error
>
export declare function useUpdateEmployeeWorkAddress(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useAddEmployeeWorkAddress(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useDeleteEmployeeWorkAddress(
  employee_id: string,
  opts: {
    onError: OnError
  } & Omit<Parameters<typeof useMutation>[0], 'mutationFn' | 'onError'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetEmployeeDeductions(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    version?: string
    readonly employee_uuid?: number
    active: boolean
    amount?: string
    description?: string
    court_ordered?: boolean
    times: number | null
    recurring: boolean
    annual_maximum: string | null
    pay_period_maximum: string | null
    deduct_as_percentage: boolean
  }[],
  Error
>
export declare function useGetDeduction(
  garnishment_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    version?: string
    readonly employee_uuid?: number
    active: boolean
    amount?: string
    description?: string
    court_ordered?: boolean
    times: number | null
    recurring: boolean
    annual_maximum: string | null
    pay_period_maximum: string | null
    deduct_as_percentage: boolean
  },
  Error
>
export declare function useUpdateDeduction(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useAddEmployeeDeduction(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetEmployeeBankAccounts(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    uuid: string
    employee_uuid?: string
    account_type?: 'Checking' | 'Savings'
    name?: string
    routing_number?: string
    hidden_account_number?: string
  }[],
  Error
>
export declare function useAddEmployeeBankAccount(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useDeleteEmployeeBankAccount(
  employee_id: string,
  opts: {
    onError: OnError
  } & Omit<Parameters<typeof useMutation>[0], 'mutationFn' | 'onError'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetEmployeePaymentMethod(
  employee_id: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    version?: string
    type?: 'Direct Deposit' | 'Check'
    split_by?: 'Amount' | 'Percentage'
    splits?:
      | import('../../generated/schema').components['schemas']['Payment-Method-Bank-Account'][]
      | null
  },
  Error
>
export declare function useUpdateEmployeePaymentMethod(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useCreateEmployeeCompensation(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
