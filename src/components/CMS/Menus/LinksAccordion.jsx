import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LinksAccordion() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border border-gray-200 rounded-md transition duration-300 ease-in-out">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-3 py-2.5 cursor-pointer border-b border-gray-200"
            >
                <span className="font-semibold text-[#6A73FC] pl-1 text-sm">Links</span>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-3 space-y-3 text-xs">
                    <div className="flex items-center">
                        <label className="pl-1.5 block font-bold mb-1 w-[40%] text-[12.5px]">URL</label>
                        <input type="text" placeholder="" className="w-[60%] border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]" />
                    </div>
                    <div className="flex items-center">
                        <label className="pl-1.5 block  font-bold mb-1 w-[40%] text-[12.5px]">Link Text</label>
                        <input type="text" placeholder="Menu items" className="w-[60%] border border-gray-200 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]" />
                    </div>
                </div>
            </div>
        </div>
    );
}