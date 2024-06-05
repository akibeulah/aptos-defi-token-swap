import React from 'react';
import {APP_NAME} from "../../utils/strings.ts";

const AboutPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-110px)]">
            <main className="container mx-auto px-4 md:px-8 py-8">
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-center">About {APP_NAME}</h2>
                    <p className="text-lg text-gray-600 mb-8">{APP_NAME} is a user-friendly web interface that allows
                        users to connect their wallet, select tokens, specify amounts, and perform swap transactions. It
                        is integrated with the Aptos Blockchain using the Aptos TypeScript SDK to manage blockchain
                        interactions, including querying blockchain state, submitting transactions, and handling token
                        transfers. Security and efficiency are ensured through robust error handling, transaction
                        validation, and efficient swap algorithm.</p>
                    <p className="text-lg text-gray-600 mb-8">{APP_NAME} is being implemented by Akindele Beulah. Check
                        out more stuff at <a href="https://beulahdev.onrender.com" target="_blank"
                                             rel="noopener noreferrer"
                                             className="text-purple-800 underline">beulahdev.onrender.com</a>.</p>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
