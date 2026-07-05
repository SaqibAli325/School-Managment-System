import React from 'react';
import { FaCamera } from 'react-icons/fa';
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import PageContainer from '../Layout/PageContainer'
import Header from '../Header'

export default function EditAppProfile() {

    // Quick stats shown under the name
    const stats = [
        { label: 'Models', value: 36 },
        { label: 'Gallery', value: 3 },
        { label: 'Lessons', value: 1 },
    ];

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <PageContainer>
                <Navbar />
                <Sidebar />
                <Header
                    parentTitle="Hi, welcome back!"
                    subtitle="Your business dashboard template"
                    childTitle="App"
                    grandChildTitle="Post Details"
                />
                <div className="mt-5 w-full min-h-screen text-[#7e7e7e]">

                    {/* MAIN TWO-COLUMN LAYOUT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* LEFT COLUMN — Profile card (25%) */}
                        <div className="lg:col-span-3 bg-white rounded p-6 shadow-sm border border-gray-300 text-center flex flex-col h-full">

                            {/* Avatar + camera upload button */}
                            <div className="relative w-32 h-32 mx-auto mb-5">
                                <img
                                    src="https://edumin.dexignlab.com/xhtml/images/tab/1.jpg"
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover bg-gray-100"
                                />
                                <button className="absolute bottom-0 left-0 w-8 h-8 flex items-center justify-center bg-[#6a73fa] hover:bg-[#5961e0] text-white rounded-full border-2 border-white transition-colors">
                                    <FaCamera size={13} />
                                </button>
                            </div>

                            <h3 className="text-base font-bold text-[#333333]">Nella Vita</h3>
                            <p className="text-sm text-[#6a73fa] mt-1 mb-2">Developer</p>

                            {/* Stats list — negative margin so the divider lines reach the card edges */}
                            <div className="mt-6 -mx-6  border-t border-gray-300">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between py-6 border-b border-gray-300 text-sm px-6"
                                    >
                                        <span className="text-[#333333]">{stat.label}</span>
                                        <span className="text-[#333333] font-semibold">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Portfolio + link buttons */}
                            <div className="mt-8 flex flex-col gap-5">
                                <button className="w-full border border-gray-200 rounded-[5px] py-2.5 text-sm text-[#333333] hover:bg-gray-50 transition-colors">
                                    Portfolio
                                </button>
                                <div className="w-full border border-gray-200 rounded-[5px] py-2.5 px-3 text-sm text-[#333333] truncate cursor-pointer hover:text-blue-600 hover:border-blue-400 transition-colors">
                                    https://www.dexignl
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN — Account Setup form (75%) */}
                        <div className="lg:col-span-9 bg-white rounded  shadow-sm border border-gray-300 flex flex-col h-full">

                            <h3 className="text-lg font-bold text-[#333333] mb-6 border-b pt-8 pl-8 pb-5 border-gray-300">Account Setup</h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 px-8 ">
                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[.875rem] font-medium text-[#312a2a]">Name</label>
                                    <input type="text" defaultValue="John" placeholder="Enter Name" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 text-black text-[14px]" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Surname</label>
                                    <input type="text" defaultValue="osib" placeholder="Enter Surname" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 text-black text-[14px]" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Specialty</label>
                                    <input type="text" defaultValue="Developer" placeholder="Specialty" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 text-black text-[14px]" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Skills</label>
                                    <input type="text" defaultValue="HTML, JavaScript, PHP" placeholder="Skills" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 text-black text-[14px]" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Gender</label>
                                    <select defaultValue="" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 bg-white text-gray-500">
                                        <option value="">Please select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">DOB</label>
                                    <input type="date" defaultValue="2026-07-05" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Phone</label>
                                    <input type="text" placeholder="Phone" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Email address</label>
                                    <input type="email" defaultValue="demo@gmail.com" placeholder="Email address" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">Country</label>
                                    <select defaultValue="" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 bg-white text-gray-500">
                                        <option value="">Please select</option>
                                        <option value="pk">Pakistan</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a]">City</label>
                                    <select defaultValue="" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.4rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 bg-white text-gray-500">
                                        <option value="">Please select</option>
                                        <option value="lahore">Lahore</option>
                                        <option value="karachi">Karachi</option>
                                        <option value="islamabad">Islamabad</option>
                                    </select>
                                </div>
                            </form>

                            {/* Bottom action row */}
                            <div className="mt-8 px-6 md:px-8 pb-8 pt-6 border-t border-gray-300 flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-[#6A73FC] border-[#6A73FC] hover:bg-[#5961e0] text-white px-6 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer uppercase"
                                >
                                    Update
                                </button>
                                <a className="text-sm text-gray-400 hover:underline cursor-pointer">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* FOOTER */}
                    <footer className="w-full text-center py-6 mt-12 text-xs text-gray-400 border-t border-gray-200/60">
                        Copyright © Designed & Developed by <span className="text-[#6a73fa] font-medium">DexignLab</span> 2023
                    </footer>

                </div>
            </PageContainer>
        </div>
    );
}