import React from 'react';

function AboutUs ()  {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-blue-500 to-green-500 p-6">
                <div className="container mx-auto">
                    <h1 className="text-white text-4xl font-bold">About Us</h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-6">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                        At <strong>Hospital Management System</strong>, our mission is to revolutionize healthcare by providing a state-of-the-art digital platform that streamlines hospital operations and enhances patient care. We are dedicated to simplifying administrative tasks, optimizing workflows, and empowering healthcare providers with innovative tools.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-700 text-lg">
                        We envision a future where every healthcare facility operates at peak efficiency and compassion. By integrating cutting-edge technology with exceptional service, our goal is to set new standards in healthcare management and create a seamless experience for patients and professionals alike.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <ul className="list-disc ml-6 text-gray-700 text-lg">
                        <li key="innovation">Innovation: Embracing the latest technology to enhance healthcare services.</li>
                        <li key="integrity">Integrity: Maintaining transparency and excellence in all we do.</li>
                        <li key="compassion">Compassion: Prioritizing patient care and well-being.</li>
                        <li key="collaboration">Collaboration: Working together with healthcare providers for a common goal.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About Our Platform</h2>
                    <p className="text-gray-700 text-lg">
                        Our comprehensive hospital management system addresses the unique challenges of modern healthcare. From scheduling and patient management to billing and record keeping, our platform is designed with both user experience and security in mind. With robust analytics and real-time reporting, hospitals can focus on delivering the best patient care.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
                    <p className="text-gray-700 text-lg">
                        We invite healthcare professionals, administrators, and patients to join us in transforming the future of healthcare. Together, we can build an environment that is efficient, compassionate, and truly innovative.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
