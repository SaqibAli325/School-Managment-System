import React, { useState } from "react";
import { RiFilterFill, RiArrowUpSLine } from "@remixicon/react";

const ContentFilter = ({ onFilter, onRemove }) => {
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
    <div className="bg-white rounded shadow-sm mb-5">
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

          <div className="flex flex-wrap md:flex-nowrap items-end gap-6 w-full">
            {/* Title */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
              />
            </div>

            {/* Status */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
              >
                <option value="">Select Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleFilter}
                className="flex items-center gap-1.5 bg-[#F0F1FE] hover:bg-[#e2e4fd] text-[#6A73FC] text-sm font-medium px-4 py-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <RiFilterFill size={14} />
                Filter
              </button>

              <button
                onClick={handleRemove}
                className="bg-[#FFD8D8] hover:bg-[#ffc7c7] text-[#FF5252] text-sm font-medium px-4 py-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
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

export default ContentFilter;
