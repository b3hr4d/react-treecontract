import { CHAINS } from "./chains";

interface ChainSelectProps {
  chainId?: number;
  switchChain?: (chainId: number) => void | undefined;
  displayDefault: boolean;
  chainIds: number[];
}

const ChainSelect: React.FC<ChainSelectProps> = ({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}) => {
  return (
    <select
      value={chainId}
      onChange={(event) => {
        switchChain?.(Number(event.target.value));
      }}
      disabled={switchChain === undefined}
    >
      {displayDefault ? <option value={-1}>Default Chain</option> : null}
      {chainIds.map((chainId) => (
        <option key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </option>
      ))}
    </select>
  );
};

export default ChainSelect;
