import React, { useState } from 'react';
import MenuHeader from './Menus/MenuHeader';
import MenusAccordion from './Menus/MenusAccordion';
import MenuNameBar from './Menus/MenuNameBar';
import MenuItemAccordion from './Menus/MenuItemAccordion';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer'
import Header from '../Header'

const INITIAL_MENU_ITEMS = [
    { id: 'contact-us', title: 'Contact Us', defaultOpen: true, url: 'https://bodyclub.dexignzone.com/xhtml/about-us.html' },
    { id: 'privacy-policy', title: 'Privacy Policy' },
    { id: 'terms-and-conditions', title: 'Terms and Conditions' },
    { id: 'about-us', title: 'About Us' },
    { id: 'important-information', title: 'Important Information' },
];

export default function Menus() {
    const [menuName, setMenuName] = useState('');
    const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
    const [draggedId, setDraggedId] = useState(null);

    const handleDragStart = (id) => (e) => {
        setDraggedId(id);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnter = (targetId) => (e) => {
        e.preventDefault();
        if (draggedId === null || draggedId === targetId) return;

        setMenuItems((prev) => {
            const fromIndex = prev.findIndex((item) => item.id === draggedId);
            const toIndex = prev.findIndex((item) => item.id === targetId);
            if (fromIndex === -1 || toIndex === -1) return prev;

            const updated = [...prev];
            const [moved] = updated.splice(fromIndex, 1);
            updated.splice(toIndex, 0, moved);
            return updated;
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e) => {
        e.preventDefault();
    };

    const handleDragEnd = () => {
        setDraggedId(null);
    };

    return (
        <div className="p-6 bg-[#F8F9FD] min-h-screen">
            <Navbar />
            <Sidebar />
            <PageContainer>
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
                    <div className="lg:col-span-4">
                        <MenusAccordion />
                    </div>

                    {/* Right Column (Menu Items Structure) */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-md border border-gray-100 shadow-sm">
                            <div className="border-b border-gray-100">
                                <MenuNameBar menuName={menuName} setMenuName={setMenuName} />
                            </div>

                            <div className="p-5">
                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold text-gray-800">Menus Structure</h3>
                                    <p className="text-xs text-gray-400 mt-0.5">Add Menus items from the column on the left.</p>
                                </div>

                                {/* Menu List Items */}
                                <div className="space-y-3">
                                    {menuItems.map((item) => (
                                        <MenuItemAccordion
                                            key={item.id}
                                            title={item.title}
                                            defaultOpen={item.defaultOpen}
                                            url={item.url}
                                            isDragging={draggedId === item.id}
                                            onDragStart={handleDragStart(item.id)}
                                            onDragEnter={handleDragEnter(item.id)}
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            onDragEnd={handleDragEnd}
                                        />
                                    ))}
                                </div>

                                {/* Bottom Actions Bar */}
                                <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-100">
                                    <button className="text-l text-[#6A73FC] font-[900] hover:underline">
                                        Delete Menu
                                    </button>
                                    <button className="bg-[#f8f5fc] border border-[#f8f5fc] text-[#673BB7] hover:bg-[#673BB7] hover:border-[#673BB7] hover:text-[#f8f5fc] font-medium px-5 py-2 rounded text-sm transition-colors cursor-pointer">
                                        Save Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}