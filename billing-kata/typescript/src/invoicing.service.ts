import { inject, injectable } from 'tsyringe'

type CustomerId = string

interface TimePeriod {
  start: Date,
  end: Date
}

type Amount = number

enum Seniority {
  Senior = 'Sennior',
  Medior = 'Medior',
  Junior = 'Junior'
}

interface Entry {
  hours: Date,
  seniotrity: Seniority
}

interface Timesheets {
  getEntriesForPeriod: (custommerId: CustomerId, timePeriod: TimePeriod) => Entry[]
}

interface Personel {
  seniority: Seniority,
  rate: Amount
}

interface Contract {
  start: Date,
  end: Date,
  personel: Personel[],
  fixedFeePercentage: Amount
}

interface Contracts {
  getContractsByPeriod: (custommerId: CustomerId, timePeriod: TimePeriod) => Contract[]
}

@injectable()
export class InvoicingService {
  constructor (@inject('Contracts') private contracts: Contracts,
               @inject('Timesheets') private timesheets:Timesheets) { }

  calculateInvoiceTotal (customerId: CustomerId, timePeriod: TimePeriod): Amount {
    const contracts = this.contracts.getContractsByPeriod(customerId, timePeriod)
    const entries = this.timesheets.getEntriesForPeriod(customerId, timePeriod)

    throw new Error('Method not implemented')
  }
}
