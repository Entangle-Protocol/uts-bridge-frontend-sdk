import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { ethers } from 'ethers'
import { wagmiConfig } from '@/blockchain/EVM/provider'
import { UTSBaseAbi } from '@/blockchain/EVM/abi/UTSBase'
import { erc20Abi } from 'viem'

async function getContractBytecode(
  provider: ethers.JsonRpcProvider,
  address: string
): Promise<string> {
  return provider.getCode(address)
}

async function getIsERCToken(provider: ethers.JsonRpcProvider, tokenAddress: string) {
  let totalSupply: string | null = null
  let decimals: number | null = null
  try {
    const contract = new ethers.Contract(tokenAddress, erc20Abi, provider)
    totalSupply = (await contract.totalSupply()).toString() // Преобразование в строку
    decimals = await contract.decimals()

    return !!totalSupply && decimals !== undefined
  } catch (error) {
    console.error('error getIsERCToken = ', error)
    return false
  }
}

async function getIsETSToken(provider: ethers.JsonRpcProvider, tokenAddress: string) {
  let result: boolean
  let underlyingToken: string | null = null
  let protocolVersion: string | null = null
  try {
    const contract = new ethers.Contract(tokenAddress, UTSBaseAbi, provider)
    underlyingToken = await contract.underlyingToken()
    protocolVersion = await contract.protocolVersion()

    result = !!underlyingToken && !!protocolVersion
  } catch (error) {
    console.log('error getIsETSToken = ', error)
    result = false
  }

  return result
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const tokenAddress = searchParams.get('token-address')
  const chainId = searchParams.get('chain-id')

  if (!tokenAddress || !chainId) {
    return NextResponse.json({ error: 'Missing tokenAddress or chainId' }, { status: 400 })
  }

  if (!ethers.isAddress(tokenAddress)) {
    return NextResponse.json({ error: 'Invalid tokenAddress' }, { status: 400 })
  }

  try {
    const chain = wagmiConfig.chains.find((c) => c.id === Number(chainId))
    const rpcUrl = chain?.rpcUrls.default.http[0]

    if (!rpcUrl) {
      return NextResponse.json(
        { error: 'Unsupported chainId or no RPC URL available' },
        { status: 400 }
      )
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl)
    const bytecode = await getContractBytecode(provider, tokenAddress)

    if (bytecode === '0x') {
      return NextResponse.json(
        { error: 'Address is not a contract or externally owned account' },
        { status: 400 }
      )
    }

    const isERC20 = await getIsERCToken(provider, tokenAddress)
    const isETS = await getIsETSToken(provider, tokenAddress)

    return NextResponse.json({ isERC20, isETS })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
