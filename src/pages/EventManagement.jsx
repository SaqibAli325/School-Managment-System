import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/EventManagement/Header'
import Calender from '../components/EventManagement/Calendar'

const EventManagement = () => {
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

        <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-56px)] p-4 overflow-y-auto overflow-x-hidden`}>
            
            <Header />
            <Calender />
            <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
            </footer>
        </div>
    </div>
  )
}

export default EventManagement
