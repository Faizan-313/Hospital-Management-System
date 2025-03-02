import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar() {
    const {user, setUser} = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (!confirmLogout) return;
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
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Home
                </NavLink>

                {user && <NavLink
                    to={user.role === 'patient' ? "/userdashboard" : user.role === 'doctor' ? "/doctordashboard" : "/dashboard"}
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    {user.role === 'patient' ? "Medical Details" : "Dashboard"}
                </NavLink>}

                {user && user.role === 'patient' && <NavLink
                    to="/book-appoinment"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Book Appointment
                </NavLink>}

                <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Doctors
                </NavLink>

                {!user && <NavLink
                    to='/login'
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
                        } hover:text-blue-500`
                    }
                >
                    Login
                </NavLink>}

                {user && <button
                    className="px-4 pb-6 rounded-md text-lg font-medium transition text-gray-700 hover:text-blue-500 hover:cursor-pointer"
                    onClick={handleLogout}>
                        Logout
                </button>}

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-lg font-medium transition ${
                            isActive ? "text-blue-600 font-bold" : "text-gray-700"
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
