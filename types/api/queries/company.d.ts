import { useMutation } from '@tanstack/react-query'
import { OnError } from '../typeHelpers'
export declare function useGetEmployeesByCompanyQuery(
  company_id: string,
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
  }[],
  Error
>
export declare function useAddEmployee(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useDeleteEmployee(
  companyId: string,
  opts: {
    onError: OnError
  } & Omit<Parameters<typeof useMutation>[0], 'mutationFn' | 'onError'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useGetCompanyLocationsQuery(
  company_uuid: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    version?: string
    readonly company_uuid?: string
    phone_number?: string
    street_1?: string
    street_2?: string | null
    city?: string
    state?: string
    zip?: string
    country: string
    readonly active?: boolean
    mailing_address?: boolean | null
    filing_address?: boolean | null
    created_at?: string
    updated_at?: string
  }[],
  Error
>
export declare function useGetCompanyLocation(
  location_uuid: string,
): import('@tanstack/react-query').UseSuspenseQueryResult<
  {
    readonly uuid: string
    version?: string
    readonly company_uuid?: string
    phone_number?: string
    street_1?: string
    street_2?: string | null
    city?: string
    state?: string
    zip?: string
    country: string
    readonly active?: boolean
    mailing_address?: boolean | null
    filing_address?: boolean | null
    created_at?: string
    updated_at?: string
  },
  Error
>
export declare function useUpdateCompanyLocation(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useCreateCompanyLocation(
  opts: Omit<Parameters<typeof useMutation>[0], 'mutationFn'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
export declare function useCreateCompanyBankAccount(
  companyId: string,
  opts: {
    onError: OnError
  } & Omit<Parameters<typeof useMutation>[0], 'mutationFn' | 'onError'>,
): import('@tanstack/react-query').UseMutationResult<unknown, unknown, unknown, unknown>
