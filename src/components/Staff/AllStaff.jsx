import React from 'react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header.jsx'
import Table from '../Professors/ProfessorsTable.jsx'

const NewPage = () => {

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>
                
                <Header parentTitle="All Staff" childTitle="Staff" grandChildTitle="All Staff"/>

                {/* Content goes here */}
                <Table title="All Staff" />

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default NewPage
