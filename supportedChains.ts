/*
 * The supported chains.
 * By default, there are only two chains here:
 *
 * - mudFoundry, the chain running on anvil that pnpm dev
 *   starts by default. It is similar to the viem anvil chain
 *   (see https://viem.sh/docs/clients/test.html), but with the
 *   basefee set to zero to avoid transaction fees.
 * - latticeTestnet, our public test network.
 *
 */
import { MUDChain, latticeTestnet, mudFoundry } from "@latticexyz/common/chains";
import { sepolia } from "viem/chains";
import { scrollTestnet } from "viem/chains";
import { scrollSepolia } from "viem/chains";
import { polygonMumbai } from "viem/chains";
import { polygon } from "viem/chains";
import { mantleTestnet } from "viem/chains";


sepolia.rpcUrls.default.http = [ 'https://sepolia.infura.io/v3/ae4316a671f04b70a12a9a1fa93341fd' ]
sepolia.rpcUrls.default.webSocket = [ 'wss://sepolia.infura.io/ws/v3/ae4316a671f04b70a12a9a1fa93341fd' ]

scrollSepolia.rpcUrls.default.http = [ 'https://magical-intensive-feather.scroll-testnet.quiknode.pro/43eeb35f465fa091c60b4f5c291af08ede96fac1/' ]
scrollSepolia.rpcUrls.default.webSocket = [ 'wss://magical-intensive-feather.scroll-testnet.quiknode.pro/43eeb35f465fa091c60b4f5c291af08ede96fac1/' ]

/*
 * See https://mud.dev/tutorials/minimal/deploy#run-the-user-interface
 * for instructions on how to add networks.
 */
export const supportedChains: MUDChain[] = [mudFoundry, latticeTestnet, sepolia, scrollTestnet, scrollSepolia, polygonMumbai, polygon, scrollTestnet, mantleTestnet];
VITE_CHAIN_ID=534351;
