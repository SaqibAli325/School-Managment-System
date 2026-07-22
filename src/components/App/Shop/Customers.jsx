import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const avatarColors = ['bg-[#7ED321]', 'bg-[#5B7DFA]', 'bg-[#FF7A7A]', 'bg-[#FFAA16]', 'bg-[#6A73FC]']

const baseCustomers = [
    { name: 'Ricky Antony', email: 'info@example.com', phone: '(201) 200-1851', address: '2392 Main Avenue, Penasauka', joined: '30/03/2018', photo: null },
    { name: 'Emma Watson', email: 'info@example.com', phone: '(212) 228-8403', address: '2289 5th Avenue, New York', joined: '11/07/2017', photo: 'https://i.pravatar.cc/80?img=47' },
    { name: 'Rowen Atkinson', email: 'info@example.com', phone: '(201) 200-1851', address: '112 Bostwick Avenue, Jersey City', joined: '05/04/2016', photo: null },
    { name: 'Antony Hopkins', email: 'info@example.com', phone: '(901) 324-3127', address: '3448 Ile De France St #242,', joined: '05/04/2018', photo: 'https://i.pravatar.cc/80?img=12' },
    { name: 'Jennifer Schramm', email: 'info@example.com', phone: '(828) 382-9631', address: '659 Hannah Street, Charlotte', joined: '17/03/2016', photo: 'https://i.pravatar.cc/80?img=32' },
    { name: 'Raymond Mims', email: 'info@example.com', phone: '(562) 468-5646', address: '2298 Locust Court, Artesia', joined: '12/07/2014', photo: null },
    { name: 'Michael Jenkins', email: 'info@example.com', phone: '(302) 613-8829', address: '4678 Maud Street, Philadelphia', joined: '15/06/2014', photo: 'https://i.pravatar.cc/80?img=51' },
    { name: 'Kristine Cadena', email: 'info@example.com', phone: '(317) 273-7814', address: '3412 Crestview Manor, Indianapolis', joined: '15/04/2015', photo: 'https://i.pravatar.cc/80?img=25' },
]

const customers = [...baseCustomers, ...baseCustomers]

const Avatar = ({ customer, index }) => {
    if (customer.photo) {
        return <img src={customer.photo} alt={customer.name} className="w-9 h-9 rounded-full object-cover" />
    }
    const color = avatarColors[index % avatarColors.length]
    return (
        <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-semibold ${color}`}>
            {customer.name.charAt(0)}
        </span>
    )
}

const Customers = () => {
    const [checked, setChecked] = useState({})
    const [allChecked, setAllChecked] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)

    const toggleAll = () => {
        const next = !allChecked
        setAllChecked(next)
        const map = {}
        customers.forEach((_, i) => { map[i] = next })
        setChecked(map)
    }

    const toggleOne = (i) => {
        setChecked((prev) => ({ ...prev, [i]: !prev[i] }))
    }

    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Customers" />

                <div className="bg-white rounded mt-6 p-6 overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                            <tr className="text-left text-[15px] font-semibold">
                                <th className="pb-4 pr-3 pl-4 w-[30px]">
                                    <input
                                        type="checkbox"
                                        checked={allChecked}
                                        onChange={toggleAll}
                                        className="w-4 h-4 rounded accent-[#6A73FA] cursor-pointer"
                                    />
                                </th>
                                <th className="pb-4 pr-3">Name</th>
                                <th className="pb-4 pr-3">Email</th>
                                <th className="pb-4 pr-3">Phone</th>
                                <th className="pb-4 pr-3">Billing Address</th>
                                <th className="pb-4 pr-3">Joined</th>
                                <th className="pb-4 w-[30px]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, i) => (
                                <tr key={i} className={`align-middle ${i % 2 === 0 ? 'bg-[#F5F5F6]' : 'bg-white'}`}>
                                    <td className="py-3.5 pr-3 pl-4 rounded-l">
                                        <input
                                            type="checkbox"
                                            checked={!!checked[i]}
                                            onChange={() => toggleOne(i)}
                                            className="w-4 h-4 rounded accent-[#6A73FA] cursor-pointer"
                                        />
                                    </td>
                                    <td className="py-3.5 pr-3 min-w-[190px]">
                                        <div className="flex items-center gap-3">
                                            <Avatar customer={customer} index={i} />
                                            <span className="font-semibold text-[14px]">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3.5 pr-3 text-[14px] text-gray-500 whitespace-nowrap">{customer.email}</td>
                                    <td className="py-3.5 pr-3 text-[14px] text-gray-500 whitespace-nowrap">{customer.phone}</td>
                                    <td className="py-3.5 pr-3 text-[14px] text-gray-500 max-w-[220px]">{customer.address}</td>
                                    <td className="py-3.5 pr-3 text-[14px] text-gray-500 whitespace-nowrap">{customer.joined}</td>
                                    <td className="py-3.5 pr-3 relative rounded-r">
                                        <button
                                            onClick={() => setOpenMenu(openMenu === i ? null : i)}
                                            className="text-gray-400 hover:text-[#6A73FA] cursor-pointer p-1"
                                        >
                                            <BsThreeDots size={18} />
                                        </button>
                                        {openMenu === i && (
                                            <div className="absolute right-3 top-9 z-10 bg-white shadow-lg rounded border border-gray-100 py-2 w-[130px] text-[13px]">
                                                <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer">Edit</p>
                                                <p className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer text-red-500">Delete</p>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
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

export default Customers
