import { RawNode } from "components/TreeCanvas/Types";
import useUserData from "context/hooks/useUserData";
import { address } from "contracts";
import useUserContract from "hooks/useUserContract";
import { useMemo } from "react";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

const useUserTree = () => {
  const { findTree } = useUserContract();
  const [{ user, users, ...rest }, useFunction] = useUserData();

  const data = useMemo(() => {
    const findTrees = (name: string) => {
      let obj: RawNode = {
        name,
      };
      if (address() === name) return obj;
      const { left, right, invest, refAmount } = users[name];
      obj = {
        name,
        invest,
        attributes: {
          refAmount,
          tree: findTree(name),
        },
      };

      if (address() !== left) obj.children = [findTrees(left)];

      if (address() !== right) obj.children?.push(findTrees(right));
      return obj;
    };
    return findTrees(user) as RawNodeDatum;
  }, [user, users, findTree]);

  return { data, ...rest, ...useFunction };
};

export default useUserTree;
