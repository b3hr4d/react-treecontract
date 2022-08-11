export const emit = {
  Registered: (user: string, ref: string, amount: number) => {
    console.info(`Registered( ${user}, ${ref}, ${amount} )`);
  },
  ReferralReceived: (user: string, from: string, amount: number) => {
    console.info(`ReferralReceived( ${user}, ${from},${amount} )`);
  },
};

export function Require(condition: boolean, msg: string) {
  if (!condition) throw new Error(msg);
}

export const address = (id: number | string = "") => `0x${id}`;
