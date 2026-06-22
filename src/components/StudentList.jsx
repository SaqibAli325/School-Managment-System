import { useState } from "react";

const initialStudents = [
  { id: 1, no: "01", name: "Jack Ronan", professor: "Airi Satou", date: "01 August 2021", status: "Checkin", subject: "Commerce", fees: "120$" },
  { id: 2, no: "02", name: "Jimmy Morris", professor: "Angelica Ramos", date: "31 July 2021", status: "Pending", subject: "Mechanical", fees: "120$" },
  { id: 3, no: "03", name: "Nashid Martines", professor: "Ashton Cox", date: "30 July 2021", status: "Canceled", subject: "Science", fees: "520$" },
  { id: 4, no: "04", name: "Roman Aurora", professor: "Cara Stevens", date: "29 July 2021", status: "Checkin", subject: "Arts", fees: "220$" },
  { id: 5, no: "05", name: "Samantha", professor: "Bruno Nash", date: "28 July 2021", status: "Checkin", subject: "Maths", fees: "130$" },
];

const statusStyles = {
  Checkin: "bg-indigo-500 text-white",
  Pending: "bg-yellow-400 text-white",
  Canceled: "bg-red-500 text-white",
};

function StatusBadge({ status }) {
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[status] || "bg-gray-300 text-white"}`}>
      {status}
    </span>
  );
}

export default function StudentList() {
  const [students, setStudents] = useState(initialStudents);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  function startEdit(s) {
    setEditingId(s.id);
    setEditData({ ...s });
  }

  function saveEdit() {
    setStudents((prev) => prev.map((s) => (s.id === editingId ? { ...editData } : s)));
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  function handleDelete(id) {
    if (window.confirm("Delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  }

  const inputCls = "border border-gray-300 rounded px-2 py-1 text-sm w-full focus:outline-none focus:border-indigo-400";

  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4">
      <div className="w-full bg-white rounded shadow-sm overflow-x-auto pb-2">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 min-w-max">
          <h2 className="text-lg font-semibold text-gray-800">New Student List</h2>
        </div>

        {/* Table */}
        <div className="w-full">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                {["No.", "Name", "Assigned Professor", "Date Of Admit", "Status", "Subject", "Fees", "Edit"].map((h) => (
                  <th key={h} className="text-left text-sm font-semibold text-gray-700 px-5 py-3 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s) =>
                editingId === s.id ? (
                  <tr key={s.id} className="border-b border-gray-100 bg-indigo-50">
                    <td className="px-5 py-3 text-sm text-gray-400">{s.no}</td>
                    <td className="px-5 py-3"><input className={`${inputCls} font-medium text-gray-500`} value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /></td>
                    <td className="px-5 py-3"><input className={`${inputCls} font-medium text-gray-500`} value={editData.professor} onChange={(e) => setEditData({ ...editData, professor: e.target.value })} /></td>
                    <td className="px-5 py-3"><input className={inputCls} value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} /></td>
                    <td className="px-5 py-3">
                      <select className={inputCls} value={editData.status} onChange={(e) => setEditData({ ...editData, status: e.target.value })}>
                        <option>Checkin</option>
                        <option>Pending</option>
                        <option>Canceled</option>
                      </select>
                    </td>
                    <td className="px-5 py-3"><input className={inputCls} value={editData.subject} onChange={(e) => setEditData({ ...editData, subject: e.target.value })} /></td>
                    <td className="px-5 py-3"><input className={inputCls} value={editData.fees} onChange={(e) => setEditData({ ...editData, fees: e.target.value })} /></td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1.5">
                        <button onClick={saveEdit} className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg transition-colors">Save</button>
                        <button onClick={cancelEdit} className="text-xs bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1.5 rounded-lg transition-colors">Cancel</button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr key={s.id} className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-sm text-gray-400">{s.no}</td>
                    <td className="px-5 py-3 text-sm font-medium text-gray-500">{s.name}</td>
                    <td className="px-5 py-3 text-sm font-medium text-gray-500">{s.professor}</td>
                    <td className="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">{s.date}</td>
                    <td className="px-5 py-3"><StatusBadge status={s.status} /></td>
                    <td className="px-5 py-3 text-sm text-gray-600">{s.subject}</td>
                    <td className="px-5 py-3 text-sm text-gray-400 font-medium">{s.fees}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => startEdit(s)}
                          className="w-8 h-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white flex items-center justify-center active:scale-95 transition-all"
                          aria-label={`Edit ${s.name}`}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(s.id)}
                          className="w-8 h-8 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center active:scale-95 transition-all"
                          aria-label={`Delete ${s.name}`}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
