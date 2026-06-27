import React, { useState, useEffect } from "react";
import { Pencil, Trash2, ChevronsUpDown } from "lucide-react";

// data prop me array of objects aayega, jaise:
// {
//   title: "Technical Author",
//   subject: "Designing",
//   department: "Architecture",
//   year: "3 Year",
//   type: "Book",
//   status: "Out of Stock",
// }

const defaultData = [
  { title: "Technical Author", subject: "Designing", department: "Architecture", year: "3 Year", type: "Book", status: "Out of Stock" },
  { title: "Team Leader", subject: "Computer", department: "Office Manager", year: "2 Year", type: "Comics", status: "Out of Stock" },
  { title: "Software Engineer", subject: "Computer", department: "Architecture", year: "1 Year", type: "Book", status: "In Stock" },
  { title: "Software Engineer", subject: "Designing", department: "Data Entry", year: "3 Year", type: "Newspaper", status: "In Stock" },
  { title: "Marketing Designer", subject: "Politics", department: "Office Manager", year: "1 Year", type: "Book", status: "In Stock" },
  { title: "Office Manager", subject: "Computer", department: "Data Entry", year: "1 Year", type: "Newspaper", status: "Out of Stock" },
  { title: "Regional Marketing", subject: "Science", department: "Architecture", year: "2 Year", type: "Comics", status: "In Stock" },
  { title: "Integration Specialist", subject: "Designing", department: "Office Manager", year: "3 Year", type: "Newspaper", status: "In Stock" },
  { title: "Integration Specialist", subject: "Politics", department: "Data Entry", year: "1 Year", type: "Book", status: "In Stock" },
  { title: "Networking", subject: "B.COM., M.COM.", department: "Security Department", year: "1 Year", type: "Newspaper", status: "Out of Stock" },
  { title: "Project Coordinator", subject: "Science", department: "Data Entry", year: "2 Year", type: "Book", status: "In Stock" },
  { title: "Junior Technical Author", subject: "Computer", department: "Security Department", year: "1 Year", type: "Comics", status: "Out of Stock" },
  { title: "Senior Javascript Developer", subject: "Designing", department: "Architecture", year: "3 Year", type: "Newspaper", status: "In Stock" },
  { title: "Accountant", subject: "Politics", department: "Office Manager", year: "1 Year", type: "Book", status: "In Stock" },
  { title: "Office Manager", subject: "B.COM., M.COM.", department: "Data Entry", year: "2 Year", type: "Comics", status: "Out of Stock" },
  { title: "Sales Assistant", subject: "Science", department: "Security Department", year: "1 Year", type: "Newspaper", status: "In Stock" },
  { title: "Financial Officer", subject: "Computer", department: "Architecture", year: "3 Year", type: "Book", status: "Out of Stock" },
  { title: "Systems Administrator", subject: "Designing", department: "Office Manager", year: "1 Year", type: "Comics", status: "In Stock" },
  { title: "Regional Director", subject: "Politics", department: "Data Entry", year: "2 Year", type: "Newspaper", status: "In Stock" },
  { title: "Support Lead", subject: "B.COM., M.COM.", department: "Security Department", year: "1 Year", type: "Book", status: "Out of Stock" },
];

const LibraryTable = ({ data = defaultData, onEdit, onDelete, onAddNew }) => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  // Filter ya entries change hone par page 1 par reset karein
  useEffect(() => {
    setCurrentPage(1);
  }, [search, entries]);

  // Search filter - title, subject, department, type me se kahin bhi match kare
  const filteredData = data.filter((item) => {
    const term = search.toLowerCase();
    return (
      item.title?.toLowerCase().includes(term) ||
      item.subject?.toLowerCase().includes(term) ||
      item.department?.toLowerCase().includes(term) ||
      item.type?.toLowerCase().includes(term) ||
      item.status?.toLowerCase().includes(term)
    );
  });

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = sortKey === "sno" ? filteredData.indexOf(a) : (a[sortKey] || "");
    const valB = sortKey === "sno" ? filteredData.indexOf(b) : (b[sortKey] || "");
    if (valA < valB) return sortDir === "asc" ? -1 : 1;
    if (valA > valB) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const visibleData = sortedData.slice(startIndex, startIndex + entries);

  const columns = [
    { key: "sno", label: "S.No." },
    { key: "title", label: "Title" },
    { key: "subject", label: "Subject" },
    { key: "department", label: "Department" },
    { key: "year", label: "Year" },
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="pt-4">
      {/* Card wrapper */}
      <div className="bg-white rounded shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-4 border-b border-gray-200 -mx-4 sm:-mx-6 px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-700">Asset List</h2>
          <button
            onClick={() => onAddNew && onAddNew()}
            className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-auto transition-colors cursor-pointer"
          >
            + Add new
          </button>
        </div>

        <div className="border-t border-gray-100" />

        {/* Controls: Show entries + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
              className="border border-gray-200 rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Search:</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-200 rounded px-3 py-2 sm:w-45 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
            />
          </div>
        </div>

        {/* ===== TABLE ===== */}
        <div className="-mx-4 sm:mx-0">
          <table className="w-full min-w-200 text-sm">
            <thead>
              <tr className="text-left font-semibold border-y border-gray-100">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => col.key !== "action" && handleSort(col.key)}
                    className={`py-3 px-4 whitespace-nowrap ${col.key !== "action" ? "cursor-pointer select-none" : ""}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      <ChevronsUpDown size={13} className="text-gray-400" />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleData.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="text-center py-6 text-gray-400">
                    Book not Found
                  </td>
                </tr>
              )}

              {visibleData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 text-[#737b8b] font-bold">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.title}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.subject}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.department}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.year}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.type}</td>
                  <td className="py-3 px-4 text-[#737b8b]">{item.status}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onEdit && onEdit(item, index)}
                        className="bg-[#6A73FC] hover:bg-[#5961e0] text-white p-2 rounded-md transition-colors cursor-pointer"
                        title="Edit"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => onDelete && onDelete(item, index)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== PAGINATION & FOOTER ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-t border-gray-100 pt-6">
          <div className="text-sm text-gray-400">
            Showing {sortedData.length > 0 ? startIndex + 1 : 0} to{" "}
            {Math.min(startIndex + entries, sortedData.length)} of {sortedData.length} entries
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm rounded transition-colors cursor-pointer ${currentPage === 1
                  ? "bg-gray-200 text-black cursor-not-allowed"
                  : "text-white bg-[#6A73FC] hover:text-[rgb(106,115,252)] hover:bg-gray-200"
                }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${currentPage === num
                    ? "bg-[#6A73FC] text-white shadow-[0_4px_10px_0_rgba(106,115,252,0.3)]"
                    : "text-[#6A73FC] bg-black/10 hover:bg-[#6A73FC]/5 border border-transparent"
                  }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-4 py-2 text-sm rounded transition-colors cursor-pointer ${currentPage === totalPages || totalPages === 0
                  ? "bg-gray-200 text-black cursor-not-allowed"
                  : "text-white bg-[#6A73FC] hover:text-[rgb(106,115,252)] hover:bg-gray-200"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTable;
