import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'
import Cards from './MediaObject/Cards'
import FooterCard from './MediaObject/FooterCard'

const MediaObject = () => {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back" subtitle="Your business dashboard template" childTitle="Bootstrap" grandChildTitle="Media Object" />
                <Cards />
                <FooterCard />
                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default MediaObject
