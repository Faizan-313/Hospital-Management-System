import Doctor from '../components/Doctor.jsx'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        async function fetchDoctors() {
            try {
                const response = await axios.get('http://localhost:3000/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        }
        fetchDoctors();
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-50">
            {user && user.role === 'admin' && (
                <NavLink
                    to="/doctor-register"
                    className="fixed z-10 right-4 top-30 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Doctor
                </NavLink>
            )}

            <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Experts</h1>
                    <p className="text-lg text-gray-600">Experienced professionals dedicated to your health</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {doctors.map((doctor) => (
                        <Doctor
                            key={doctor.id}
                            name={doctor.full_name}
                            specialist={doctor.specialization}
                            email={doctor.contact_info}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Doctors;

