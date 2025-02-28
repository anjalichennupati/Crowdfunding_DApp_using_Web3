
# Crowdfunding DApp using Web3
# Overview

This is a decentralized crowdfunding platform built using React, Solidity, Thirdweb, and Hardhat. Users can connect their MetaMask wallets, create campaigns, and contribute to fundraisers securely on the blockchain. The project utilizes Thirdweb SDK for seamless Web3 integration and React Router for navigation. Below is an overview of the analysis, along with sample outputs and results. This project was done in May' 2024.
![Made with JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg)


---

## Features

- **MetaMask Integration**: Users can securely connect their MetaMask wallet to interact with the platform, enabling decentralized authentication and transactions.
<p align="center">
  <img src="https://i.postimg.cc/c4Tp4D8c/Screenshot-2025-02-24-010141.png" alt="App Screenshot" width="200">
</p>

- **Thirdweb Integration**: Smart contracts are deployed and managed via Thirdweb, providing an intuitive interface for blockchain interactions showcasing the **Solidity** functionalities
<p align="center">
  <img src="https://i.postimg.cc/G388jYqd/Screenshot-2025-02-24-005642.png" alt="App Screenshot" width="600">
  <img src="https://i.postimg.cc/G388jYqd/Screenshot-2025-02-24-005847.png" alt="App Screenshot" width="600">

</p>


- **Transparent Transactions**: Every funding transaction is recorded and displayed, ensuring visibility into campaign contributions.
  <p align="center">
  <img src="https://i.postimg.cc/CKqzSptX/Screenshot-2025-02-24-005318.png" alt="App Screenshot" width="600">

</p>

---

## Tech Stack

**Frontend**: React, Tailwind CSS, Thirdweb SDK

**Backend**: Solidity, Hardhat

**Blockchain**: Ethereum (Sepolia Testnet)

---

## Demo

Visit the project:
https://crowdfundingviaweb3.netlify.app/
## Installation

1. **Install Dependencies**: Navigate to the client and smart contract directories and install dependencies:
- Client Setup:
```bash
  cd client
  npm install
```
- Smart Contracts Setup:
```bash
  cd ../web3
  npm install
```
2. **Configure Environment Variables**
- Create a .env file in both client and smart-contracts folders.
- Add the necessary API keys and environment variables
- .env (for client)
```bash
  VITE_CLIENT_ID=your-thirdweb-client-id
```
- .env (for web3)
```bash
PRIVATE_KEY=your-wallet-private-key
```
3. **Deploy Smart Contracts**
```bash
 cd web3
 npx thirdweb deploy
```
4. **Start the client**
```bash
 cd ../client
 npm run dev



```
5. Your app should now be running at http://localhost:5173/ 

---

## Running Tests

The project can be implemented and tested to verify funtionality

