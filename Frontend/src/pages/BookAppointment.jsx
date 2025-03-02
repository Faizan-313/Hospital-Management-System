import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function BookAppointment() {
    const [doctors, setDoctors] = React.useState([]);
    const navigate = useNavigate();
    const { user } = useAuth();

    React.useEffect(()=>{
        async function fetchDoctors(){
            try{
                const response = await axios.get("http://localhost:3000/doctors");
                setDoctors(response.data);
            }catch(err){
                console.log(err);
                toast.error("Something went wrong");
            }
        }
        fetchDoctors();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const details = {
            user_id: user.id,
            doctor_id: formData.get("doctor"),
            date: formData.get("date"),
            status: 'scheduled'
        };

        const jsonDetails = JSON.stringify(details);
        try {
            const response = await axios.post("http://localhost:3000/api/book-appointment", jsonDetails, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(response.status === 200){
                toast.success("Appointment Booked Successfully");
                navigate("/userdashboard");
            }else if(response.status === 202){
                toast.error("Appointment Already Booked");
                navigate("/userdashboard");
            }else {
                toast.error("Something went wrong");
            }
        } catch (err) {
            console.error("Booking appointment failed:", err.response?.data || err.message);
            toast.error("Booking appointment failed. Please try again.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mb-8 bg-gray-100 pt-12">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Book Appointment</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Select Doctor</label>
                        <select name="doctor" required className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Choose a doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.full_name} ({doctor.specialization})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                            Appointment Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Book
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookAppointment

