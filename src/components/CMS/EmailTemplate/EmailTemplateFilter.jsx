import React, { useState } from "react";
import { RiFilterFill, RiArrowUpSLine } from "@remixicon/react";

const EmailTemplateFilter = ({ onFilter, onRemove }) => {
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("2026-07-26");

    const handleFilter = () => {
        onFilter && onFilter({ title, status, date });
    };

    const handleRemove = () => {
        setTitle("");
        setStatus("");
        setDate("");
        onRemove && onRemove();
    };

    return (
        <div className="bg-white rounded-md shadow-sm border border-gray-100">
            {/* Accordion header */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
            >
                <div className="flex items-center gap-2 text-[#6A73FC] font-semibold text-[15px]">
                    <RiFilterFill size={16} />
                    <span>Filter</span>
                </div>
                <RiArrowUpSLine
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
                />
            </div>

            {/* Accordion body */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-gray-100 px-5 pt-5 pb-5">
                    <div className="flex flex-wrap lg:flex-nowrap items-end gap-4 w-full">
                        {/* Title */}
                        <div className="flex-1 w-full min-w-[160px]">
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                            />
                        </div>

                        {/* Status */}
                        <div className="flex-1 w-full min-w-[160px]">
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Status</label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
                            >
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Date */}
                        <div className="flex-1 w-full min-w-[160px]">
                            <label className="block text-sm font-semibold text-gray-800 mb-2">Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button
                                onClick={handleFilter}
                                className="flex items-center gap-1.5 bg-[#F0F1FE] hover:bg-[#e2e4fd] text-[#6A73FA] px-4 py-2.5 rounded-md transition-colors font-medium text-sm cursor-pointer whitespace-nowrap"
                            >
                                <RiFilterFill size={14} />
                                Filter
                            </button>
                            <button
                                onClick={handleRemove}
                                className="bg-[#FFD8D8] hover:bg-[#ffc4c4] text-[#FF1616] px-4 py-2.5 rounded-md transition-colors font-medium text-sm cursor-pointer whitespace-nowrap"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailTemplateFilter;
