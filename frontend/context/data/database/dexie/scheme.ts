export const scheme = {
  AddedBlackList: ['transaction_hash', 'user', 'block_timestamp'],
  RemovedBlackList: ['transaction_hash', 'user', 'block_timestamp'],
  RegisterUser: [
    'transaction_hash',
    'user',
    'referrer',
    'value',
    'block_timestamp',
  ],
  Migration: [
    'transaction_hash',
    'user',
    'referrer',
    'value',
    'block_timestamp',
  ],
  AllUser: [
    'user',
    'referrer',
    'value',
    'withdraw',
    'blocked',
    'block_timestamp',
  ],
  UpdateUser: ['transaction_hash', 'user', 'value', 'block_timestamp'],
  WithdrawInterestNew: [
    'transaction_hash',
    'user',
    'hourly',
    'referrals',
    'block_timestamp',
  ],
  WithdrawInterestOld: [
    'transaction_hash',
    'user',
    'hourly',
    'referrals',
    'block_timestamp',
  ],
}

export const withScheme = (data: any[]) => {
  const result = data.map((item) =>
    scheme[item.className].reduce(
      (all, sch) => ({ ...all, [sch]: item.get(sch) }),
      {
        className: item.className.split(/(?=[A-Z])/)[0],
        id: item.id,
      },
    ),
  )
  return result
}
