import Dexie, { Table } from "dexie";
import { scheme } from "./scheme";

export type Events = keyof typeof scheme;

export interface AddedBlackList {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  block_timestamp: Date;
}
export interface RemovedBlackList {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  block_timestamp: Date;
}
export interface RegisterUser {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  referrer: string;
  value: string;
  block_timestamp: Date;
}
export interface Migration {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  referrer: string;
  value: string;
  block_timestamp: Date;
}
export interface AllUser {
  id: string;
  className: string;
  user: string;
  referrer: string;
  value: number;
  withdraw: number;
}
export interface UpdateUser {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  value: string;
  block_timestamp: Date;
}
export interface WithdrawInterestNew {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  hourly: string;
  referrals: string;
  block_timestamp: Date;
}
export interface WithdrawInterestOld {
  id: string;
  className: string;
  transaction_hash: string;
  user: string;
  hourly: string;
  referrals: string;
  block_timestamp: Date;
}
export class DBScheme extends Dexie {
  AddedBlackList!: Table<AddedBlackList>;
  RemovedBlackList!: Table<RemovedBlackList>;
  RegisterUser!: Table<RegisterUser>;
  Migration!: Table<Migration>;
  AllUser!: Table<AllUser>;
  UpdateUser!: Table<UpdateUser>;
  WithdrawInterestNew!: Table<WithdrawInterestNew>;
  WithdrawInterestOld!: Table<WithdrawInterestOld>;
}

const stores = Object.entries(scheme).reduce(
  (all, [key, values]) => ({
    ...all,
    [key]: "id,className," + values.join(","),
  }),
  {}
);

export class InvestmentDexie extends DBScheme {
  constructor() {
    super("InvestmentDB");
    this.version(1).stores(stores);
  }
}

export const db = new InvestmentDexie();
