import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PAGE_ITEMS = ['Privacy Policy', 'Contact Us', 'Important Information', 'About Us', 'Dummy Co'];

export default function PageAccordion() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('viewAll');
    const [checked, setChecked] = useState({});

    const toggleItem = (item) => {
        setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
    };

    const selectAll = () => {
        const all = {};
        PAGE_ITEMS.forEach((item) => { all[item] = true; });
        setChecked(all);
    };

    const deselectAll = () => {
        setChecked({});
    };

    return (
        <div className="border border-gray-200 rounded-md">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-3 py-2.5 cursor-pointer border-b border-gray-200"
            >
                <span className="font-semibold pl-1 text-sm text-[#6A73FC]">Page</span>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-3">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-3">
                        <button
                            onClick={() => setActiveTab('viewAll')}
                            className={`px-3 py-1 text-xs rounded font-medium ${activeTab === 'viewAll' ? 'bg-[#6A73FC] text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            View All
                        </button>
                        <button
                            onClick={() => setActiveTab('search')}
                            className={`px-3 py-1 text-xs rounded font-medium ${activeTab === 'search' ? 'bg-[#6A73FC] text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                            Search
                        </button>
                    </div>

                    {/* List Box */}
                    <div className="border border-gray-200 rounded p-3 space-y-2 text-sm text-gray-600 max-h-48 overflow-y-auto">
                        {PAGE_ITEMS.map((item, idx) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-gray-800">
                                <input
                                    type="checkbox"
                                    checked={!!checked[item]}
                                    onChange={() => toggleItem(item)}
                                    className="rounded text-[#6A73FC] focus:ring-[#6A73FC]/30 border-gray-300"
                                />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    {/* Action Links & Button */}
                    <div className="flex justify-between items-center text-xs mt-3">
                        <div className="space-x-2">
                            <span onClick={selectAll} className="text-[#6A73FC] cursor-pointer hover:underline">Select All</span>
                            <span className="text-gray-300">|</span>
                            <span onClick={deselectAll} className="text-gray-400 cursor-pointer hover:underline">Deselect All</span>
                        </div>
                    </div>
                    <button className="mt-3 bg-[#6A73FC] text-white text-xs px-3 py-1.5 rounded font-medium hover:bg-[#5961e0] transition-colors">
                        Add to Menu
                    </button>
                </div>
            </div>
        </div>
    );
}