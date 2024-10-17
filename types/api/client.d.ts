import type { BodyParams } from './typeHelpers'
interface APIConfig {
  baseUrl: string
  headers?: Record<string, string | number>
}
declare class GustoClient {
  config: APIConfig
  private client
  constructor(config?: APIConfig)
  getTokenInfo(): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path?: never
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: {
            headers: {
              [name: string]: unknown
            }
            content: {
              'application/json': {
                scope: string
                resource: {
                  type: string
                  uuid: string
                }
              }
            }
          }
        }
      },
      {
        params: {}
      },
      `${string}/${string}`
    >
  >
  getEmployee(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: {
            include?: 'all_compensations' | 'custom_fields'
          }
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  createEmployee(
    company_id: string,
    body: BodyParams<'/v1/companies/{company_id}/employees', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            company_id: import('../generated/schema.js').components['parameters']['company_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              first_name: string
              middle_initial?: string
              last_name: string
              date_of_birth?: string
              email?: string
              ssn?: string
              self_onboarding?: boolean
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Employee-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            company_id: string
          }
        }
        body: {
          first_name: string
          middle_initial?: string
          last_name: string
          date_of_birth?: string
          email?: string
          ssn?: string
          self_onboarding?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  getCompanyEmployees(company_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: {
            terminated?: boolean
            include?: 'all_compensations' | 'custom_fields'
            page?: import('../generated/schema.js').components['parameters']['pageParam']
            per?: import('../generated/schema.js').components['parameters']['perParam']
            search_term?: import('../generated/schema.js').components['parameters']['search_term']
          }
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            company_id: import('../generated/schema.js').components['parameters']['company_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': Record<string, never>
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            company_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  updateEmployee(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              version: string
              first_name?: string
              middle_initial?: string
              last_name?: string
              date_of_birth?: string
              email?: string
              ssn?: string
              two_percent_shareholder?: boolean
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          version: string
          first_name?: string
          middle_initial?: string
          last_name?: string
          date_of_birth?: string
          email?: string
          ssn?: string
          two_percent_shareholder?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  deleteEmployee(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          204: {
            headers: {
              [name: string]: unknown
            }
            content?: never
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeHomeAddress(home_address_uuid: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            home_address_uuid: import('../generated/schema.js').components['parameters']['home_address_uuid']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Address-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            home_address_uuid: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeHomeAddresses(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Address-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  createEmployeeHomeAddress(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}/home_addresses', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              street_1?: string
              street_2?: string | null
              city?: string
              state?: string
              zip?: string
              effective_date?: string
              courtesy_withholding?: boolean
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Address-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          street_1?: string
          street_2?: string | null
          city?: string
          state?: string
          zip?: string
          effective_date?: string
          courtesy_withholding?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  deleteEmployeeHomeAddress(home_address_uuid: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            home_address_uuid: import('../generated/schema.js').components['parameters']['home_address_uuid']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          204: {
            headers: {
              [name: string]: unknown
            }
            content?: never
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            home_address_uuid: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  updateEmployeeHomeAddress(
    home_address_uuid: string,
    body: BodyParams<'/v1/home_addresses/{home_address_uuid}', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            home_address_uuid: import('../generated/schema.js').components['parameters']['home_address_uuid']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              version: string
              street_1?: string
              street_2?: string | null
              city?: string
              state?: string
              zip?: string
              effective_date?: string
              courtesy_withholding?: boolean
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Address-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            home_address_uuid: string
          }
        }
        body: {
          version: string
          street_1?: string
          street_2?: string | null
          city?: string
          state?: string
          zip?: string
          effective_date?: string
          courtesy_withholding?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  createCompanyLocation(
    company_id: string,
    body: BodyParams<'/v1/companies/{company_id}/locations', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            company_id: import('../generated/schema.js').components['parameters']['company_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              phone_number: string
              street_1: string
              street_2?: string | null
              city: string
              state: string
              zip: string
              country: string
              mailing_address?: boolean
              filing_address?: boolean
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Location-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            company_id: string
          }
        }
        body: {
          phone_number: string
          street_1: string
          street_2?: string | null
          city: string
          state: string
          zip: string
          country: string
          mailing_address?: boolean
          filing_address?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  getCompanyLocations(company_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: {
            page?: import('../generated/schema.js').components['parameters']['pageParam']
            per?: import('../generated/schema.js').components['parameters']['perParam']
          }
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            company_id: import('../generated/schema.js').components['parameters']['company_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Location-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            company_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getCompanyLocation(location_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            location_id: import('../generated/schema.js').components['parameters']['location_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Location-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            location_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  updateCompanyLocation(
    location_id: string,
    body: BodyParams<'/v1/locations/{location_id}', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            location_id: import('../generated/schema.js').components['parameters']['location_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': import('../generated/schema.js').components['schemas']['Versionable-Required'] & {
              phone_number?: string
              street_1?: string
              street_2?: string | null
              city?: string
              state?: string
              zip?: string
              country?: string
              mailing_address?: boolean
              filing_address?: boolean
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Location-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            location_id: string
          }
        }
        body: {
          version: string
        } & {
          phone_number?: string
          street_1?: string
          street_2?: string | null
          city?: string
          state?: string
          zip?: string
          country?: string
          mailing_address?: boolean
          filing_address?: boolean
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeWorkAddress(work_address_uuid: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            work_address_uuid: import('../generated/schema.js').components['parameters']['work_address_uuid']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: {
            headers: {
              [name: string]: unknown
            }
            content: {
              'application/json': import('../generated/schema.js').components['schemas']['Employee-Work-Address']
            }
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            work_address_uuid: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeWorkAddresses(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Work-Address-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  createEmployeeWorkAddress(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}/work_addresses', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              location_uuid?: string
              effective_date?: string
            }
          }
        }
        responses: {
          201: {
            headers: {
              [name: string]: unknown
            }
            content: {
              'application/json': import('../generated/schema.js').components['schemas']['Employee-Work-Address']
            }
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          location_uuid?: string
          effective_date?: string
        }
      },
      `${string}/${string}`
    >
  >
  deleteEmployeeWorkAddress(work_address_uuid: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            work_address_uuid: import('../generated/schema.js').components['parameters']['work_address_uuid']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          204: {
            headers: {
              [name: string]: unknown
            }
            content?: never
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            work_address_uuid: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  updateEmployeeWorkAddress(
    work_address_uuid: string,
    body: BodyParams<'/v1/work_addresses/{work_address_uuid}', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            work_address_uuid: import('../generated/schema.js').components['parameters']['work_address_uuid']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              location_uuid?: string
              effective_date?: string
              version?: string
            }
          }
        }
        responses: {
          200: {
            headers: {
              [name: string]: unknown
            }
            content: {
              'application/json': import('../generated/schema.js').components['schemas']['Employee-Work-Address']
            }
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            work_address_uuid: string
          }
        }
        body: {
          location_uuid?: string
          effective_date?: string
          version?: string
        }
      },
      `${string}/${string}`
    >
  >
  createCompanyBankAccount(
    company_id: string,
    body: BodyParams<'/v1/companies/{company_id}/bank_accounts', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            company_id: import('../generated/schema.js').components['parameters']['company_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              routing_number?: string
              account_number?: string
              account_type?: 'Checking' | 'Savings'
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Company-Bank-Account-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            company_id: string
          }
        }
        body: {
          routing_number?: string
          account_number?: string
          account_type?: 'Checking' | 'Savings'
        }
      },
      `${string}/${string}`
    >
  >
  getDeduction(garnishment_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            garnishment_id: import('../generated/schema.js').components['parameters']['garnishment_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Garnishment-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            garnishment_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeDeductions(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: {
            page?: import('../generated/schema.js').components['parameters']['pageParam']
            per?: import('../generated/schema.js').components['parameters']['perParam']
          }
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Garnishment-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  createEmployeeDeduction(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}/garnishments', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              active: boolean
              amount: string
              description: string
              court_ordered: boolean
              times: number | null
              recurring: boolean
              annual_maximum: string | null
              pay_period_maximum: string | null
              deduct_as_percentage: boolean
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Garnishment-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          active: boolean
          amount: string
          description: string
          court_ordered: boolean
          times: number | null
          recurring: boolean
          annual_maximum: string | null
          pay_period_maximum: string | null
          deduct_as_percentage: boolean
        }
      },
      `${string}/${string}`
    >
  >
  updateDeduction(
    garnishment_id: string,
    body: BodyParams<'/v1/garnishments/{garnishment_id}', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            garnishment_id: import('../generated/schema.js').components['parameters']['garnishment_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              active: boolean
              amount?: string
              description?: string
              court_ordered?: boolean
              times: number | null
              recurring: boolean
              annual_maximum: string | null
              pay_period_maximum: string | null
              deduct_as_percentage: boolean
              version: string
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Garnishment-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            garnishment_id: string
          }
        }
        body: {
          active: boolean
          amount?: string
          description?: string
          court_ordered?: boolean
          times: number | null
          recurring: boolean
          annual_maximum: string | null
          pay_period_maximum: string | null
          deduct_as_percentage: boolean
          version: string
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeeBankAccounts(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: {
            page?: import('../generated/schema.js').components['parameters']['pageParam']
            per?: import('../generated/schema.js').components['parameters']['perParam']
          }
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': Record<string, never>
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Bank-Account-List']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  createEmployeeBankAccount(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}/bank_accounts', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              name: string
              routing_number: string
              account_number: string
              account_type: 'Checking' | 'Savings'
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Employee-Bank-Account-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          name: string
          routing_number: string
          account_number: string
          account_type: 'Checking' | 'Savings'
        }
      },
      `${string}/${string}`
    >
  >
  deleteEmployeeBankAccount(
    employee_id: string,
    bank_account_uuid: string,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
            bank_account_uuid: import('../generated/schema.js').components['parameters']['bank_account_uuid']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          204: {
            headers: {
              [name: string]: unknown
            }
            content?: never
          }
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
            bank_account_uuid: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  getEmployeePaymentMethod(employee_id: string): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: never
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Payment-Method-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
      },
      `${string}/${string}`
    >
  >
  updateEmployeePaymentMethod(
    employee_id: string,
    body: BodyParams<'/v1/employees/{employee_id}/payment_method', 'PUT'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            employee_id: import('../generated/schema.js').components['parameters']['employee_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              version: string
              type: 'Direct Deposit' | 'Check'
              split_by?: 'Amount' | 'Percentage'
              splits?: {
                uuid?: string
                name?: string
                priority?: number
                split_amount?: number | null
              }[]
            }
          }
        }
        responses: {
          200: import('../generated/schema.js').components['responses']['Employee-Payment-Method-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            employee_id: string
          }
        }
        body: {
          version: string
          type: 'Direct Deposit' | 'Check'
          split_by?: 'Amount' | 'Percentage'
          splits?: {
            uuid?: string
            name?: string
            priority?: number
            split_amount?: number | null
          }[]
        }
      },
      `${string}/${string}`
    >
  >
  createEmployeeCompensation(
    job_id: string,
    body: BodyParams<'/v1/jobs/{job_id}/compensations', 'POST'>,
  ): Promise<
    import('openapi-fetch').FetchResponse<
      {
        parameters: {
          query?: never
          header?: {
            'X-Gusto-API-Version'?: import('../generated/schema.js').components['parameters']['VersionHeader']
          }
          path: {
            job_id: import('../generated/schema.js').components['parameters']['job_id']
          }
          cookie?: never
        }
        requestBody?: {
          content: {
            'application/json': {
              rate?: string
              payment_unit: 'Hour' | 'Week' | 'Month' | 'Year' | 'Paycheck'
              effective_date?: string
              flsa_status: import('../generated/schema.js').components['schemas']['Flsa-Status-Type']
              adjust_for_minimum_wage?: boolean
              minimum_wages?: {
                uuid?: string
              }[]
            }
          }
        }
        responses: {
          201: import('../generated/schema.js').components['responses']['Compensation-Object']
          404: import('../generated/schema.js').components['responses']['Not-Found-Error-Object']
          422: import('../generated/schema.js').components['responses']['Unprocessable-Entity-Error-Object']
        }
      },
      {
        params: {
          path: {
            job_id: string
          }
        }
        body: {
          rate?: string
          payment_unit: 'Hour' | 'Week' | 'Month' | 'Year' | 'Paycheck'
          effective_date?: string
          flsa_status: import('../generated/schema.js').components['schemas']['Flsa-Status-Type']
          adjust_for_minimum_wage?: boolean
          minimum_wages?: {
            uuid?: string
          }[]
        }
      },
      `${string}/${string}`
    >
  >
}
export type { APIConfig }
export { GustoClient }
