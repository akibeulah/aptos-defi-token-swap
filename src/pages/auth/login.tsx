import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Axios from "axios";
import {API_URL} from "../../utils/strings.ts";
import {toast} from "react-toastify";
import {setUser, setUserAction, setUserAuthentication} from "../../store/reducers/user.ts";
import {useDispatch, useSelector} from "react-redux";

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userState = useSelector((state: any) => state.user)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const login = async (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setUserAction(true))

        await Axios.post(API_URL + "/user/login", formData)
            .then((response: any) => {
                toast.success(`Welcome ${response.data.user.username}`)
                dispatch(setUser(response.data.user))
                dispatch(setUserAuthentication(true))
                document.cookie = `token=${response.data.token}; path=/; secure; HttpOnly`;
                document.cookie = `secret=${response.data.secret}; path=/; secure; HttpOnly`;
            }).catch(() => {
                dispatch(setUserAction(false))
                toast.error("Authentication failed")
            })
    }

    return (
        <div className="bg-[#F3F3F3] min-h-[calc(100vh-110px)] flex flex-col justify-center items-center">
            {userState.isAuthenticated && navigate("/dashboard")}
            <div className="bg-white py-16 px-8 rounded-lg shadow-md w-full max-w-[600px]">
                <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
                <form className="space-y-4" onSubmit={e => login(e)}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-1">Email</label>
                        <input type="email" value={formData.email}
                               onChange={e => setFormData({...formData, email: e.target.value})} id="email"
                               name="email"
                               className="border border-gray-300 rounded-md px-4 py-2"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold mb-1">Password</label>
                        <input type="password" value={formData.password}
                               onChange={e => setFormData({...formData, password: e.target.value})}
                               id="password" name="password"
                               className="border border-gray-300 rounded-md px-4 py-2"/>
                    </div>
                    <button type="submit"
                            className="bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Login
                    </button>
                </form>
                <p className="text-gray-600 mt-4">Don't have an account? <Link to="/signup"
                                                                               className="text-primary font-semibold">Sign
                    up</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
