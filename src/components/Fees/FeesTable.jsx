import React, { useState, useEffect } from "react";
import { Pencil, Trash2, ChevronsUpDown } from "lucide-react";

// data prop me array of objects aayega, jaise:
// {
//   rollNo: "101",
//   studentName: "Rhona Davidson",
//   invoiceNumber: "INV-1001",
//   feesType: "Tuition Fee",
//   paymentType: "Cash",
//   status: "Paid",
//   date: "12 Jan 2025",
//   amount: "210",
// }

const defaultData = [
    { rollNo: "101", studentName: "Rhona Davidson", invoiceNumber: "INV-1001", feesType: "Tuition Fee", paymentType: "Cash", status: "Paid", date: "12 Jan 2025", amount: "210" },
    { rollNo: "102", studentName: "Michael Silva", invoiceNumber: "INV-1002", feesType: "Exam Fee", paymentType: "Online", status: "Pending", date: "15 Feb 2025", amount: "10" },
    { rollNo: "103", studentName: "Ashton Cox", invoiceNumber: "INV-1003", feesType: "Library Fee", paymentType: "Cash", status: "Paid", date: "20 Jan 2025", amount: "20" },
    { rollNo: "104", studentName: "Cedric Kelly", invoiceNumber: "INV-1004", feesType: "Tuition Fee", paymentType: "Cheque", status: "Paid", date: "05 Mar 2025", amount: "30" },
    { rollNo: "105", studentName: "Airi Satou", invoiceNumber: "INV-1005", feesType: "Hostel Fee", paymentType: "Online", status: "Udpaid", date: "18 Feb 2025", amount: "40" },
    { rollNo: "106", studentName: "Brielle Williamson", invoiceNumber: "INV-1006", feesType: "Tuition Fee", paymentType: "Cash", status: "Paid", date: "22 Jan 2025", amount: "50" },
    { rollNo: "107", studentName: "Herrod Chandler", invoiceNumber: "INV-1007", feesType: "Exam Fee", paymentType: "Online", status: "Pending", date: "10 Mar 2025", amount: "60" },
    { rollNo: "108", studentName: "Rhona Davidson", invoiceNumber: "INV-1008", feesType: "Library Fee", paymentType: "Cash", status: "Udpaid", date: "27 Jan 2025", amount: "70" },
    { rollNo: "109", studentName: "Colleen Hurst", invoiceNumber: "INV-1009", feesType: "Hostel Fee", paymentType: "Cheque", status: "Udpaid", date: "14 Feb 2025", amount: "80" },
    { rollNo: "110", studentName: "Sonya Frost", invoiceNumber: "INV-1010", feesType: "Tuition Fee", paymentType: "Online", status: "Paid", date: "08 Jan 2025", amount: "90" },
    { rollNo: "111", studentName: "Caesar Vance", invoiceNumber: "INV-1011", feesType: "Exam Fee", paymentType: "Cash", status: "Pending", date: "19 Mar 2025", amount: "130" },
    { rollNo: "112", studentName: "Doris Wilder", invoiceNumber: "INV-1012", feesType: "Hostel Fee", paymentType: "Online", status: "Paid", date: "25 Jan 2025", amount: "85" },
    { rollNo: "113", studentName: "Angelica Ramos", invoiceNumber: "INV-1013", feesType: "Tuition Fee", paymentType: "Cash", status: "Pending", date: "11 Feb 2025", amount: "140" },
    { rollNo: "114", studentName: "Gloria Little", invoiceNumber: "INV-1014", feesType: "Library Fee", paymentType: "Cheque", status: "Paid", date: "29 Jan 2025", amount: "105" },
    { rollNo: "115", studentName: "Bruno Nash", invoiceNumber: "INV-1015", feesType: "Exam Fee", paymentType: "Online", status: "Pending", date: "03 Mar 2025", amount: "160" },
    { rollNo: "116", studentName: "Yuri Berry", invoiceNumber: "INV-1016", feesType: "Tuition Fee", paymentType: "Cash", status: "Paid", date: "16 Jan 2025", amount: "75" },
    { rollNo: "117", studentName: "Quinn Flynn", invoiceNumber: "INV-1017", feesType: "Hostel Fee", paymentType: "Online", status: "Udpaid", date: "21 Feb 2025", amount: "115" },
    { rollNo: "118", studentName: "Jenna Elliott", invoiceNumber: "INV-1018", feesType: "Tuition Fee", paymentType: "Cash", status: "Paid", date: "07 Jan 2025", amount: "135" },
    { rollNo: "119", studentName: "Haley Kennedy", invoiceNumber: "INV-1019", feesType: "Exam Fee", paymentType: "Cheque", status: "Pending", date: "13 Mar 2025", amount: "100" },
    { rollNo: "120", studentName: "Bradley Greer", invoiceNumber: "INV-1020", feesType: "Library Fee", paymentType: "Online", status: "Paid", date: "24 Jan 2025", amount: "95" },
];

const FeesTable = ({ data = defaultData, onEdit, onDelete, onAddNew }) => {
    const [search, setSearch] = useState("");
    const [entries, setEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState(null);
    const [sortDir, setSortDir] = useState("asc");

    // Filter ya entries change hone par page 1 par reset karein
    useEffect(() => {
        setCurrentPage(1);
    }, [search, entries]);

    // Search filter - rollNo, studentName, invoiceNumber, feesType, paymentType, status me se kahin bhi match kare
    const filteredData = data.filter((item) => {
        const term = search.toLowerCase();
        return (
            item.rollNo?.toLowerCase().includes(term) ||
            item.studentName?.toLowerCase().includes(term) ||
            item.invoiceNumber?.toLowerCase().includes(term) ||
            item.feesType?.toLowerCase().includes(term) ||
            item.paymentType?.toLowerCase().includes(term) ||
            item.status?.toLowerCase().includes(term) ||
            item.date?.toLowerCase().includes(term)
        );
    });

    // Sorting logic
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortKey) return 0;
        const valA = a[sortKey] || "";
        const valB = b[sortKey] || "";
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
        { key: "rollNo", label: "Roll No" },
        { key: "studentName", label: "Student Name" },
        { key: "invoiceNumber", label: "Invoice Number" },
        { key: "feesType", label: "Fees Type" },
        { key: "paymentType", label: "Payment Type" },
        { key: "status", label: "Status" },
        { key: "date", label: "Date" },
        { key: "amount", label: "Amount" },
        // { key: "action", label: "Action" },
    ];

    return (
        <div className="pt-4">
            {/* Card wrapper */}
            <div className="bg-white rounded shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Fees Collection List</h2>
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
                                        Record not Found
                                    </td>
                                </tr>
                            )}

                            {visibleData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:shadow-[0px_0px_5px_#00000029] transition-all"
                                >
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.rollNo}</td>
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.studentName}</td>
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.invoiceNumber}</td>
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.feesType}</td>
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.paymentType}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">
                                        <span className={`px-2.5 py-1 rounded text-xs font-medium text-white ${item.status === "Paid" ? "bg-[#7ED321]" :
                                            item.status === "Pending" ? "bg-[#FFAA16]" :
                                                item.status === "Udpaid" ? "bg-[#FF1616]" : "bg-gray-400"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{item.date}</td>
                                    <td className="py-3 px-4 text-[#737b8b] font-semibold whitespace-nowrap">${item.amount}</td>
                                    {/* <td className="py-3 px-4">
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
                                    </td> */}
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

export default FeesTable;