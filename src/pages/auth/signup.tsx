import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
    return (
        <div className="bg-[#F3F3F3] min-h-[calc(100vh-110px)] flex flex-col justify-center items-center">
            <div className="bg-white py-16 px-8 rounded-lg shadow-md w-full max-w-[600px]">
                <h1 className="text-2xl font-bold mb-8 text-center">Sign Up</h1>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-1">Email</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-4 py-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold mb-1">Password</label>
                        <input type="password" id="password" name="password" className="border border-gray-300 rounded-md px-4 py-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm-password" className="text-lg font-semibold mb-1">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" className="border border-gray-300 rounded-md px-4 py-2" />
                    </div>
                    <button type="submit" className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Sign Up</button>
                </form>
                <p className="text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-primary font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;
