import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function LinksAccordion() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer border-b border-gray-50"
            >
                <span className="font-semibold text-gray-700 text-sm">Links</span>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </div>

            {isOpen && (
                <div className="p-4 space-y-3 text-xs">
                    <div>
                        <label className="block text-gray-600 font-semibold mb-1">URL</label>
                        <input type="text" placeholder="" className="w-full border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]" />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-semibold mb-1">Link Text</label>
                        <input type="text" placeholder="Menu items" className="w-full border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]" />
                    </div>
                </div>
            )}
        </div>
    );
}