import { useCallback, useRef, useState } from "react";
import UserData, { address, Users } from "../contracts";
import { investMaker, randomAddress, throttle, userInit } from "../helpers";

interface UserState {
  users: Users;
  userLength: number;
  total: number;
}

const useContract = () => {
  const { current: contract } = useRef(
    new UserData("0x0", userInit("0xstart"))
  );
  const [{ users, userLength, total }, setUsers] = useState<UserState>({
    users: { ...contract.users },
    total: contract.total,
    userLength: Object.keys(contract.users).length,
  });

  const updateStates = useCallback(() => {
    console.log("UpdateStates");
    setUsers({
      users: { ...contract.users },
      total: contract.total,
      userLength: Object.keys(contract.users).length,
    });
  }, [contract]);

  const findTree = useCallback(
    (user: string) => {
      console.log("UpdateStates");
      return contract.findLegsAmount(user);
    },
    [contract]
  );

  const reg = useCallback(
    (user: string, referrer: string) => {
      console.log("Registering: ", user, referrer);
      contract.users[user] = userInit();
      contract.register(user, referrer, investMaker());

      throttle(updateStates);
    },
    [contract, updateStates]
  );

  const findAddress = useCallback(
    (id = userLength) => address(id),
    [userLength]
  );

  const findRandomRef = useCallback(
    async (id = userLength - 1): Promise<string> => {
      const ref = randomAddress(id);
      if (contract.isFree(ref)) {
        return ref;
      } else {
        return await findRandomRef(id);
      }
    },
    [contract, userLength]
  );

  const register = useCallback(
    (ref: number) => {
      const user = findAddress();
      const referrer = address(ref);
      reg(user, referrer);
    },
    [reg, findAddress]
  );

  const random = useCallback(async () => {
    const user = findAddress();
    const referrer = await findRandomRef();
    console.log("random: ", user, referrer);
    reg(user, referrer);
  }, [findRandomRef, reg, findAddress]);

  const loop = useCallback(
    async (num = 300) => {
      for (let i = userLength; i < userLength + num; i++) {
        const user = address(i);
        const referrer = await findRandomRef(i - 1);
        reg(user, referrer);
      }
    },
    [findRandomRef, reg, userLength]
  );

  return {
    contract,
    register,
    loop,
    random,
    findTree,
    total,
    users,
    userLength,
  };
};

export default useContract;
