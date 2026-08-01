import React, { useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

const defaultData = [
  { name: "Beauty" },
  { name: "Fashion" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Beauty" },
  { name: "Fashion" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Fashion" },
  { name: "Lifestyle" },
];

const BlogCategoryList = ({ data = defaultData, onEdit, onUp, onDown, onDelete }) => {
  const [open, setOpen] = useState(true);

  const actionBtn =
    "text-[12px] hover:underline cursor-pointer transition-colors";

  return (
    <div className="bg-white rounded shadow-sm">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <span className="text-[#6A73FC] font-semibold text-[15px]">Blog List</span>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 overflow-x-auto">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr className="text-left text-gray-800">
                <th className="px-5 py-4 font-semibold whitespace-nowrap">S.No</th>
                <th className="px-5 py-4 font-semibold whitespace-nowrap">Name</th>
                <th className="px-5 py-4 font-semibold whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-4 text-[12px] text-gray-500">{index + 1}</td>
                  <td className="px-5 py-4 text-[12px] text-[#737B8B]">{item.name}</td>
                  <td className="px-5 py-4 text-[#737B8B]">
                    <div className="flex items-center justify-end gap-0.5 whitespace-nowrap">
                      <button onClick={() => onEdit && onEdit(item, index)} className={actionBtn}>
                        Edit
                      </button>
                      <span className="text-gray-300">|</span>
                      <button onClick={() => onUp && onUp(item, index)} className={actionBtn}>
                        Up
                      </button>
                      <span className="text-gray-300">|</span>
                      <button onClick={() => onDown && onDown(item, index)} className={actionBtn}>
                        down
                      </button>
                      <span className="text-gray-300">|</span>
                      <button onClick={() => onDelete && onDelete(item, index)} className={actionBtn}>
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryList;
