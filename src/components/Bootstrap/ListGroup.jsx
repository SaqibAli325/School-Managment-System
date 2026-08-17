import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'
import ListCard from './ListGroup/ListCard'
import CustomContext from './ListGroup/CustomContext'
import Contextual from './ListGroup/Contextual'
import ListTab from './ListGroup/ListTab'

const ListGroup = () => {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back" childTitle="Bootstrap" grandChildTitle="ListGroup" />
                <ListCard />

                <div className="w-full min-h-screen bg-gray-100 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
                        <CustomContext />
                        <Contextual />
                        <div className="lg:col-span-2">
                            <ListTab />
                        </div>
                    </div>
                </div>
                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default ListGroup