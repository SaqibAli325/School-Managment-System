import PageContainer from '../components/Layout/PageContainer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Calender from '../components/EventManagement/Calendar'

const EventManagement = () => {
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      <PageContainer className="flex flex-col gap-8">

        <div className="h-fit flex-none">
          <Header parentTitle="Events" childTitle="Events" grandChildTitle="Event Management" />
        </div>

        <div className="h-fit flex-none">
          <Calender />
        </div>

        <footer className="text-center pt-[4em] pb-4 text-sm text-gray-500 flex-none">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </PageContainer>
    </div>
  )
}

export default EventManagement
