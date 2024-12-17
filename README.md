# **Entangle Bridge**  

This repository provides everything you need to integrate the Web3 Bridge into your frontend application. The bridge supports multiple chains and tokens, offering seamless interoperability for Universal Token Standard (UTS).  

---

## **Installation**  

After cloning the repository using SSH or HTTPS and opening it locally, install the necessary dependencies by running:  

```bash
npm i
```

---

## **Step 1: Configure Blockchain Providers**  

1. Navigate to **`/blockchain/providers.ts`**.  
2. Set up your wagmi configuration and provide your project ID:  

   ```typescript
   const projectId = 'your project id';
   ```  

   Learn more here: [Wagmi Connect Wallet Guide](https://wagmi.sh/react/guides/connect-wallet).  

3. Update the **`transports`** variable to use your custom RPC endpoints for different chains. By default, they are set to public RPCs, which may not be reliable:  

   ```typescript
   export const transports = {
     [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
     [mantle.id]: http('https://mantle-rpc.publicnode.com'),
     [bsc.id]: http('https://bsc-rpc.publicnode.com'),
     ...
   };
   ```  

---

## **Step 2: Environment Variables**  

1. In **`/core/Coin/CoinRepository/CoinRepository.ts`**, ensure you provide the required environment variables:  

   ```bash
   NEXT_PUBLIC_COINGECKO_API_KEY=your API KEY
   NEXT_PUBLIC_BASE_MESSAGES_URL=your GraphQL endpoint
   ```  

   - **`NEXT_PUBLIC_COINGECKO_API_KEY`**: Used to fetch USD prices for native currencies, essential for calculating bridge fees.  
   - **`NEXT_PUBLIC_BASE_MESSAGES_URL`**: GraphQL endpoint for tracking the history of bridge operations.  

---

## **Using the Bridge**  

1. Navigate to **`/constants/tokens.ts`**:  
   - Add UTS tokens or connectors you want to bridge.  
   - Follow the **`TokenOption`** type to ensure compatibility.  

2. The bridge SDK supports **10 default chains**, compatible with UTS:  
   - **Ethereum**, **Mantle**, **BSC**, **Base**, **Arbitrum**, **Avalanche**, **Optimism**, **Polygon**, **CoreDAO**, and **XLayer**.  

   These chains are defined in **`SelectNetworkModal.tsx`** and filtered based on tokens in the **`TOKENS`** file.  

---

## **How to Add a New Chain**  

To integrate a new chain, follow these steps:  
1. Add the network to **`Web3Manager`** (e.g., `EVMManager` for EVM chains).  
2. Update the chain details in **`networks.ts`**.  
3. Add the network configuration to **`tokens.ts`**.  

---

## **File Structure**  

- **`.husky`** – Git hooks for the repository.  
- **`.next`** – Next.js build folder.  
- **`api`** – GraphQL API calls.  
- **`app`** – Next.js app router directory for pages.  
- **`blockchain`** – Blockchain logic, including providers, hooks, and ABIs.  
- **`containers`** – Reusable container components.  
- **`core`** – Redux layers.  
  - Actively uses RTK; transitioning to RTK-query.  
- **`helpers`** – Utility functions and helpers.  
- **`hooks`** – Common application hooks.  
- **`lib`** – Third-party libraries used in the project.  
- **`providers`** – React contexts and providers.  
- **`public`** – Public assets folder.  
- **`scripts`** – Service scripts (e.g., Cosmos blockchain interactions).  
- **`ui`** –  
  - **`components`**: All UI components.  
- **`utils`** – Common utilities.  

---

## **Contributing**  

Contributions are welcome! If you’d like to contribute, please follow the repository guidelines and submit a pull request.  

---  

For questions or support, please reach out via the issues section or contact the repository maintainers.  

---

