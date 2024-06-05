import React from 'react';
import {APP_NAME} from "../utils/strings.ts";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-text py-4 text-xs">
            <div className="container mx-auto">
                <p className="text-centery">© 2024 {APP_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
