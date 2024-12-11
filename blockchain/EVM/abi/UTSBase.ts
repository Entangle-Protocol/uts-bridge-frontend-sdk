export const UTSBaseAbi = [
  {
    inputs: [],
    name: 'UTSBase__E0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E1',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E2',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E3',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E4',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E5',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E6',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSBase__E7',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'peerAddressIndexed',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'peerAddress',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'to',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
    ],
    name: 'Bridged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'allowedChainIds',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint64',
            name: 'minGasLimit',
            type: 'uint64',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'paused',
            type: 'bool',
          },
        ],
        indexed: false,
        internalType: 'struct ChainConfig[]',
        name: 'chainConfigs',
        type: 'tuple[]',
      },
    ],
    name: 'ChainConfigUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        indexed: true,
        internalType: 'struct Origin',
        name: 'originIndexed',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        indexed: false,
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'ExecutionFailed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'peerAddressIndexed',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'peerAddress',
        type: 'bytes',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'sender',
        type: 'bytes',
      },
    ],
    name: 'Redeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newRouter',
        type: 'address',
      },
    ],
    name: 'RouterSet',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'to',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dstChainId',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'dstGasLimit',
        type: 'uint64',
      },
      {
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'protocolPayload',
        type: 'bytes',
      },
    ],
    name: 'bridge',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'bridgedAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'dstChainId',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'dstGasLimit',
        type: 'uint64',
      },
      {
        internalType: 'uint16',
        name: 'customPayloadLength',
        type: 'uint16',
      },
      {
        internalType: 'bytes',
        name: 'protocolPayload',
        type: 'bytes',
      },
    ],
    name: 'estimateBridgeFee',
    outputs: [
      {
        internalType: 'uint256',
        name: 'paymentAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'dstMinGasLimit',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'chainIds',
        type: 'uint256[]',
      },
    ],
    name: 'getChainConfigs',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint64',
            name: 'minGasLimit',
            type: 'uint64',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'paused',
            type: 'bool',
          },
        ],
        internalType: 'struct ChainConfig[]',
        name: 'configs',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'isExecutionFailed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolVersion',
    outputs: [
      {
        internalType: 'bytes2',
        name: '',
        type: 'bytes2',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'retryRedeem',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: 'routerAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'allowedChainIds',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint64',
            name: 'minGasLimit',
            type: 'uint64',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'paused',
            type: 'bool',
          },
        ],
        internalType: 'struct ChainConfig[]',
        name: 'chainConfigs',
        type: 'tuple[]',
      },
    ],
    name: 'setChainConfig',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newRouter',
        type: 'address',
      },
    ],
    name: 'setRouter',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'customPayload',
        type: 'bytes',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'sender',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'peerAddress',
            type: 'bytes',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
    ],
    name: 'storeFailedExecution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'underlyingToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
