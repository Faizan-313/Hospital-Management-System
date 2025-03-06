import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar() {
    const [disable, setDisable] = useState(false);
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const confirmLogout = () => {
        return new Promise((resolve) => {
            toast((t) => (
                <div className=' flex justify-end'>
                    <p>Are you sure you want to logout?</p>
                    <button
                        className='bg-red-400 hover:bg-red-600 px-2 py-1 m-1 mt-3 border rounded-xl cursor-pointer text-white'
                        onClick={() => { toast.dismiss(t.id); resolve(true); }}>
                        Yes
                    </button>
                    <button
                        className='bg-green-400 hover:bg-green-600 px-2 py-1 m-1 mt-3 border cursor-pointer rounded-xl text-white'
                        onClick={() => { toast.dismiss(t.id); resolve(false); }}>
                        No
                    </button>
                </div>
            ), { duration: Infinity });
        })
    }

    const handleLogout = async () => {
        setDisable(true);
        const confirm = await confirmLogout();
        if (!confirm) {
            setDisable(false)
            return;
        };
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
        toast.success('Logged out successfully');
    }

    return (
        <div className='flex justify-between bg-gradient-to-r from-blue-500 to-green-400'>
            <img src={logo} className='mix-blend-multiply w-[6rem] h-auto' />
            <div className='flex gap-10 pr-4 pt-7 text-lg font-bold text-white'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Home
                </NavLink>

                {user && <NavLink
                    to={user.role === 'patient' ? "/userdashboard" : user.role === 'doctor' ? "/doctordashboard" : "/dashboard"}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    {user.role === 'patient' ? "Medical Details" : "Dashboard"}
                </NavLink>}

                {user && user.role === 'patient' && <NavLink
                    to="/book-appoinment"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Book Appointment
                </NavLink>}

                <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Doctors
                </NavLink>

                {!user && <NavLink
                    to='/login'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Login
                </NavLink>}

                {user && <button
                    className={`px-4 pb-6 rounded-md text-lg font-medium transition text-gray-700 hover:text-blue-500 hover:cursor-pointer ${disable ? "opacity-50 cursor-none" : ""}`} 
                    onClick={handleLogout}
                    disabled={disable}
                >
                    Logout ({user.role.toUpperCase()})
                </button>}

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    About us
                </NavLink>



            </div>

        </div>
    )
}

export default Navbar
