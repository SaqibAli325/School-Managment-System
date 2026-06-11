import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Card from '../components/Card.jsx'
import Chart from '../components/ChartsDashboard.jsx'
import { RiTeamLine } from '@remixicon/react'

const Dashboard1 = () => {
  const stats = [
    {
      title: 'total students',
      num: 3280,
      percent: 80,
      days: 20,
      color : '#6A73FA'
    },
    {
      title: 'new students',
      num: 245,
      percent: 50,
      days: 25,
      color : '#FFAA16'
    },
    {
      title: 'total course',
      num: 28,
      percent: 76,
      days: 20,
      color : '#673BB7'
    },
    {
      title: 'fees collection',
      num: 25160,
      percent: 30,
      days: 30,
      color : '#FB1515'
    },
  ]
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar/>
      <Sidebar />
      <div className='absolute right-0 bottom-0 w-[calc(100vw-250px)] h-[calc(100vh-65px)] p-4 overflow-y-auto'>
    {/* Cards */}
    <div className='flex justify-between gap-3 px-5 pt-5'>
      {stats.map((stat, index) => (
        <Card key={index} title={stat.title} num={stat.num} percent={stat.percent} days={stat.days} color={stat.color} />
      ))}
    </div>
    
    {/* Charts */}
    <Chart />
      </div>
    </div>
  )
}

export default Dashboard1
