import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AptosSDK } from 'aptos-sdk'; // Assuming Aptos SDK is installed and imported

const DashboardPage: React.FC = () => {
    const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
    const [amount, setAmount] = useState<number>(0);

    const handleTokenSelection = (token: string) => {
        if (selectedTokens.includes(token)) {
            setSelectedTokens(selectedTokens.filter(item => item !== token));
        } else {
            setSelectedTokens([...selectedTokens, token]);
        }
    };

    const handleSwap = async () => {
        if (selectedTokens.length === 0 || amount <= 0) {
            toast.error('Please select tokens and specify valid amounts.');
            return;
        }

        try {
            // Assuming Aptos SDK is used for swap transactions
            const aptosSDK = new AptosSDK();
            // Perform swap transactions using selectedTokens and amount
            await aptosSDK.swapTokens(selectedTokens, amount);
            toast.success('Swap transaction completed successfully.');
        } catch (error) {
            console.error('Swap transaction failed:', error);
            toast.error('Swap transaction failed. Please try again.');
        }
    };

    return (
        <div className="bg-[#F3F3F3] min-h-screen">
            <header className="bg-purple-800 text-white py-4">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 md:px-8 py-8">
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Token Swap Interface</h2>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Select Tokens</h3>
                            <div className="flex space-x-4">
                                <button onClick={() => handleTokenSelection('Token1')} className={`py-2 px-4 rounded-md ${selectedTokens.includes('Token1') ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800'}`}>Token1</button>
                                <button onClick={() => handleTokenSelection('Token2')} className={`py-2 px-4 rounded-md ${selectedTokens.includes('Token2') ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800'}`}>Token2</button>
                                {/* Add more token buttons as needed */}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Specify Amount</h3>
                            <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="border border-gray-300 rounded-md px-4 py-2 w-40" />
                        </div>
                        <button onClick={handleSwap} className="bg-purple-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Swap Tokens</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DashboardPage;
