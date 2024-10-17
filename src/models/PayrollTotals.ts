interface PayrollTotalsConstructor {
  grossPay?: number
  employerTaxes?: number
  reimbursements?: number
  benefits?: number
  companyDebit?: number
}

export interface PayrollTotalsAPIData {
  gross_pay: string
  employer_taxes: string
  reimbursements: string
  benefits: string
}

class PayrollTotals {
  grossPay?: number
  employerTaxes?: number
  reimbursements?: number
  companyDebit?: number
  benefits?: number

  constructor({
    grossPay,
    employerTaxes,
    reimbursements,
    benefits,
    companyDebit,
  }: PayrollTotalsConstructor) {
    this.grossPay = grossPay
    this.employerTaxes = employerTaxes
    this.reimbursements = reimbursements
    this.benefits = benefits
    this.companyDebit = companyDebit
  }

  static fromPayrollTotalsData(data: PayrollTotalsAPIData) {
    return new this({
      grossPay: Number(data.gross_pay),
      employerTaxes: Number(data.employer_taxes),
      reimbursements: Number(data.reimbursements),
      benefits: Number(data.benefits),
    })
  }

  get payrollTotal() {
    const { grossPay, employerTaxes, reimbursements, benefits } = this

    if (!(grossPay && employerTaxes && reimbursements && benefits))
      throw Error('Missing data to calculate payrollTotal')

    return grossPay + employerTaxes + reimbursements + benefits
  }
}

export { PayrollTotals }
