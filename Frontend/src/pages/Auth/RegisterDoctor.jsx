import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterDoctor() {
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        
        const details = {
            fullName: formData.get("fullName"),
            specialization : formData.get("Specialization"),
            email: formData.get("email"),
            password: formData.get("password")
        };
        const jsonDetails = JSON.stringify(details);
        try{
            const response = await axios.post("http://localhost:3000/api/auth/register-doctor", jsonDetails, { 
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success("Doctor Registered Successfully");
            navigate("/doctors");
        } catch (err) {
            console.error("Registration failed:", err.response?.data || err.message);
            toast.error("Registration failed. Please try again.");
        }
    }
    return (
        <div className="bg-white p-6 rounded shadow-md my-10 ml-[25rem] w-full max-w-md">
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
                            defaultValue="Dr. "
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="Specialization" className="block text-gray-700 font-medium mb-2">
                            Specialization
                        </label>
                        <textarea
                            id="Specialization"
                            name="Specialization"
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
        </div>
    )
}

export default RegisterDoctor
