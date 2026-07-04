import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import Calendar from '../EventManagement/Calendar'

const HolidayCalendar = () => {

  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      <PageContainer className="flex flex-col gap-8">
        
        <Header parentTitle="Holiday Calendar" childTitle="Holiday" grandChildTitle="Holiday Calendar"/>

        <Calendar />

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </PageContainer>
    </div>
  )
}
export default HolidayCalendar
