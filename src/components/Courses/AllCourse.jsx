import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'
import CourseCard from '../CourseCard.jsx'

const AllCourse = () => {
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

      {/* Main Content Div */}
      <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>
        
        <Header parentTitle="All Courses" childTitle="Courses" grandChildTitle="All Courses"/>

        {/* Page Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic1.jpg" 
            title="When Is the Best Time to Take an Education Course?" 
            description="Learn the fundamentals of programming and data structures."
            duration="4 Years"
            likes="540"
            professor="Jack Ronan"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic2.jpg" 
            title="Education Courses: A Guide to Unlocking Your Potential" 
            description="Master the art of leadership and organizational strategy."
            likes="540"
            duration="3 Years"
            professor="Jimmy Morris"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic3.jpg" 
            title="A Comprehensive Guide to Taking an Education Course" 
            description="Design and build the infrastructure of the future."
            duration="4 Years"
            likes="540"
            professor="Konne Backfield"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic4.jpg" 
            title="Why Should You Consider Taking an Education Course?" 
            description="Explore SEO, SEM, and social media marketing strategies."
            duration="6 Months"
            likes="540"
            professor="Nashid Martines"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic5.jpg" 
            title="When Is the Best Time to Take an Education Course?" 
            description="Unleash your creativity with modern design tools."
            duration="1 Year"
            likes="540"
            professor="Jack Ronan"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic6.jpg" 
            title="Education Courses: A Guide to Unlocking Your Potential" 
            description="Analyze complex data sets to drive business decisions."
            duration="2 Years"
            likes="540"
            professor="Jimmy Morris"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic7.jpg" 
            title="A Comprehensive Guide to Taking an Education Course" 
            description="Study of machines, kinematics, and thermodynamics."
            duration="4 Years"
            likes="540"
            professor="Konne Backfield"
          />
          <CourseCard 
            img="https://edumin.dexignlab.com/xhtml/images/courses/pic8.jpg" 
            title="Why Should You Consider Taking an Education Course?" 
            description="Understand human behavior and mental processes."
            duration="3 Years"
            likes="540"
            professor="Nashid Martines"
          />
        </div>

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </div>
    </div>
  )
}

export default AllCourse
