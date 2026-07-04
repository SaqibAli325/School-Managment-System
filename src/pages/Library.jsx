import PageContainer from '../components/Layout/PageContainer'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import AllLibrary from '../components/Library/AllLibrary.jsx'

const NewPage = () => {
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="New Page" childTitle="Pages" grandChildTitle="New Page" />

                <AllLibrary />

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default NewPage
