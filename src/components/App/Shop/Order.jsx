import { useState } from 'react'
import { FaCheck, FaSyncAlt, FaRegClock, FaBars } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const statusStyles = {
    Completed: { bg: 'bg-[#7ED321]', icon: FaCheck },
    Processing: { bg: 'bg-[#5B7DFA]', icon: FaSyncAlt },
    'On Hold': { bg: 'bg-[#FF1616]', icon: FaRegClock },
    Pending: { bg: 'bg-[#FFAA16]', icon: FaBars },
}

const orders = [
    { id: '#181', name: 'Ricky Antony', email: 'ricky@example.com', date: '20/04/2020', address: '2392 Main Avenue, Penasauka, New Jersey 02149', via: 'Via Flat Rate', status: 'Completed', amount: 99 },
    { id: '#182', name: 'Kin Rossow', email: 'kin@example.com', date: '20/04/2020', address: '1 Hollywood Blvd, Beverly Hills, California 90210', via: 'Via Free Shipping', status: 'Processing', amount: 120 },
    { id: '#183', name: 'Merry Diana', email: 'merry@example.com', date: '30/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Link Road', status: 'On Hold', amount: 70 },
    { id: '#184', name: 'Bucky Robert', email: 'bucky@example.com', date: '30/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Free Shipping', status: 'Pending', amount: 92 },
    { id: '#185', name: 'Rocky Zampa', email: 'rocky@example.com', date: '30/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Free Road', status: 'On Hold', amount: 120 },
    { id: '#186', name: 'Ricky John', email: 'ricky@example.com', date: '30/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Free Shipping', status: 'Processing', amount: 145 },
    { id: '#187', name: 'Cristofer Henric', email: 'cristofer@example.com', date: '30/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Flat Rate', status: 'Completed', amount: 55 },
    { id: '#188', name: 'Brate Lee', email: 'lee@example.com', date: '29/04/2020', address: '1 Infinite Loop, Cupertino, California 90210', via: 'Via Link Road', status: 'On Hold', amount: 90 },
    { id: '#189', name: 'Thomas Stephenson', email: 'Stephenson@example.com', date: '29/04/2020', address: '116 Ballifeary Road, Bamff', via: 'Via Flat Rate', status: 'Processing', amount: 52 },
    { id: '#190', name: 'Evie Singh', email: 'eviewsing@example.com', date: '29/04/2020', address: '54 Castledore Road, Tunstead', via: 'Via Flat Rate', status: 'Completed', amount: 90 },
    { id: '#191', name: 'David Peters', email: 'peter@example.com', date: '29/04/2020', address: 'Rhyd Y Groes, Rhosgoch, LL66 0AT', via: 'Via Link Road', status: 'Completed', amount: 69 },
    { id: '#192', name: 'Jennifer Johnson', email: 'jennifer@example.com', date: '28/04/2020', address: 'Rhyd Y Groes, Rhosgoch, LL66 0AT', via: 'Via Flat Rate', status: 'Processing', amount: 112 },
]

const Order = () => {
    const [checked, setChecked] = useState({})
    const [allChecked, setAllChecked] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)

    const toggleAll = () => {
        const next = !allChecked
        setAllChecked(next)
        const map = {}
        orders.forEach((o) => { map[o.id] = next })
        setChecked(map)
    }

    const toggleOne = (id) => {
        setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Order" />

                <div className="bg-white rounded mt-6 p-6 overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                            <tr className="text-left text-[15px] font-semibold border-b border-gray-100">
                                <th className="pb-4 pr-8 w-[30px]">
                                    <input
                                        type="checkbox"
                                        checked={allChecked}
                                        onChange={toggleAll}
                                        className="w-4 h-4 rounded accent-[#6A73FA] cursor-pointer"
                                    />
                                </th>
                                <th className="pb-4 pr-3">Order</th>
                                <th className="pb-4 pr-3">Date</th>
                                <th className="pb-4 pr-3">Ship To</th>
                                <th className="pb-4 pr-3">Status</th>
                                <th className="pb-4 pr-3">Amount</th>
                                <th className="pb-4 w-[30px]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => {
                                const { bg, icon: Icon } = statusStyles[order.status]
                                return (
                                    <tr key={order.id} className="border-b border-gray-100 last:border-b-0 align-top">
                                        <td className="py-4 pr-3">
                                            <input
                                                type="checkbox"
                                                checked={!!checked[order.id]}
                                                onChange={() => toggleOne(order.id)}
                                                className="w-4 h-4 rounded accent-[#6A73FA] cursor-pointer"
                                            />
                                        </td>
                                        <td className="py-4 pr-3 min-w-[190px]">
                                            <p className="text-[14px] text-[#888888]">
                                                <span className="font-semibold">{order.id}</span> by <span className="font-semibold">{order.name}</span>
                                            </p>
                                            <a className="text-[#888888] text-[13px] cursor-pointer hover:underline">{order.email}</a>
                                        </td>
                                        <td className="py-4 pr-3 text-[14px] text-[#888888] whitespace-nowrap">{order.date}</td>
                                        <td className="py-4 pr-3 text-[14px] max-w-[280px]">
                                            <span className="text-[#888888]">{order.name}</span>
                                            <span className="text-gray-500">, {order.address}</span>
                                            <p className="text-gray-400 text-[13px] mt-0.5">{order.via}</p>
                                        </td>
                                        <td className="py-4 pr-3">
                                            <span className={`inline-flex items-center gap-1.5 text-white text-[9px] p-1 font-medium  rounded ${bg}`}>
                                                {order.status} <Icon size={11} />
                                            </span>
                                        </td>
                                        <td className="py-4 pr-3 text-[14px] font-medium whitespace-nowrap text-[#888888]">${order.amount}</td>
                                        <td className="py-4 relative">
                                            <button
                                                onClick={() => setOpenMenu(openMenu === order.id ? null : order.id)}
                                                className="text-[#6a73fa] hover:bg-[#F0F1FE] cursor-pointer p-1 hover:rounded p-2"
                                            >
                                                <BsThreeDots size={18} />
                                            </button>
                                            {openMenu === order.id && (
                                                <div className="absolute right-0 top-9 z-10 bg-white shadow-lg rounded border border-gray-100 py-2 w-[130px] text-[13px]">
                                                    <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-[#737B8B] hover:text-black">Completed</p>
                                                    <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-[#737B8B] hover:text-black">Processing</p>
                                                    <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-[#737B8B] hover:text-black">On Hold</p>
                                                    <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-[#737B8B] hover:text-black ">Pending</p>
                                                    <p className="border-t border-black/17 px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-red-500">Delete</p>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default Order
