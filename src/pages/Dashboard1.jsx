import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Card from '../components/Card.jsx'
import Chart from '../components/ChartsDashboard.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Editor from '../components/ComposeEmail.jsx'
import Toppers from '../components/ExamToppers.jsx'
import StudentList from '../components/StudentList.jsx'
import { RiTeamLine ,RiUserLine,RiGraduationCapLine,RiMoneyDollarCircleLine} from '@remixicon/react'

const Dashboard1 = () => {
  const stats = [
    {
      title: 'TOTAL STUDENTS',
      num: 3280,
      percent: 80,
      days: 20,
      color : '#6A73FA',
      img : RiTeamLine
    },
    {
      title: 'NEW STUDENTS',
      num: 245,
      percent: 50,
      days: 25,
      color : '#FFAA16',
      img : RiUserLine
    },
    {
      title: 'TOTAL COURSE',
      num: 28,
      percent: 76,
      days: 20,
      color : '#673BB7',
      img : RiGraduationCapLine
    },
    {
      title: 'FEES COLLECTION',
      num: 25160,
      percent: 30,
      days: 30,
      color : '#FB1515',
      img : RiMoneyDollarCircleLine
    },
  ];

  const courses = [
    {
      title: "When Is the Best Time to Take an Education Course?",
      likes: 230,
      professor: 'Jack Ronan',
      img: 'https://edumin.dexignlab.com/xhtml/images/courses/pic1.jpg'
    },
    {
      title: "Education Courses: A Guide to Unlocking Your Potential",
      likes: 450,
      professor: 'Jimmy Morris',
      img: 'https://edumin.dexignlab.com/xhtml/images/courses/pic2.jpg'
    },
    {
      title: "A Comprehensive Guide to Taking an Education Course",
      likes: 120,
      professor: 'Konne Backfield',
      img: 'https://edumin.dexignlab.com/xhtml/images/courses/pic3.jpg'
    },
    {
      title: "Why Should You Consider Taking an Education Course?",
      likes: 275,
      professor: 'Nashid Martines',
      img: 'https://edumin.dexignlab.com/xhtml/images/courses/pic4.jpg'
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
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar/>
      <Sidebar/>
      {/* Main Div */}
      {/** Use explicit classes so Tailwind generates both variants */}
      <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>
    {/* Cards */}
    <div className='flex justify-between gap-6  pt-5 max-[1010px]:flex-col'>
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          title={stat.title} 
          num={stat.num} 
          percent={stat.percent} 
          days={stat.days} 
          color={stat.color} 
          img={stat.img} 
          textColor={'white'}
        />
      ))}
    </div>
    
    {/* Charts */}
    <Chart />
    
    {/* Course Card */}
    <div className='flex max-[1010px]:flex-col'>
    {courses.map((course, index) => {
      return <CourseCard key={index} title={course.title} likes={course.likes} professor={course.professor} img={course.img} />
    })}
    </div>

<div className='flex gap-3  items-stretch mt-4 max-[860px]:flex-col'>
    <div className='flex-1 h-130'>
      <Editor />
    </div>

    <div className='flex-1 h-130'>
      <Toppers />
    </div>
  </div>
  {/* Student List */}
  <StudentList />
      <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
      </div>
    </div>
  )
}
export default Dashboard1
