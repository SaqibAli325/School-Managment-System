import React, { useState } from 'react';
import { Move, Plus, Minus } from 'lucide-react';

export default function MenuItemAccordion({ title, defaultOpen = false, url = "", navLabel = "", titleAttr = "" }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-md overflow-hidden bg-white mb-3">
            {/* Header Bar */}
            <div className="flex items-center justify-between bg-white px-3 py-2.5">
                <div className="flex items-center gap-3">
                    <div className="bg-[#6A73FC] text-white p-1.5 rounded cursor-grab">
                        <Move size={16} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{title}</span>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
            </div>

            {/* Accordion Content */}
            {isOpen && (
                <div className="p-4 border-t border-gray-100 bg-white space-y-3">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">URL</label>
                        <input
                            type="text"
                            defaultValue={url}
                            className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Navigation Label</label>
                            <input
                                type="text"
                                defaultValue={navLabel || title}
                                className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Title Attribute</label>
                            <input
                                type="text"
                                defaultValue={titleAttr || title}
                                className="w-full border border-gray-200 rounded px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#6A73FC]"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 text-xs pt-1">
                        <button className="text-gray-500 hover:underline">Remove</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-gray-500 hover:underline" onClick={() => setIsOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}