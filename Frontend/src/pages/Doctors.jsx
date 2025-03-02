import Doctor from '../components/Doctor.jsx'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const {user} = useAuth();

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
        <div>
            {user && user.role === 'admin' && <NavLink
                to="/doctor-register"
                className="px-4 py-2 ml-[85%] my-20 bg-blue-500 text-white rounded-md font-medium transition duration-200 ease-in-out no-underline hover:bg-blue-600"
            >
                Add New Doctor
            </NavLink>}
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                    <div className="page-banner-entry text-center py-8">
                        <h1 className="text-4xl font-bold">Doctors</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ml-8">
                        {doctors.map((doctor) => (
                            <Doctor key={doctor.id} name={doctor.full_name} specialist={doctor.specialization} email={doctor.contact_info} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Doctors;

