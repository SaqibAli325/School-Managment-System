import PageContainer from '../components/Layout/PageContainer'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'
import AllDepartments from '../components/Departments/AllDepartments'


const AddDepartments = () => {
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header
                    parentTitle="Add Department"
                    childTitle="Departments"
                    grandChildTitle="Add Department"
                />

                {/* Content goes here */}
                <AllDepartments />


                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default AddDepartments
