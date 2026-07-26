import React from 'react';

export default function MenuNameBar({ menuName, setMenuName }) {
    return (
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center bg-white p-4 gap-4">
            <div className="flex items-center gap-4 flex-1">
                <label className="text-sm font-semibold text-[#6A73FC] whitespace-nowrap">Menu Name</label>
                <input
                    type="text"
                    value={menuName}
                    onChange={(e) => setMenuName(e.target.value)}
                    placeholder="Information"
                    className="border border-gray-200 rounded px-3 py-1.5 text-sm w-full max-w-xs focus:outline-none focus:ring-1 focus:ring-[#6A73FC]"
                />
            </div>
            <button className="cursor-pointer bg-[#f8f5fc] border border-[#f8f5fc] text-[#673BB7] hover:bg-[#673BB7] hover:border-[#673BB7] hover:text-[#f8f5fc] font-medium px-5 py-2 rounded text-sm transition-colors whitespace-nowrap">
                Save Menu
            </button>
        </div>
    );
}