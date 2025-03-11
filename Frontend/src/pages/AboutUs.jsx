import React from 'react';

function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 shadow-lg rounded-b-2xl">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-white text-5xl font-bold mb-2 font-serif transform hover:scale-105 transition-transform duration-300">
                        About Us
                    </h1>
                    <div className="w-24 h-2 bg-amber-400 rounded-full"></div>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-8 max-w-6xl">
                <section className="mb-12 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 font-serif flex items-center">
                        <span className="mr-3">🏥</span>
                        Our Mission
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        At <strong className="text-teal-600">Hospital Management System</strong>, our mission is to revolutionize healthcare by providing a state-of-the-art digital platform that streamlines hospital operations and enhances patient care. We are dedicated to simplifying administrative tasks, optimizing workflows, and empowering healthcare providers with innovative tools.
                    </p>
                </section>

                <section className="mb-12 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 font-serif flex items-center">
                        <span className="mr-3">👁️</span>
                        Our Vision
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        We envision a future where every healthcare facility operates at peak efficiency and compassion. By integrating cutting-edge technology with exceptional service, our goal is to set new standards in healthcare management and create a seamless experience for patients and professionals alike.
                    </p>
                </section>

                <section className="mb-12 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 font-serif flex items-center">
                        <span className="mr-3">💎</span>
                        Our Values
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <li className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Innovation</h3>
                            <p className="text-gray-700">Embracing the latest technology to enhance healthcare services</p>
                        </li>
                        <li className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Integrity</h3>
                            <p className="text-gray-700">Maintaining transparency and excellence in all we do</p>
                        </li>
                        <li className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Compassion</h3>
                            <p className="text-gray-700">Prioritizing patient care and well-being</p>
                        </li>
                        <li className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Collaboration</h3>
                            <p className="text-gray-700">Working together for a common healthcare goal</p>
                        </li>
                    </ul>
                </section>

                <section className="mb-12 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 font-serif flex items-center">
                        <span className="mr-3">🚀</span>
                        Our Platform
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Our comprehensive hospital management system addresses the unique challenges of modern healthcare. From scheduling and patient management to billing and record keeping, our platform is designed with both user experience and security in mind. With robust analytics and real-time reporting, hospitals can focus on delivering the best patient care.
                    </p>
                </section>

            </main>
        </div>
    );
};

export default AboutUs;
