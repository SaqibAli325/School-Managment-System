import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import StudentDashboard from '../components/StudentDashboard'
import AssignTaskPage from '../components/AssignTaskPage'
import NewStudentList from '../components/NewStudentList'

const Dashboard3 = () => {
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

    <div className="absolute right-0 bottom-0 w-[calc(100vw-250px)] h-[calc(100vh-65px)] p-4 overflow-y-auto">
    <StudentDashboard />
    <AssignTaskPage />
    <NewStudentList />

    <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
    </div>
    </div>
  )
}

export default Dashboard3
