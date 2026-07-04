import PageContainer from '../components/Layout/PageContainer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AllStudents from '../components/Students/AllStudents'


const Students = () => {
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      <PageContainer>

        <Header parentTitle="All Students" childTitle="Students" grandChildTitle="All Students" />

        <AllStudents />

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </PageContainer>
    </div>
  )
}
export default Students
