const RPC_URL= process.env.RPC_URL || "https://api.devnet.solana.com";
const address = process.env.WALLET_ADDRESS || "tT5yBQ3kA5NU7WnjcG98jjmaEGfoC2mn9oN7Kv8zE6M";

if(!address){
    console.error("Missing WALLET ADDRESS");
    process.exit(1);
}

const response = await fetch(RPC_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    jsonrpc: "2.0", id: 1, method: "getBalance", params: [address],
  }),
});

const data = await response.json();
if (data.error) {
console.error("The RPC node returned an error:",
data.error.message);
process.exit(1);
}
const lamports = data.result.value;
console.log(`${address} holds ${lamports / 1e9} SOL (${lamports}
lamports)`);