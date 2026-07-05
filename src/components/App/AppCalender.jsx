import Calender from '../EventManagement/Calendar'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'

const AppCalender = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Calender reverse={true} />
            </PageContainer>
        </div>
    )
}

export default AppCalender
