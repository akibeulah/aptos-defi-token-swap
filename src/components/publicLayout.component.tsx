import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./footer.component.tsx";
import Header from "./header.component.tsx";

const PublicLayout: React.FC = () => {
    return (
        <div className={"bg-white"}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PublicLayout;
