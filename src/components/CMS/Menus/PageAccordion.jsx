import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function PageAccordion() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('viewAll');

    return (
        <div className="bg-white rounded-md border border-gray-100 shadow-sm mb-4">
            {/* Header */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer border-b border-gray-50"
            >
                <span className="font-semibold text-gray-700 text-sm">Page</span>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </div>

            {isOpen && (
                <div className="p-4">
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
                        {['Privacy Policy', 'Contact Us', 'Important Information', 'About Us', 'Dummy Co'].map((item, idx) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-gray-800">
                                <input type="checkbox" className="rounded text-[#6A73FC] focus:ring-[#6A73FC]/30 border-gray-300" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>

                    {/* Action Links & Button */}
                    <div className="flex justify-between items-center text-xs text-[#6A73FC] mt-3">
                        <div className="space-x-2">
                            <span className="cursor-pointer hover:underline">Select All</span>
                            <span>|</span>
                            <span className="cursor-pointer hover:underline">Deselect All</span>
                        </div>
                    </div>
                    <button className="mt-3 bg-[#6A73FC] text-white text-xs px-4 py-2 rounded font-medium hover:bg-[#5961e0] transition-colors">
                        Add to Menu
                    </button>
                </div>
            )}
        </div>
    );
}