import { useState } from "react";
const avt = "https://edumin.dexignlab.com/xhtml/images/avatar/1.png";

const initialStudents = [
  { id: 1, name: "Ricky Antony", professor: "Herman Beck", branch: "Mechanical", status: "DONE", date: "30/03/2018", avatar: null, avatarBg: "bg-green-500" },
  { id: 2, name: "Emma Watson", professor: "Emma Watson", branch: "Computer", status: "Pending", date: "11/07/2017", avatar: avt, avatarBg: "" },
  { id: 3, name: "Rowen Atkinson", professor: "Mary Adams", branch: "Mechanical", status: "DONE", date: "05/04/2016", avatar: null, avatarBg: "bg-green-500" },
  { id: 4, name: "Antony Hopkins", professor: "Caleb Richards", branch: "Computer", status: "Suspended", date: "05/04/2018", avatar: avt, avatarBg: "" },
  { id: 5, name: "Jennifer Schramm", professor: "June Lane", branch: "Fees Collection", status: "Pending", date: "17/03/2016", avatar: avt, avatarBg: "" },
  { id: 6, name: "Raymond Mims", professor: "Herman Beck", branch: "Computer", status: "Suspended", date: "12/07/2014", avatar: null, avatarBg: "bg-green-500" },
  { id: 7, name: "Michael Jenkins", professor: "Jennifer Schramm", branch: "Mechanical", status: "Pending", date: "15/06/2014", avatar: avt, avatarBg: "" },
];

const statusStyle = {
  DONE: "bg-[#6C63DB] text-white",
  Pending: "bg-[#FFA500] text-white",
  Suspended: "bg-[#E02020] text-white",
};

function Avatar({ student }) {
  if (student.avatar) {
    return (
      <img
        src={student.avatar}
        alt={student.name}
        className="w-9 h-9 rounded-full object-cover shrink-0"
      />
    );
  }
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${student.avatarBg}`}>
      K
    </div>
  );
}

export default function NewStudentList() {
  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (id) => setStudents((prev) => prev.filter((s) => s.id !== id));

  return (
    <div className="bg-[#f5f5f5] p-6 font-sans rounded-xl">
      <div className="bg-white border border-gray-200 rounded-xl p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-6 pb-5 -mx-6 px-6 border-b border-[gainsboro]">New Student List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                <th className="text-left font-medium pb-4 pl-4">Student Name</th>
                <th className="text-left font-medium pb-4">Assigned Professor</th>
                <th className="text-left font-medium pb-4">Branch</th>
                <th className="text-left font-medium pb-4">Status</th>
                <th className="text-left font-medium pb-4">Date Of Admit</th>
                <th className="text-left font-medium pb-4 pr-4">Edit</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr
                  key={s.id}
                  className={`rounded border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-[#E8E8E8]" : ""}`}
                >

                  {/* Student Name */}
                  <td className="py-4 pl-4">
                    <div className="flex items-center gap-3">
                      <Avatar student={s} />
                      <span className="font-semibold text-gray-800">{s.name}</span>
                    </div>
                  </td>

                  {/* Professor */}
                  <td className="py-4 text-gray-500">{s.professor}</td>

                  {/* Branch */}
                  <td className="py-4 text-gray-500">{s.branch}</td>

                  {/* Status */}
                  <td className="py-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[s.status]}`}>
                      {s.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-4 text-gray-500">{s.date}</td>

                  {/* Edit / Delete */}
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded flex items-center justify-center bg-[#6C63DB] hover:bg-[#5a52c4] transition-colors text-white"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="w-8 h-8 rounded flex items-center justify-center bg-[#E02020] hover:bg-[#c41a1a] transition-colors text-white"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                          <path d="M10 11v6M14 11v6" />
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
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
}
