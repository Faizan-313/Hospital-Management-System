import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'

function Footer() {
    return (
        <footer className="bg-gray-500 text-white py-10">
            <div className="container  mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Our Mission</h3>
                        <p className="mt-2 text-gray-100">Protecting and Taking Care Of Your Health</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
                        <hr className="w-[20%] border-t-4 border-blue-400" />
                        <ul className="mt-2 space-y-2">
                            <li><a href="/ourteam" className="hover:text-gray-300">Doctors</a></li>
                            <li><a href="/team" className="hover:text-gray-300">Creators</a></li>
                            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="/service" className="hover:text-gray-300">Services</a></li>
                            <li><a href="/booking" className="hover:text-gray-300">Booking</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Our Services</h3>
                        <hr className="w-[20%] border-t-4 border-blue-400" />
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Dental Care</a></li>
                            <li><a href="#" className="hover:text-gray-300">ENT Clinic</a></li>
                            <li><a href="#" className="hover:text-gray-300">Cardiology</a></li>
                            <li><a href="#" className="hover:text-gray-300">Precise Diagnosis</a></li>
                            <li><a href="#" className="hover:text-gray-300">Ambulance Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">More About Us</h3>
                        <hr className="w-[20%] border-t-4 border-blue-400" />
                        <div className="flex space-x-4 mt-2">
                            <ul className="flex flex-row gap-4 mt-2 ">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/faizan-syed-4370152b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        aria-label="LinkedIn Profile"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <img
                                            className="h-6 w-6 sm:h-7 sm:w-7 hover:scale-150 transition-transform duration-200"
                                            src={linkedin}
                                            alt="LinkedIn"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Faizan-313"
                                        aria-label="GitHub Profile"
                                        target="_blank"
                                    >
                                        <img
                                            className="h-6 w-6 sm:h-7 sm:w-7 hover:scale-150 transition-transform duration-200"
                                            src={github}
                                            alt="GitHub"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        aria-label="Twitter Profile"
                                        target="_blank"
                                    >
                                        <img
                                            className="h-6 w-6 sm:h-7 sm:w-7 hover:scale-150 transition-transform duration-200"
                                            src={twitter}
                                            alt="Twitter"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-200 text-sm">
                <p>
                    Copyright © 2025
                    <a href="https://github.com/Faizan-313" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white ml-1">
                        Peer Faizan
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;


