import React from 'react';
import {Link} from 'react-router-dom';
import {APP_NAME} from "../utils/strings.ts";

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-text py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">{APP_NAME}</h1>
                <nav className="space-x-4">
                    <Link to="/" className="">Home</Link>
                    <Link to="/about" className="">About Us</Link>
                    <Link to="/login" className="">Login</Link>
                    <Link to="/signup" className="">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
