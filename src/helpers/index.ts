import { address, Invest, UserStruct } from "../contract";

export const randomAddress = (id: number | string) => `0x${numBeetween(+id)}`;

export const randomValue = (multi = 10000) => Math.floor(Math.random() * multi);

export const investMaker = () =>
  new Invest(randomValue(), randomValue(), randomValue(), 10000);

export const numBeetween = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const userInit = (ref?: string) => new UserStruct(address(ref));

let timer: NodeJS.Timeout;

export const throttle = (func: () => void, wait = 300) => {
  clearTimeout(timer);
  timer = setTimeout(() => func(), wait);
};
