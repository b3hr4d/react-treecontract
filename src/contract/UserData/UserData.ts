import { address, emit, Require } from "../types";
import { Address, Invest, Users, UserStruct } from "../types/UserStruct";

export default class UserData {
  users: Users = {};
  total: number = 0;

  constructor(_msgSender: Address, userData: UserStruct) {
    this.users[_msgSender] = userData;
  }

  public register(_msgSender: Address, ref: Address, invest: Invest) {
    Require(this.notExist(_msgSender), "User Exist");
    Require(this.exist(ref), "Ref Not Exist");

    const amount = invest.amount;
    this.updateReferrer(_msgSender, ref, amount);

    this.users[_msgSender].ref = ref;
    this.users[_msgSender].invest.push(invest);

    this.total = this.total + amount;

    emit.Registered(_msgSender, ref, amount);
  }

  private updateReferrer(_msgSender: Address, ref: Address, amount: number) {
    Require(this.isFree(ref), "Right and Left is Full");

    if (this.users[ref].left === address()) this.users[ref].left = _msgSender;
    else this.users[ref].right = _msgSender;

    const reward = this.refPercent(amount);

    this.users[ref].refAmount = this.users[ref].refAmount + reward;

    emit.ReferralReceived(ref, _msgSender, reward);
  }

  public refPercent(amount: number): number {
    return Math.floor((amount * 10) / 100);
  }

  public findAmount(user: Address) {
    if (this.notExist(user)) return 0;

    const [left, right] = this.findLegsAmount(user);

    return this.users[user].refAmount + left + right;
  }

  public findLegsAmount(user: Address): [number, number] {
    return [
      this.findAmount(this.users[user].left),
      this.findAmount(this.users[user].right),
    ];
  }

  public isFree(user: Address) {
    return (
      this.users[user].right === address() ||
      this.users[user].left === address()
    );
  }

  public exist(user: Address): boolean {
    if (!this.users[user]) return false;
    return this.users[user].ref !== address();
  }

  public notExist(user: Address): boolean {
    if (!this.users[user]) return true;
    return this.users[user].ref === address();
  }
}
