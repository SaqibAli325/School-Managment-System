import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'
import { Printer } from 'lucide-react'

const invoiceItems = [
    { fessType: "Annual Fees", frequency: "Monthly", invoiceNumber: "#54620", date: "8 August 2021", amount: "999,00" },
    { fessType: "Annual Fees", frequency: "Yearly", invoiceNumber: "#54310", date: "7 August 2021", amount: "3.000,00" },
    { fessType: "Tuition Fees", frequency: "Monthly", invoiceNumber: "#24315", date: "6 August 2021", amount: "499,00" },
    { fessType: "Tuition Fees", frequency: "Yearly", invoiceNumber: "#32541", date: "5 August 2021", amount: "3.999,00" },
];

const FeesReciept = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

                <Header
                    parentTitle="Fees Receipt"
                    childTitle="Fees"
                    grandChildTitle="Fees Receipt"
                />

                <div className="bg-white rounded shadow-sm p-4 sm:p-6 mt-4">
                    {/* ===== Top bar: Invoice / Date / Status ===== */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-6 border-b border-gray-100">
                        <span className="text-sm font-medium text-gray-700">Invoice</span>
                        <span className="text-sm font-bold text-gray-800">01/12/2023</span>
                        <span className="text-sm text-gray-700">
                            <span className="font-bold">Status:</span> <span className="font-medium">Pending</span>
                        </span>
                    </div>

                    {/* ===== From / To ===== */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-sm">
                        <div>
                            <p className="font-bold text-gray-700 mb-2">From:</p>
                            <p className="font-bold text-gray-700">Webz Poland</p>
                            <p>Madalinskiego 8</p>
                            <p>#8901 Marmora Road Chi Minh City</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: +01 123 456 7890</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 mb-2">To:</p>
                            <p className="font-bold text-gray-700">Bob Mart</p>
                            <p>Attn: <span>Daniel Marek</span></p>
                            <p>#8901 Marmora Road Chi Minh City</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: +02 987 654 3210</p>
                        </div>
                    </div>

                    {/* ===== Items table ===== */}
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <table className="w-full min-w-150 text-sm">
                            <thead>
                                <tr className="text-left font-semibold text-gray-700">
                                    <th className="py-3 px-4">#</th>
                                    <th className="py-3 px-4">Fees Type</th>
                                    <th className="py-3 px-4">Frequency</th>
                                    <th className="py-3 px-4">Invoice Number</th>
                                    <th className="py-3 px-4">Date</th>
                                    <th className="py-3 px-4">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceItems.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"}>
                                        <td className="py-3 px-4 text-[#737b8b]">{index + 1}</td>
                                        <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.fessType}</td>
                                        <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.frequency}</td>
                                        <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.invoiceNumber}</td>
                                        <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.date}</td>
                                        <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">${item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ===== Summary ===== */}
                    <div className="flex justify-end mt-6">
                        <div className="w-full sm:w-80">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600 font-bold">Subtotal</span>
                                <span className="text-sm text-gray-700">$8.497,00</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600">Discount (20%)</span>
                                <span className="text-sm text-gray-700 ">$1.699,40</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-sm text-gray-600 font-bold">VAT (10%)</span>
                                <span className="text-sm text-gray-700">$679,76</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <span className="text-sm font-bold text-gray-800">Total</span>
                                <span className="text-sm font-bold text-gray-800">$7.477,36</span>
                            </div>
                        </div>
                    </div>

                    {/* ===== Action buttons ===== */}
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            className="bg-[#6A73FC] hover:bg-[#5961e0] text-white px-5 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer"
                        >
                            Proceed to payment
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer"
                        >
                            <Printer size={16} />
                            Print
                        </button>
                    </div>
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>


            </div>
        </div>
    )
}

export default FeesReciept