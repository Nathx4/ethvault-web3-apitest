// app/api/nathan-apitest/route.ts
import { NextResponse } from "next/server";
import { ethers } from "ethers";

// RPC in .env.local
const DEFAULT_RPC = process.env.ETH_RPC_URL ?? "";

// minimal ABI ERC20 (name/symbol/decimals/totalSupply/balanceOf)
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];

// GET /api/nathan-apitest
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const address = (searchParams.get("address") || "").trim();
    const holder = (searchParams.get("holder") || "").trim();
    const rpcFromQuery = (searchParams.get("rpc") || "").trim();
    const rpcUrl = rpcFromQuery || DEFAULT_RPC;

    if (!ethers.isAddress(address)) {
      return NextResponse.json(
        { error: "Invalid or missing 'address' query param." },
        { status: 400 }
      );
    }
    if (!rpcUrl) {
      return NextResponse.json(
        { error: "Missing RPC URL. Provide ?rpc=... or set ETH_RPC_URL in env." },
        { status: 400 }
      );
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const token = new ethers.Contract(address, ERC20_ABI, provider);

    const [name, symbol, decimals, totalSupply] = await Promise.all([
      token.name(),
      token.symbol(),
      token.decimals(),
      token.totalSupply(),
    ]);

    let balance = null as null | string;
    if (holder && ethers.isAddress(holder)) {
      const raw = await token.balanceOf(holder);
      balance = ethers.formatUnits(raw, decimals);
    }

    const result = {
        networkRpc: rpcUrl,
        contract: address,
        name,
        symbol,
        decimals: Number(decimals),
        totalSupply: ethers.formatUnits(totalSupply, decimals),
        ...(balance !== null ? { holder, balance } : {}),
        timestamp: new Date().toISOString(),
    };

    // Display console
    console.log("[nathan-apitest]", result);

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error("[nathan-apitest][error]", err?.message || err);
    return NextResponse.json(
      { error: "Internal error", details: String(err?.message || err) },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";