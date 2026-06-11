import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Card from '../components/Card.jsx'
import { Users, UserPlus, GraduationCap, DollarSign } from "lucide-react";
import { RiTeamLine } from '@remixicon/react'

const Dashboard1 = () => {
  const stats = [
    { color: "blue",   icon: <Users size={24} />,          label: "Total Students",  value: "3280",    progress: 80, footer: "80% Increase in 20 Days" },
    { color: "orange", icon: <UserPlus size={24} />,        label: "New Students",    value: "245",     progress: 50, footer: "50% Increase in 25 Days" },
    { color: "purple", icon: <GraduationCap size={24} />,   label: "Total Course",    value: "28",      progress: 76, footer: "76% Increase in 20 Days" },
    { color: "red",    icon: <DollarSign size={24} />,      label: "Fees Collection", value: "25160$",  progress: 30, footer: "30% Increase in 30 Days" },
  ];
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar/>
      <Sidebar />
      <div className='absolute right-0 bottom-0 w-[calc(100vw-250px)] h-[calc(100vh-65px)] p-1rem'>
    {/* Cards */}
    <div className="flex gap-4 flex-wrap p-4">
      {stats.map((s, i) => <Card key={i} {...s} />)}
    </div>
      </div>
    </div>
  )
}

export default Dashboard1
