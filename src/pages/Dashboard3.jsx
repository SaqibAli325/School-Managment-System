import PageContainer from '../components/Layout/PageContainer'
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

      <PageContainer>
        <StudentDashboard />
        <AssignTaskPage />
        <NewStudentList />

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </PageContainer>
    </div>
  )
}

export default Dashboard3
