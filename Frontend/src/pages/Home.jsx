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
            <div className="container mx-auto py-12 my-10">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 px-6">
                        <h6 className="text-blue-500 text-sm uppercase font-semibold">Medical Services</h6>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2">Best Medical Care for You</h2>
                        <p className="text-gray-600 mt-4">
                            We provide top-notch medical services with experienced professionals, modern equipment, and personalized care.
                        </p>
                        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 cursor-pointer transition">
                            Explore More
                        </button>
                    </div>

                    <div className="md:w-1/2 pl-8 flex sm:flex-row flex-col gap-10 justify-center mt-10 md:mt-0">
                        <div className="p-4">
                            <div className="w-full inline-block border-2 border-gray-200 rounded-lg px-12 py-4">
                                <div className="flex items-center justify-center w-20 h-20  rounded-full bg-blue-500 mb-8 mx-auto">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
                                        <svg className="w-6 h-6 text-white" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512">
                                            <path d="M464 128h-80V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 96h128v32H192V96zm160 248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Surgery</h3>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="w-full inline-block  border-2 border-gray-200 rounded-lg px-12 py-4">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-8 mx-auto">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500">
                                        <svg className="w-6 h-6 text-white" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512">
                                            <path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vaccine</h3>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="w-full inline-block  border-2 border-gray-200 rounded-lg pl-12 pr-7 py-4">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-500 mb-8 mx-auto">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                                        <svg className="w-6 h-6 text-white" stroke="currentColor" fill="currentColor" viewBox="0 0 640 512">
                                            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
