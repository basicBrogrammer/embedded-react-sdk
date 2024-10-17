interface PayPeriodConstructor {
  payScheduleUuid: string
  startDate: Date
  endDate: Date
}

export interface PayPeriodAPIData {
  pay_schedule_uuid: string
  start_date: string
  end_date: string
}

class PayPeriod {
  payScheduleUuid: string
  startDate: Date
  endDate: Date

  constructor({ payScheduleUuid, startDate, endDate }: PayPeriodConstructor) {
    this.payScheduleUuid = payScheduleUuid
    this.startDate = startDate
    this.endDate = endDate
  }

  static fromPayPeriodData(data: PayPeriodAPIData) {
    return new this({
      payScheduleUuid: data.pay_schedule_uuid,
      startDate: new Date(data.start_date),
      endDate: new Date(data.end_date),
    })
  }
}

export { PayPeriod }
