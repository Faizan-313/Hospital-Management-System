import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAppointments() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/doctor-appointments",
                    { user_id: user.id },
                    { headers: { "Content-Type": "application/json" } }
                );
                if (response.status === 200) {
                    setAppointments(response.data);
                }
            } catch (err) {
                console.log(err);
                toast.error("Something went wrong");
            }
        }
        fetchAppointments();
    }, [user.id]);

    const totalAppointments = (appointments.filter(a => a.status === 'scheduled')).length;
    // Calculate unique patients based on the patientName field
    // in future only show appointments as per date (for today only)
    const uniquePatients = new Set(appointments.map(a => a.patientName)).size;

    function handlePatient(patient_id,status){      
        navigate(`/medical-data/${patient_id}/${status}`);
    }
    return (
        <div className="w-full h-screen p-4 bg-gray-100">
            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-white shadow rounded p-4 flex items-center space-x-4 flex-1 min-w-[200px]">
                    <span className="text-3xl text-blue-500">👥</span>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Total Patients</p>
                        <p className="text-2xl font-bold">{uniquePatients.toLocaleString()}</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded p-4 flex items-center space-x-4 flex-1 min-w-[200px]">
                    <span className="text-3xl text-green-500">📅</span>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Appointments</p>
                        <p className="text-2xl font-bold">{totalAppointments}</p>
                    </div>
                </div>
            </div>

            {/* Recent Appointments Table */}
            <div className="bg-white shadow rounded p-4">
                <p className="text-lg font-semibold mb-4">Recent Appointments</p>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {appointments.length > 0 ? (
                                appointments.map((appointment) => (
                                    <tr key={appointment.id} onClick={() => handlePatient(appointment.patient_id,appointment.status)} className='cursor-pointer hover:bg-gray-200 transition duration-300'>
                                        <td className="px-6 py-4 whitespace-nowrap">{appointment.patientName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`text-sm font-medium ${appointment.status === 'completed'
                                                    ? 'text-green-600'
                                                    : appointment.status === 'Pending'
                                                        ? 'text-yellow-600'
                                                        : 'text-blue-600'
                                                }`}>
                                                {appointment.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No recent appointments
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


