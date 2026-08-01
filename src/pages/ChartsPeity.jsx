import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import PageContainer from '../components/Layout/PageContainer.jsx'
import Header from '../components/Header'
import PeityCharts from '../components/Charts/PeityCharts.jsx'

const ChartsPeity = () => {
  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      <PageContainer>

        <Header parentTitle="Hi, welcome back!" childTitle="Charts" grandChildTitle="Piety" />

        <div className="mt-4">
          <PeityCharts />
        </div>

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </PageContainer>
    </div>
  )
}

export default ChartsPeity
