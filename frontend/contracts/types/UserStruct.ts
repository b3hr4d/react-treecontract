export type Address = string

export class Invest {
  amount: number
  period: number
  reward: number
  startTime: number

  constructor([amount, period, reward, startTime]: [
    number,
    number,
    number,
    number,
  ]) {
    this.amount = amount
    this.period = period
    this.reward = reward
    this.startTime = startTime
  }
}

export class UserStruct {
  ref: Address = '0x'
  left: Address = '0x'
  right: Address = '0x'
  refAmount: number = 0
  invest: Invest[] = []

  constructor(ref?: Address) {
    if (ref) this.ref = ref
  }
}

export type Users = {
  [key: Address]: UserStruct
}
