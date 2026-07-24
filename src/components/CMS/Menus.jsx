import React, { useState } from 'react';
import MenuHeader from './Menus/MenuHeader';
import PageAccordion from './Menus/PageAccordion';
import LinksAccordion from './Menus/LinksAccordion';
import MenuNameBar from './Menus/MenuNameBar';
import MenuItemAccordion from './Menus/MenuItemAccordion';

export default function Menus() {
    const [menuName, setMenuName] = useState('Information');

    return (
        <div className="p-6 bg-[#F8F9FD] min-h-screen">
            {/* Top Breadcrumb Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-[#6A73FC]">Menu</h1>
                <div className="text-xs text-gray-400 font-medium">
                    CMS &gt; <span className="text-[#6A73FC]">Menu</span>
                </div>
            </div>

            {/* Top Selector Box (Jo aapne pehle se ready kiya tha) */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 mb-6">
                <MenuHeader />
            </div>

            {/* Main Content 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column (Accordion Cards) */}
                <div className="lg:col-span-4 space-y-4">
                    <PageAccordion />
                    <LinksAccordion />
                </div>

                {/* Right Column (Menu Items Structure) */}
                <div className="lg:col-span-8">
                    <MenuNameBar menuName={menuName} setMenuName={setMenuName} />

                    <div className="bg-white p-5 rounded-md border border-gray-100 shadow-sm">
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-gray-800">Menus Structure</h3>
                            <p className="text-xs text-gray-400 mt-0.5">Add Menus items from the column on the left.</p>
                        </div>

                        {/* Menu List Items */}
                        <div className="space-y-3">
                            <MenuItemAccordion
                                title="Contact Us"
                                defaultOpen={true}
                                url="https://bodyclub.dexignzone.com/xhtml/about-us.html"
                            />
                            <MenuItemAccordion title="Privacy Policy" />
                            <MenuItemAccordion title="Terms and Conditions" />
                            <MenuItemAccordion title="About Us" />
                            <MenuItemAccordion title="Important Information" />
                        </div>

                        {/* Bottom Actions Bar */}
                        <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-100">
                            <button className="text-xs text-[#6A73FC] font-semibold hover:underline">
                                Delete Menu
                            </button>
                            <button className="bg-[#F4F5FA] hover:bg-gray-200 text-[#6A73FC] font-medium px-5 py-2 rounded text-sm transition-colors">
                                Save Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}