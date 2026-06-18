import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'
import Profile from '../Professors/ProfessorProfile.jsx'

const StaffProfile = () => {
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
                <Profile prof={true}/>
        </div>
    )
}

export default StaffProfile;