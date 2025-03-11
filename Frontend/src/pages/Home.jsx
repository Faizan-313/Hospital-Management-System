import React from 'react'
import home_img from '../assets/main.webp'

function Home() {
    return (
        <div>
            <div className="flex items-center justify-between w-[100%] px-10 py-10 bg-gradient-to-r from-blue-500 to-green-400">
                <h1 className="w-1/2 text-white text-[3rem] font-bold  px-6 py-4 rounded-lg shadow-lg">
                    Protecting and Taking Care of Your Health
                </h1>
                <img src={home_img} alt="home" className="w-[35%] h-auto object-cover rounded-lg shadow-xl" />
            </div>
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
                    <div className="lg:w-1/2 space-y-6">
                        <div className="space-y-4">
                            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider">
                                Medical Services
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Comprehensive Healthcare Solutions
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Experience personalized care through our advanced medical programs and cutting-edge treatment methodologies.
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
                            Discover Services →
                        </button>
                    </div>

                    {/* Services Cards */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Advanced Surgery</h3>
                                <p className="text-gray-600 text-center text-sm">Minimally invasive procedures with rapid recovery</p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform">
                                        <svg className="w-8 h-8 text-green-600" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Vaccinations</h3>
                                <p className="text-gray-600 text-center text-sm">Complete immunization programs for all ages</p>
                            </div>

                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-red-600" viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">24/7 Emergency</h3>
                                <p className="text-gray-600 text-center text-sm">Immediate care from expert emergency team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        
                        <div className="w-full lg:w-1/2 relative h-96">
                            <div className="absolute w-3/4 h-3/4 left-0 top-0 rounded-2xl overflow-hidden bg-blue-100"></div>
                            <div className="absolute w-3/4 h-3/4 right-0 bottom-0 rounded-2xl overflow-hidden bg-blue-200"></div>
                            <div className="absolute experience-box bg-blue-600 text-white p-6 rounded-2xl text-center shadow-lg transform -translate-y-1/2 right-8 top-1/2">
                                <div className="text-4xl font-bold">10</div>
                                <span className="text-sm mt-1 block">Years of Experience</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h6 className="text-blue-600 font-semibold uppercase tracking-wide">About Us</h6>
                                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                        Premier Medical Hospital Center
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        We combine advanced medical technology with compassionate care to deliver exceptional healthcare services. Our expert team is dedicated to your well-being.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-3 rounded-lg">
                                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 640 512">
                                                    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900">24/7 Emergency Care</h4>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-3 rounded-lg">
                                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 640 512">
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900">Specialist Physicians</h4>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-3 rounded-lg">
                                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 512 512">
                                                    <path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900">Advanced Treatment</h4>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-3 rounded-lg">
                                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 512 512">
                                                    <path d="M265.12 60.12a12 12 0 00-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88zM272 412a12 12 0 01-11.34-16 11.89 11.89 0 0111.41-8A60.06 60.06 0 00332 328.07a11.89 11.89 0 018-11.41A12 12 0 01356 328a84.09 84.09 0 01-84 84z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-semibold text-gray-900">Patient Safety</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
