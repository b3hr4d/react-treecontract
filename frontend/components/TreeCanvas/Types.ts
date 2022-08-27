import { Invest } from "contracts";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/common";

interface NodeAttributes {
  refAmount: number;
  tree: [number, number];
}

export interface RawNode {
  name: string;
  invest?: Invest[];
  attributes?: NodeAttributes;
  children?: RawNode[];
}

export interface TreeNode extends RawNode {
  children?: TreeNode[];
  __rd3t: {
    id: string;
    depth: number;
    collapsed: boolean;
  };
}

export interface CustomNodeProps
  extends Omit<CustomNodeElementProps, "nodeDatum"> {
  nodeDatum: TreeNode;
}
