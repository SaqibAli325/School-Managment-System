import React, { useState, useEffect } from "react";
import { Pencil, Trash2, ChevronsUpDown } from "lucide-react";

const defaultData = [
  { department: "Clerk", head: "Rhona Davidson", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "210" },
  { department: "Accountant", head: "Michael Silva", mobile: "987 654 3210", email: "info@example.com", startingYear: "2017", capacity: "10" },
  { department: "Junior Technical", head: "Ashton Cox", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2016", capacity: "20" },
  { department: "Developer", head: "Cedric Kelly", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "30" },
  { department: "Accountant", head: "Airi Satou", mobile: "987 654 3210", email: "info@example.com", startingYear: "2017", capacity: "40" },
  { department: "Specialist", head: "Brielle Williamson", mobile: "123 456 7890", email: "info@example.com", startingYear: "2016", capacity: "50" },
  { department: "Sales Assistant", head: "Herrod Chandler", mobile: "987 654 3210", email: "info@example.com", startingYear: "2015", capacity: "60" },
  { department: "Librarian", head: "Rhona Davidson", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2017", capacity: "70" },
  { department: "Librarian", head: "Colleen Hurst", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2017", capacity: "80" },
  { department: "Librarian", head: "Sonya Frost", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "90" },
  { department: "Office Manager", head: "Caesar Vance", mobile: "987 654 3210", email: "info@example.com", startingYear: "2016", capacity: "130" },
  { department: "Security Department", head: "Doris Wilder", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "85" },
  { department: "Data Entry", head: "Angelica Ramos", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2017", capacity: "140" },
  { department: "Architecture", head: "Gloria Little", mobile: "987 654 3210", email: "info@example.com", startingYear: "2016", capacity: "105" },
  { department: "IT Support", head: "Bruno Nash", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "160" },
  { department: "Human Resources", head: "Yuri Berry", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2017", capacity: "75" },
  { department: "Finance", head: "Quinn Flynn", mobile: "987 654 3210", email: "info@example.com", startingYear: "2016", capacity: "115" },
  { department: "Front Desk", head: "Jenna Elliott", mobile: "123 456 7890", email: "info@example.com", startingYear: "2015", capacity: "135" },
  { department: "Maintenance", head: "Haley Kennedy", mobile: "(123) 4567 890", email: "info@example.com", startingYear: "2017", capacity: "100" },
  { department: "Procurement", head: "Bradley Greer", mobile: "987 654 3210", email: "info@example.com", startingYear: "2016", capacity: "95" },
];

const DepartmentsTable = ({ data = defaultData, onEdit, onDelete, onAddNew }) => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  // Filter ya entries change hone par page 1 par reset karein
  useEffect(() => {
    setCurrentPage(1);
  }, [search, entries]);

  // Search filter - department, head, email me se kahin bhi match kare
  const filteredData = data.filter((item) => {
    const term = search.toLowerCase();
    return (
      item.department?.toLowerCase().includes(term) ||
      item.head?.toLowerCase().includes(term) ||
      item.mobile?.toLowerCase().includes(term) ||
      item.email?.toLowerCase().includes(term) ||
      item.startingYear?.toLowerCase().includes(term)
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
    { key: "department", label: "Department" },
    { key: "head", label: "Head Of Dept." },
    { key: "mobile", label: "Mobile" },
    { key: "email", label: "Email" },
    { key: "startingYear", label: "Starting Year" },
    { key: "capacity", label: "Stu. Capacity" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="pt-4">
      {/* Card wrapper */}
      <div className="bg-white rounded shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Department List</h2>
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
              className="border border-gray-200 rounded-md pl-[10px] pr-[35px] py-[10px] text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30 cursor-pointer"
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
                    Department not Found
                  </td>
                </tr>
              )}

              {visibleData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:shadow-[0px_0px_5px_#00000029] transition-all"
                >
                  <td className="py-3 px-4 text-[#737b8b] font-bold">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.department}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.head}</td>
                  <td className="py-3 px-4 text-[#737b8b] font-semibold whitespace-nowrap">{item.mobile}</td>
                  <td className="py-3 px-4 text-[#737b8b] font-semibold whitespace-nowrap">{item.email}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.startingYear}</td>
                  <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.capacity}</td>
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

export default DepartmentsTable;
