import React from 'react';

export default function MenuNameBar({ menuName, setMenuName }) {
    return (
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center bg-white p-4 rounded-md border border-gray-100 shadow-sm gap-4 mb-6">
            <div className="flex items-center gap-4 flex-1">
                <label className="text-sm font-semibold text-[#6A73FC] whitespace-nowrap">Menu Name</label>
                <input
                    type="text"
                    value={menuName}
                    onChange={(e) => setMenuName(e.target.value)}
                    className="border border-gray-200 rounded px-3 py-1.5 text-sm w-full max-w-xs focus:outline-none focus:ring-1 focus:ring-[#6A73FC]"
                />
            </div>
            <button className="bg-[#F4F5FA] hover:bg-gray-200 text-[#6A73FC] font-medium px-5 py-2 rounded text-sm transition-colors whitespace-nowrap">
                Save Menu
            </button>
        </div>
    );
}