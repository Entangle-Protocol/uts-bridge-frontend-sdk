# Entangle Bridge

### Installation

after you've copied the SSH/HTTPS link from Github and opened the project locally, in order to install all the
dependencies you will have to run:

``` npm i ```

### Step 1

In ``` /blockchain/providers.ts ``` you will have to set up your wagmi config and add the project id:

``` const projectId = 'your project id' ```

read more here: https://wagmi.sh/react/guides/connect-wallet

Also in the ``` transports ``` variable you can set up your own rpc's for different chains. By default they are all
public (
i.e.not reliable at all):

``` 
export const transports = {
[mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
[mantle.id]: http('https://mantle-rpc.publicnode.com'),
[bsc.id]: http('https://bsc-rpc.publicnode.com')
...
} 
```

### Step 2

In ``` /core/Coin/CoinRepository/CoinRepository.ts ``` you can see there are different requests using the env variables.
These are Coingecko price requests, so do not forget to add needed env variables to you env.file like this:

``` 
NEXT_PUBLIC_COINGECKO_API_KEY=your API KEY
```

```NEXT_PUBLIC_BASE_MESSAGES_URL``` this is meant for the history of the bridge operations using GraphQL. You can adjust
your own back-end here

This API KEY is for fetching the usd price for the native currency of the selected chain. It is used in
the ``` BridgeFees ``` component and allows to calculate fees for bridging.

## Using the Bridge

In ``` /constants/tokens.ts ``` there is a default list of UTS tokens and connectors that can be bridged.
You can add your own UTS tokens or connectors that you want to bridge. Just follow the ``` TokenOption ``` type and
you're good to go!

This bridge SDK has 10 chains by default, all compatible with Universal Token Standard.
Those include:
Ethereum
Mantle
BSC
Base
Arbitrum
Avalanche
OP Mainnet
Polygon
CoreDAO
XLayer
You can find them in the ``` SelectNetworkModal.tsx ``` file. They are filtered according to the tokens available in
the ``` TOKENS ``` file. So if you add more different tokens, you will see their chains in the modal.

### How to add new chain?

- add network to Web3manager (to one of the managers - e.g. EVMManager if it's an EVN chain)
- add network to networks.ts
- add network in tokens.ts

### File structure

-- `.husky` - git hooks  
-- `.next` - next.js build folder
-- `api` - graphql api calls  
-- `app` - nextjs app router dir, here we store only pages  
-- `blockchain` - blockchain-related logic - providers, hooks, ABIs, etc  
-- `containers` - all the containers  
-- `core` - redux layers. We currently use RTK actively, but in the middle of migrating to RTK-query  
-- `helpers` - different helpers  
-- `hooks` - all the app-common hooks  
-- `lib` - 3rd party libs that we need to store like that.  
-- `providers` - react providers(contexts)  
-- `public` - public folder  
-- `scripts` - some service logic, we need it to interact with cosmos blockchain, you'll most likely not need it  
-- `ui`  
---- `components` - all the ui components
-- `utils` - common utils


