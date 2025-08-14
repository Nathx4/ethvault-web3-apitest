# ETHVault API Test – ERC20 Info Fetcher

This project is a backend API route for the **ETHVault** platform (Next.js + ethers.js) that fetches live on-chain data from any ERC-20 smart contract.  
It was built as part of a blockchain developer technical assessment.

---

## 🚀 Features
- Fetches ERC-20 token details: **name**, **symbol**, **decimals**, **totalSupply**.
- Optionally fetches the `balanceOf` a given holder address.
- Works with any Ethereum-compatible network (Mainnet, Holesky, etc.).
- Simple JSON API – no frontend required.

---

## 🛠 Technology Stack
- **Next.js** (App Router)
- **TypeScript**
- **ethers.js v6**
- **Node.js 20.x**

---

## 📂 Project Structure (relevant part)
app/
└── api/
└── nathan-apitest/
└── route.ts   ← API route code

---

## ⚙️ Setup & Installation

1. **Clone the repository**
git clone https://github.com/<your_user>/ethvault-web3-apitest.git
cd ethvault-web3-apitest

2. **Install dependencies**
pnpm install
# or
npm install

3. **Start the development server**
pnpm dev
The API will be available at:
http://localhost:3000/api/nathan-apitest

🔍 How to Test
You can test with any ERC-20 token address and RPC URL.
Example 1 – LINK Token on Holesky:
curl "http://localhost:3000/api/nathan-apitest?address=0x685cE6742351ae9b618F383883D6d1e0c5A31B4B&rpc=https://rpc.ankr.com/eth_holesky"

Example 2 – WETH Token on Holesky:
curl "http://localhost:3000/api/nathan-apitest?address=0x94373a4919b3240d86ea41593d5eba789fef3848&rpc=https://rpc.ankr.com/eth_holesky"

API Response Example
{
  "networkRpc": "https://rpc.ankr.com/eth_holesky",
  "contract": "0x685cE6742351ae9b618F383883D6d1e0c5A31B4B",
  "name": "ChainLink Token",
  "symbol": "LINK",
  "decimals": 18,
  "totalSupply": "10000000.0",
  "timestamp": "2025-08-14T16:59:41.486Z"
}
