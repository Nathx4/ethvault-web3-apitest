# ETHVault API Test – ERC20 Info Fetcher

This project adds a backend API route to the **ETHVault** (Next.js + ethers.js) base that fetches live on-chain data from any ERC-20 smart contract.  
It was built as part of a blockchain developer technical assessment.

---

## 🚀 Features
- Fetches ERC-20 token details: **name**, **symbol**, **decimals**, **totalSupply**.
- Works with any EVM network (Mainnet, Holesky, etc.).
- Simple JSON API — no frontend required.
- Console logs server-side response for easy verification.

---

## 🛠 Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **ethers.js v6**
- **Node.js 20.x**

---

## 📂 Relevant Project Structure

app/
└── api/
└── nathan-apitest/
└── route.ts      ← API route code

---

## ⚙️ Setup & Installation

1) **Clone**
```bash
git clone https://github.com/<user>/ethvault-web3-apitest.git
cd ethvault-web3-apitest

	2.	Install dependencies

pnpm install
# or
npm install

ETH_RPC_URL=https://rpc.ankr.com/eth_holesky

If you include ?rpc=... in your request, this env var is not required.
	3.	Run

pnpm dev

API base URL:

http://localhost:3000/api/nathan-apitest


⸻

🔍 How to Test

You can test with any ERC-20 address and RPC URL.

Example 1 — LINK on Holesky

curl "http://localhost:3000/api/nathan-apitest?address=0x685cE6742351ae9b618F383883D6d1e0c5A31B4B&rpc=https://rpc.ankr.com/eth_holesky"

Example 2 — WETH on Holesky

curl "http://localhost:3000/api/nathan-apitest?address=0x94373a4919b3240d86ea41593d5eba789fef3848&rpc=https://rpc.ankr.com/eth_holesky"

⸻

📄 Example JSON Response

{
  "networkRpc": "https://rpc.ankr.com/eth_holesky",
  "contract": "0x685cE6742351ae9b618F383883D6d1e0c5A31B4B",
  "name": "ChainLink Token",
  "symbol": "LINK",
  "decimals": 18,
  "totalSupply": "10000000.0",
  "timestamp": "2025-08-14T16:59:41.486Z"
}


⸻

🗒 Notes for the Reviewer

This API demonstrates:
	•	Reading on-chain data with ethers v6.
	•	Integrating contract ABIs in a Next.js API route.
	•	Handling network selection via query (?rpc=) or env var.
	•	Clean, reusable code and server-side logging.

⸻

---

## 📄 Environment Variables (Optional but Recommended)

You can store your default Ethereum RPC endpoint in a `.env.local` file at the root of the project.  
This way, you don’t need to pass `?rpc=` in every API request.

---

📂 **Where**

ethvault/
├── app/
├── components/
├── contracts/
├── hooks/
├── lib/
├── public/
├── server/
├── styles/
├── package.json
├── pnpm-lock.yaml
└── .env.local  

---

**For testing on Holesky:**

ETH_RPC_URL=https://rpc.ankr.com/eth_holesky

**For testing HuskyCoin on Ethereum Mainnet with Alchemy**  
(replace `<KEY>` with the actual Alchemy API key):

ETH_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/<KEY>

3. Save the file.
4. Restart the dev server to load the new environment variable:
```bash
pnpm dev


⸻

📌 Once set, you can call your API without adding ?rpc= in the URL.
Example:

curl "http://localhost:3000/api/nathan-apitest?address=0x4200000000000000000000000000000000000006"

📬 Contact

Nathan Guiougou — Web3 & Software Developer
GitHub: https://github.com/Nathx4
LinkedIn: https://linkedin.com/in/nathan-guiougou
