import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';

// Add your Thirdweb API key here
const clientId = "9763a7de70b5949c78f55e44ffcf2a38"; // Replace with actual API key

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider clientId={clientId} activeChain="sepolia">
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);
