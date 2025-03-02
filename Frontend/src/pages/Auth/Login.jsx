import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const {user, setUser } = useAuth();

    async function handleSubmit(event) {
        event.preventDefault(); 
        const formData = new FormData(event.target);

        const details = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", details, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true, 
            });

            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            if (response.status === 200) {
                const role = response.data?.role;
                if (role === "doctor") {
                    navigate("/doctordashboard");
                } else if (role === "patient") {
                    navigate("/userdashboard");
                } else if (role === "admin") {
                    navigate("/dashboard");
                } else {
                    toast.error("Invalid role. Contact support.");
                }

            } else {
                toast.error("Login failed. Please check your credentials");
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            toast.error("Login failed. Please check your credentials.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-12">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Don't have an account?
                    <NavLink 
                        to="/register" 
                        className="text-blue-500 hover:underline"
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;
