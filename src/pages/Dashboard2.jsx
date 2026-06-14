import React, { useState, useEffect } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import IncomeChart from "../components/IncomeExpenseChart"
import ProfessorList from "../components/ProfessorList"
import StudentList from "../components/StudentListDashboard2"
import { MedalStatsCard, medals } from "../components/MedalStatsSection"
import SalaryStatus from "../components/SalaryStatus"

const Dashboard2 = () => {
    const stats = [
        {
            title: 'Total Students',
            num: 3280,
            percent: 80,
            days: 20,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#6A73FA'
        },
        {
            title: 'New Students',
            num: 245,
            percent: 50,
            days: 25,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#FF1616'
        },
        {
            title: 'Total Course',
            num: 28,
            percent: 76,
            days: 20,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#C62828'
        },
        {
            title: 'Fees Collection',
            num: '25160$',
            percent: 30,
            days: 30,
            color : '#ffffff',
            titleStyle : {
                size : '1rem',
                paddingTop: "1rem",
                fontWeight: 600,
            },
            lineColor : '#7ED321'
        },
    ]

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
        <div className="w-screen h-screen bg-[#F2F2F3]">
      <Sidebar />
      <Navbar />

    <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>
        {/* Top */}
        <div className="flex justify-between gap-8 max-[950px]:flex-col">
            {/* Left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[50%] max-[950px]:w-full">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        title={stat.title}
                        num={stat.num}
                        percent={stat.percent}
                        days={stat.days}
                        color={stat.color}
                        titleStyle={stat.titleStyle}
                        lineColor={stat.lineColor}
                    />
                ))}

                </div>
{/* Right */}
<div className="w-[50%] max-[950px]:w-full">
    <IncomeChart />
</div>
      </div>

        <div className="flex flex-col gap-0 mt-10">
            {/* First Row: Lists */}
            <div className="flex justify-between gap-6 items-stretch max-[1200px]:flex-col">
                <div className="w-[30%] max-[1200px]:w-full">
                    <ProfessorList />
                </div>
                <div className="w-[70%] max-[1200px]:w-full">
                    <StudentList />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6 items-stretch mt-5">
                <div className="w-full md:w-auto md:min-w-xs">
                    <MedalStatsCard {...medals[0]} />
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <MedalStatsCard {...medals[1]} />
                    <MedalStatsCard {...medals[2]} />
                </div>
            </div>
        </div>

<SalaryStatus />
                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
</div>
    </div>
  )
}

export default Dashboard2
