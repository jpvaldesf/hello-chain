// balance-kit.js: the same question, asked through the official
import { createSolanaRpc, address } from "@solana/kit";
const rpc = createSolanaRpc(process.env.RPC_URL ?? "https://api.devnet.solana.com");
const wallet =address(process.env.WALLET_ADDRESS); // throws if the address is
const { value: lamports } = await rpc.getBalance(wallet).send()
console.log(`${wallet} holds ${Number(lamports) / 1e9} SOL (${lamports} lamports)`);