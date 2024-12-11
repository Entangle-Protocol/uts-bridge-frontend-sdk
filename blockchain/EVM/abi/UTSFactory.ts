export const UTSFactoryAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'masterRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'registry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AccessControlBadConfirmation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'neededRole',
        type: 'bytes32',
      },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Create2EmptyBytecode',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Create2FailedDeployment',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'Create2InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1967NonPayable',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EnforcedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ExpectedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInitialization',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitializing',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSFactory__E0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSFactory__E1',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSFactory__E2',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSFactory__E3',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UTSFactory__E4',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UUPSUnauthorizedCallContext',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'slot',
        type: 'bytes32',
      },
    ],
    name: 'UUPSUnsupportedProxiableUUID',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint8',
        name: 'blueprintId',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newCodeStorage',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'CodeStorageSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'deployment',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'deployerIndexed',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'deployer',
        type: 'bytes',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'underlyingToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'Deployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newRouter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'DeploymentRouterSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MASTER_ROUTER',
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
  {
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'REGISTRY',
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
  {
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'blueprintId',
        type: 'uint8',
      },
    ],
    name: 'codeStorage',
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
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'isConnector',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: 'deployer',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'deployParams',
        type: 'bytes',
      },
    ],
    name: 'deployByRouter',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'newDeployment',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'owner',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'underlyingToken',
            type: 'bytes',
          },
          {
            internalType: 'bool',
            name: 'feeModule',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'router',
            type: 'bytes',
          },
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
          {
            internalType: 'bytes32',
            name: 'salt',
            type: 'bytes32',
          },
        ],
        internalType: 'struct DeployConnectorData',
        name: 'deployData',
        type: 'tuple',
      },
    ],
    name: 'deployConnector',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'newConnector',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'owner',
            type: 'bytes',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'initialSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'mintedAmountToOwner',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'pureToken',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'mintable',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'globalBurnable',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'onlyRoleBurnable',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'feeModule',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'router',
            type: 'bytes',
          },
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
          {
            internalType: 'bytes32',
            name: 'salt',
            type: 'bytes32',
          },
        ],
        internalType: 'struct DeployTokenData',
        name: 'deployData',
        type: 'tuple',
      },
    ],
    name: 'deployToken',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'newToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'blueprintId',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: 'deployer',
        type: 'bytes',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'isConnector',
        type: 'bool',
      },
    ],
    name: 'getPrecomputedAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'deployment',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'hasCode',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
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
    inputs: [
      {
        internalType: 'address',
        name: 'defaultAdmin',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
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
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
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
  {
    inputs: [
      {
        internalType: 'uint8[]',
        name: 'blueprintIds',
        type: 'uint8[]',
      },
      {
        internalType: 'address[]',
        name: 'newCodeStorage',
        type: 'address[]',
      },
    ],
    name: 'setCodeStorage',
    outputs: [],
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
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
