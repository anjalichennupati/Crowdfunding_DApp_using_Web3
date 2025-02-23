import React, { useContext, createContext } from 'react';
import { useAddress, useContract, metamaskWallet, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xbA8d60f09983E700fa4b5990750281dE4547b23a'); // ✅ Replace with actual contract address
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const metamask = metamaskWallet();
    const connect = metamask.connect;

    const publishCampaign = async (form) => {
        if (!contract) {
            console.error("Contract not initialized");
            return;
        }
        try {
            const data = await createCampaign({
                args: [
                    address, // Owner
                    form.title,
                    form.description,
                    ethers.utils.parseEther(form.target), // Convert to Wei
                    Math.floor(new Date(form.deadline).getTime() / 1000), // Convert to Unix timestamp
                    form.image,
                ],
            });

            console.log("Contract call success", data);
        } catch (error) {
            console.error("Contract call failure", error);
        }
    };

    const getCampaigns = async () => {
        if (!contract) return [];
        try {
            const campaigns = await contract.call('getCampaigns');

            return campaigns.map((campaign, i) => ({
                owner: campaign.owner,
                title: campaign.title,
                description: campaign.description,
                target: ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
                image: campaign.image,
                pId: i
            }));
        } catch (error) {
            console.error("Error fetching campaigns:", error);
            return [];
        }
    };

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();
        return allCampaigns.filter((campaign) => campaign.owner.toLowerCase() === address?.toLowerCase());
    };

    const donate = async (pId, amount) => {
        if (!contract) return;
        try {
            return await contract.call('donateToCampaign', [pId], {
                value: ethers.utils.parseEther(amount)
            });
        } catch (error) {
            console.error("Donation failed:", error);
        }
    };

    const getDonations = async (pId) => {
        if (!contract) return [];
        try {
            const donations = await contract.call('getDonators', [pId]);

            return donations[0].map((donator, i) => ({
                donator,
                donation: ethers.utils.formatEther(donations[1][i].toString())
            }));
        } catch (error) {
            console.error("Error fetching donations:", error);
            return [];
        }
    };

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
