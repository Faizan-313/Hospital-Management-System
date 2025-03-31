import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MedicalData() {
    const [medicalData, setMedicalData] = useState([]);
    const [showAddDiagnosis, setAddDiagnosis] = useState(false);
    const [showAddTreatment, setAddTreatment] = useState(false);

    const navigate = useNavigate();

    const { id,status } = useParams();
    useEffect(() => {
        async function fetchMedicalData() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/medicalData",
                    { patient_id: id },
                    { headers: { "Content-Type": "application/json" } }
                );
                if (response.status === 200) {
                    setMedicalData(response.data);
                }
            } catch (err) {
                console.log(err);
                toast.error("Something went wrong");
            }
        }
        fetchMedicalData();
    }, []);

    async function handleDiagnosis(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details = {
            newDiagnosis: formData.get('diagnosisDetails'),
            date: new Date().toISOString().split('T')[0]
        }
        try {
            const response1 = await axios.post(
                "http://localhost:3000/api/add-diagnosis",
                {
                    patient_id: id,
                    diagnosis_text: details.newDiagnosis,
                    date: details.date
                },
                { headers: { "Content-Type": "application/json" } }
            );
            if (response1.status === 200) {
                toast.success("Diagnosis added successfully");
                toggleDiagnosis(false);

                const response = await axios.post(
                    "http://localhost:3000/api/medicalData",
                    { patient_id: id },
                    { headers: { "Content-Type": "application/json" } }
                );
                if (response.status === 200) {
                    setMedicalData(response.data);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    async function handleTreatment(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details = {
            newTreatment: formData.get('treatmentDetails'),
            date: new Date().toISOString().split('T')[0]
        }
        try {
            const response1 = await axios.post(
                "http://localhost:3000/api/add-treatment",
                {
                    patient_id: id,
                    treatment_text: details.newTreatment,
                    date: details.date
                },
                { headers: { "Content-Type": "application/json" } }
            );
            if (response1.status === 200) {
                toast.success("Treatment added successfully");
                toggleTreatment(false);

                const response = await axios.post(
                    "http://localhost:3000/api/medicalData",
                    { patient_id: id },
                    { headers: { "Content-Type": "application/json" } }
                );
                if (response.status === 200) {
                    setMedicalData(response.data);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }


    async function handleCompleted(e) {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:3000/api/mark-completed",
            { patient_id: id },
            { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 200) {
            toast.success(response.data.message);
            navigate('/doctordashboard');
        }
    }


    function toggleDiagnosis() {
        setAddDiagnosis(prev => !prev);
    }
    function toggleTreatment() {
        setAddTreatment(prev => !prev);
    }
    return (
        <div className='min-h-screen w-full bg-gray-50 p-8'>
            <button
                disabled={status === 'completed'}
                onClick={handleCompleted}
                className={`fixed z-10 right-6 top-8 border rounded-md text-white p-2 
                    ${status === 'completed'
                        ? 'bg-gray-400 cursor-not-allowed fixed z-10 right-6 top-30'
                        : 'fixed z-10 right-6 top-30 bg-green-600 hover:bg-green-800 border-1 rounded-md text-white p-2 cursor-pointer'
                    }`}
            >
                Completed
            </button>
            <div className='max-w-4xl mx-auto space-y-6'>
                {/* Patient Header */}
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-blue-900 mb-2'>{medicalData.patientName}</h2>
                    <div className='flex justify-center gap-4 text-gray-600'>
                        <p>
                            <span className='text-gray-800 font-semibold'>Date of Birth: </span>
                            {new Date(medicalData.patient_dob).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p>•</p>
                        <p>
                            <span className='text-gray-800 font-semibold'>Gender: </span>
                            {medicalData.patientGender}
                        </p>
                    </div>
                </div>

                <div className='space-y-8 flex gap-3 justify-evenly'>
                    {/* Diagnosis History */}
                    <div className='bg-white min-w-[30rem] p-6 rounded-lg shadow-md'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2'>
                            Diagnosis History
                        </h3>
                        <div className='space-y-6'>
                            {medicalData.patientDiagnosis?.map((diagnosis, index) => (
                                <div key={index} className='border-l-4 border-blue-200 pl-4'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <span className='text-sm font-medium text-blue-600'>
                                            {new Date(diagnosis.diagnosis_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <p className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
                                        {diagnosis.diagnosis_text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {showAddDiagnosis ?
                            <form onSubmit={handleDiagnosis} className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Diagnosis Details
                                    </label>
                                    <textarea
                                        rows={4}
                                        name='diagnosisDetails'
                                        className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        placeholder="Enter treatment details..."
                                        required
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Save Diagnosis
                                    </button>
                                    <button
                                        type="button"
                                        onClick={toggleDiagnosis}
                                        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            :
                            <button
                                disabled={status === 'completed'}
                                onClick={toggleDiagnosis}
                                className={`mt-4 px-4 py-2 rounded-md transition-colors
                                ${status === 'completed'
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 cursor-pointer text-white'  
                                    }`}
                            >
                                + Add New Diagnosis
                            </button>}
                    </div>

                    {/* Treatment History */}
                    <div className='bg-white min-w-[30rem] p-6 rounded-lg shadow-md mb-8'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2'>
                            Treatment History
                        </h3>
                        <div className='space-y-6'>
                            {medicalData.patientTreatment?.map((treatment, index) => (
                                <div key={index} className='border-l-4 border-green-200 pl-4'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <span className='text-sm font-medium text-green-600'>
                                            {new Date(treatment.treatment_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <p className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
                                        {treatment.treatment_text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {showAddTreatment ?
                            <form onSubmit={handleTreatment} className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Treatment Details
                                    </label>
                                    <textarea
                                        rows={4}
                                        name='treatmentDetails'
                                        className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                                        placeholder="Enter treatment details..."
                                        required
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Save Treatment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={toggleTreatment}
                                        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            :
                            <button
                                onClick={toggleTreatment}
                                disabled={status === 'completed'}
                                className={`mt-4 px-4 py-2 rounded-md transition-colors
                                    ${status === 'completed'
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer text-white'  
                                        }`}
                            >
                                + Add New Treament
                            </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalData
