import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer'
import Header from '../Header'
import TopCards from './Cards/TopCards'
import ColourFullCards from './Cards/ColourFullCards'
import StudentCard from './Cards/StudentsCard'

function BootstrapCards() {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Bootstrap" childTitle="Bootstrap" grandChildTitle=" Card" />


                <TopCards />
                <ColourFullCards />
                <StudentCard />

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default BootstrapCards