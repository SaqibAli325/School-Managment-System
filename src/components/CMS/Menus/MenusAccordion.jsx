import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageAccordion from './PageAccordion';
import LinksAccordion from './LinksAccordion';

export default function MenusAccordion() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white rounded-md border border-gray-100 shadow-sm">
            {/* Header */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer border-b border-gray-50"
            >
                <span className="font-semibold text-[#6A73FC] text-sm">Menus</span>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 space-y-4">
                    <PageAccordion />
                    <LinksAccordion />
                </div>
            </div>
        </div>
    );
}
