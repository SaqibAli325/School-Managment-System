import React from 'react';
import EmailTemplateFilter from './EmailTemplate/EmailTemplateFilter';
import EmailTemplateTable from './EmailTemplate/EmailTemplateTable';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'

export default function EmailTemplate() {
    return (
        <div className="p-6 bg-[#F8F9FD] min-h-screen">
            <Navbar />
            <Sidebar />
            <PageContainer>
                {/* Top Breadcrumb Header */}
                <Header parentTitle="Email Template" childTitle="CMS" grandChildTitle="Email Template" />

                {/* Filter Accordion */}
                <div className="mb-6 mt-5">
                    <EmailTemplateFilter />
                </div>

                {/* New Email Template Button */}
                <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white px-5 py-2.5 rounded-md transition-colors font-medium text-sm mb-6 cursor-pointer">
                    New Email Template
                </button>

                {/* Email Template List */}
                <EmailTemplateTable />
            </PageContainer>
        </div>
    );
}
