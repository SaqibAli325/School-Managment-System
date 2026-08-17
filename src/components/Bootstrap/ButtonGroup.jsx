import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'
import ButtonCard from './ButtonGroup/ButtonCard'

const ButtonGroup = () => {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Sidebar />
            <Navbar />
            <PageContainer>
                <Header
                    parentTitle="Hi, Welcome back"
                    childTitle="Bootstrap"
                    grandChildTitle="Button Group"
                />

                <ButtonCard />
            </PageContainer>
        </div>
    )
}

export default ButtonGroup
