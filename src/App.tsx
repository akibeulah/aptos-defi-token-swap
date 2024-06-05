import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/public/home.tsx";
import PublicLayout from "./components/publicLayout.component.tsx";
import AboutPage from "./pages/public/about.tsx";
import LoginPage from "./pages/auth/login.tsx";
import SignupPage from "./pages/auth/signup.tsx";
import DashboardPage from "./pages/client/dashboard.tsx";

function App() {

    return (
        <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/signup"} element={<SignupPage/>}/>
                </Route>
                <Route path={"/dashboard"} element={<PublicLayout/>}>
                    <Route index element={<DashboardPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
