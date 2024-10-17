import { components, operations } from './generated/schema'

export type Schemas = components['schemas']
export type Operations = operations
export type DeductionType = components['schemas']['Garnishment']
export type EmployeeType = components['schemas']['Employee']
export type AddressType = components['schemas']['Address']
export type PaymentMethodType = components['schemas']['Employee-Payment-Method']
export type CompanyFederalTaxDetailsType = components['schemas']['Federal-Tax-Details']
export type CompanyIndustryType = components['schemas']['Industry']
export type EmployeeFederalTaxType = components['schemas']['Employee-Federal-Tax']
