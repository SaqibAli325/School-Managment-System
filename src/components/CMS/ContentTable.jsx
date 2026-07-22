import React, { useState } from "react";
import { RiFileTextFill, RiArrowUpSLine, RiPencilFill, RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const defaultData = [
  { title: "About Us", status: "Published", modified: "18 Feb, 2024" },
  { title: "FAQ", status: "Published", modified: "13 Jan, 2024" },
  { title: "Pricing", status: "Published", modified: "13 Jan, 2024" },
  { title: "Schedule", status: "Published", modified: "13 Jan, 2024" },
  { title: "Under Maintenance", status: "Published", modified: "25 Jan, 2024" },
];

const ContentTable = ({ data = defaultData, onEdit, onDelete }) => {
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const totalRecords = 8;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded shadow-sm">
      {/* Accordion header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2 text-[#6A73FC] font-semibold text-[15px]">
          <RiFileTextFill size={16} />
          <span>Contact List</span>
        </div>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[650px]">
              <thead>
                <tr className="text-left text-gray-800">
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">S.No</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Title</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Status</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Modified</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-4 text-gray-500">{index + 1}</td>
                    <td className="px-5 py-4 text-[#737B8B]">{item.title}</td>
                    <td className="px-5 py-4 text-[#737B8B]">{item.status}</td>
                    <td className="px-5 py-4 text-[#737B8B] whitespace-nowrap">{item.modified}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onEdit && onEdit(item, index)}
                          className="bg-[#FFAA16] hover:bg-[#f29e00] text-white p-2 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <RiPencilFill size={14} />
                        </button>
                        <button
                          onClick={() => onDelete && onDelete(item, index)}
                          className="bg-[#FF1616] hover:bg-[#e60f0f] text-white p-2 rounded-md transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <RiCloseLine size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer / pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 text-[12px] text-gray-500 pb-6">
            <p>
              Page {currentPage} of {totalPages}, showing {data.length} records out
              of {totalRecords} total, starting on record 1, ending on 2
            </p>

            <div className="inline-flex rounded-md">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2.5 py-1.5 flex items-center justify-center rounded-l-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <RiArrowLeftSLine size={16} />
              </button>

              {/* Page Numbers */}
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => goToPage(num)}
                  className={`px-4 py-2 -ml-px flex items-center justify-center border text-xs font-medium transition-colors cursor-pointer ${currentPage === num
                    ? "bg-[#6A73FC] border-[#6A73FC] text-white z-10"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {num}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1.5 -ml-px flex items-center justify-center rounded-r-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <RiArrowRightSLine size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTable;
