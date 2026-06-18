import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'
import { Eye, EyeOff } from 'lucide-react'

const AddStaff = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        const handleToggle = (e) => {
            setSidebarCollapsed(e.detail.collapsed);
        };
        window.addEventListener('sidebarToggle', handleToggle);

        const handleMobileToggle = (e) => {
            setMobileMenuOpen(e.detail.isOpen);
        };
        window.addEventListener('mobileSidebarToggle', handleMobileToggle);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('sidebarToggle', handleToggle);
            window.removeEventListener('mobileSidebarToggle', handleMobileToggle);
        };
    }, []);

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>
                
                <Header parentTitle="Add Staff" childTitle="Staff" grandChildTitle="Add Staff"/>

                <div className="bg-white rounded shadow-sm p-4 sm:p-6 mt-4">
                    <div className="border-b border-gray-100 pb-4 mb-6">
                        <h2 className="text-lg font-semibold text-gray-700">Basic info</h2>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Email</label>
                            <input type="email" placeholder="Enter Email" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Joining Date</label>
                            <input type="date" placeholder="Joining Date" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Confirm Password</label>
                            <div className="relative">
                                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Mobile Number</label>
                            <input type="text" placeholder="Mobile Number" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Gender</label>
                            <select className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 bg-white">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Designation</label>
                            <input type="text" placeholder="Designation" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Department</label>
                            <select className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 bg-white">
                                <option value="">Department</option>
                                <option value="cs">Computer Science</option>
                                <option value="math">Mathematics</option>
                                <option value="physics">Physics</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Date of Birth</label>
                            <input type="date" placeholder="Date of Birth" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Education</label>
                            <input type="text" placeholder="Education" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Address</label>
                            <textarea rows="4" className="border border-gray-200 rounded px-[0.95rem] py-2 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 resize-none"></textarea>
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <input 
                                type="file" 
                                className="w-full max-w-xs text-sm text-black border border-gray-200 rounded-md
                                file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0
                                file:text-sm file:font-semibold file:bg-gray-200 file:text-black
                                hover:file:bg-gray-300 cursor-pointer"
                            />
                        </div>

                        <div className="md:col-span-2 flex gap-3 mt-4">
                            <button 
                                type="submit"  
                                className="bg-[#6A73FC] border-[#6A73FC] hover:bg-[#5961e0] text-white px-5 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer"
                            >
                                Submit
                            </button>
                            <button 
                                type="reset" 
                                className="bg-[#ffd8d8] border-[#ffd8d8] text-[#FF1616] px-5 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default AddStaff