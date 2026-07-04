import React from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header.jsx'

const AddDepartment = () => {

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>
                
                <Header 
                    parentTitle="Add Department" 
                    childTitle="Departments" 
                    grandChildTitle="Add Department"
                />

                <div className="bg-white rounded shadow-sm p-4 sm:p-6 mt-4">
                    <div className="border-b border-gray-100 pb-4 mb-6">
                        <h2 className="text-lg font-semibold text-gray-700">Add Department</h2>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Department Name</label>
                            <input type="text" placeholder="Department Name" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Head Of Department</label>
                            <input type="text" placeholder="Head Of Department" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Department Start Date</label>
                            <input type="date" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Student Capacity</label>
                            <input type="text" placeholder="Student Capacity" className="border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30" />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2">Department Details</label>
                            <textarea placeholder="Department Details" rows="4" className="border border-gray-200 rounded px-[0.95rem] py-2 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 resize-none"></textarea>
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
            </PageContainer>
        </div>
    )
}

export default AddDepartment