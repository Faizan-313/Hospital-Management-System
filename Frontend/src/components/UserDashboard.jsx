import React from 'react'
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaFileMedical, FaMapMarkerAlt, FaPhone, FaVenusMars, FaBirthdayCake, FaStethoscope } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

function UserDashboard() {
    const { user } = useAuth();
    const [details, setDetails] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [noRecord, setNoRecord] = React.useState(null);

    React.useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/medicalhistory",
                    { id: user.id },
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                );
                setDetails(response.data);
                setLoading(false);
                if(response.status === 201){
                    setNoRecord(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching user details:", error.response ? error.response.data : error.message);
                setError("Failed to load user details. Please try again later.");
                setLoading(false);
            }
        };

        if (user) fetchUserDetails();
    }, [user?.id]);

    if (!user || loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <ImSpinner8 className="animate-spin text-4xl text-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="bg-red-100 p-5 rounded-lg max-w-lg text-center">
                    <p className="text-red-600 font-lg">{error}</p>
                </div>
            </div>
        );
    }


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="min-h-[70vh] bg-gray-50 p-6 lg:p-8">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome, {details.patient?.split(' ')[0]}!
                    </h1>
                    <p className="text-gray-600 mt-2">Here's your medical overview</p>
                </div>
                {!noRecord ?
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Personal Info Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaUser className="w-6 h-6 text-blue-600 mr-2" />
                                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                            </div>
                            <div className="space-y-3">
                                <InfoItem icon={<FaBirthdayCake />} label="Date of Birth" value={formatDate(details.dob)} />
                                <InfoItem icon={<FaVenusMars />} label="Gender" value={details.gender} />
                                <InfoItem icon={<FaMapMarkerAlt />} label="Address" value={details.address} />
                                <InfoItem icon={<FaPhone />} label="Phone" value={details.phone} />
                            </div>
                        </div>

                        {/* Appointments Card */}
                        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaCalendarAlt className="w-6 h-6 text-green-600 mr-2" />
                                <h2 className="text-xl font-semibold text-gray-900">Latest Appointments</h2>
                            </div>
                            <div className="space-y-3">
                                <InfoItem icon={<FaUser />} label="Doctor" value={details.doctor} />
                                <InfoItem
                                    icon={<FaCalendarAlt />}
                                    label="Date"
                                    value={formatDate(details.appointment_date)}
                                />
                                <div className="flex items-center">
                                    <span className="flex items-center text-gray-500 w-24">
                                        <FaStethoscope className="mr-2" />
                                        Status:
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium 
                                        ${details.status === 'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : details.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-red-800 text-white'}`}>
                                        {details.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50">
                        {/* Diagnosis Column */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold p-4 border-b border-gray-200 bg-gray-50 text-gray-700">
                                Diagnosis History
                            </h3>
                            <div className="p-4 space-y-4">
                                {details.diagnosis
                                    ?.sort((a, b) => new Date(b.diagnosis_date) - new Date(a.diagnosis_date))
                                    ?.map((diagnosis, index) => (
                                        <div key={index} className="border-l-2 border-blue-300 pl-3">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm text-gray-500 font-medium">
                                                    {new Date(diagnosis.diagnosis_date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 text-sm whitespace-pre-wrap">
                                                {diagnosis.diagnosis_text}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Treatment Column */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold p-4 border-b border-gray-200 bg-gray-50 text-gray-700">
                                Treatment Plan
                            </h3>
                            <div className="p-4 space-y-4">
                                {details.treatment
                                    ?.sort((a, b) => new Date(b.treatment_date) - new Date(a.treatment_date))
                                    ?.map((treatment, index) => (
                                        <div key={index} className="border-l-2 border-green-300 pl-3">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm text-gray-500 font-medium">
                                                    {new Date(treatment.treatment_date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 text-sm whitespace-pre-wrap">
                                                {treatment.treatment_text}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>: 
                <div className="min-h-[40vh] flex items-center justify-center">
                    <div className="bg-red-100 p-4 rounded-lg max-w-md text-center">
                        <p className="text-red-600 font-medium">{noRecord}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center">
        <span className="flex items-center text-gray-500 w-24">
            {icon}
            <span className="ml-2">{label}:</span>
        </span>
        <span className="text-gray-900 font-medium">{value || 'N/A'}</span>
    </div>
);

const MedicalSection = ({ title, content }) => (
    <div className="bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
            {content || 'No information available'}
        </p>
    </div>
);

export default UserDashboard;