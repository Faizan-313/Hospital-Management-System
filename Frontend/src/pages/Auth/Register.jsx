import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
    const navigate = useNavigate(); 

    async function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        
        const details = {
            fullName: formData.get("fullName"),
            dob: formData.get("dob"),
            gender: formData.get("gender"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            email: formData.get("email"),
            password: formData.get("password")
        };
        
        const jsonDetails = JSON.stringify(details);
        try{
            const response = await axios.post("http://localhost:3000/api/auth/register", jsonDetails, { 
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            toast.success("User Registered Successfully");
            navigate("/login");
        } catch (err) {
            console.error("Registration failed:", err.response?.data || err.message);
            toast.error("Registration failed. Please try again.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-8 bg-gray-100 pt-12">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Gender</label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="male" className="mr-2" required />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="female" className="mr-2" required />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            required
                            rows="2"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            id="password"
                            name="password"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?
                    <NavLink 
                        to="/login" 
                        className="text-blue-500 hover:underline"
                    >
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Register;
