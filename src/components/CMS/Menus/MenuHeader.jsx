import React, { useState } from "react";
import { RiFilterFill, RiArrowUpSLine, RiFileListFill } from "@remixicon/react";

const MenusHeader = ({ onFilter, onRemove }) => {
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("2026-07-22");

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
        <div className="bg-white rounded shadow-sm mt-5">
            {/* Accordion header */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
            >
                <div className="flex items-center gap-2 text-[#6A73FC] font-semibold text-[15px]">
                    <RiFileListFill size={16} />
                    <span>Menus</span>
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
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 w-full">
                        {/* 1. Title */}
                        <div className="flex-1 w-full">
                            <p className="text-[0.875rem] font-[600] text-center mb-0">
                                Select a menu to edit: <span className="text-red-600">*</span>
                            </p>
                        </div>

                        {/* 2. Select Box */}
                        <div className="flex-1 w-full">
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
                            >
                                <option value="">Select Menu</option>
                                <option value="published">India</option>
                                <option value="draft">Information</option>
                                <option value="pending">New Menu</option>
                                <option value="pending">Page Menu</option>
                            </select>
                        </div>

                        {/* 3. Action Buttons / Link */}
                        <div className="flex-1 w-full flex items-center gap-5">
                            <button className="bg-[#6A73FC] border-[#6A73FC] hover:bg-[#5961e0] text-white px-5 py-[0.55rem] rounded-[5px] transition-colors font-medium text-[.9375rem] cursor-pointer">
                                Select
                            </button>
                            <span className="text-sm text-gray-600">or</span>
                            <p className="text-[#6A73FC] cursor-pointer whitespace-nowrap">
                                create new menu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenusHeader;