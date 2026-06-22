import { useState } from "react";

const initialStudents = [
  { roll: 542, name: "Jack Ronan", bars: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], colors: ["#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#1D9E75", "#378ADD", "#378ADD", "#378ADD", "#378ADD"] },
  { roll: 243, name: "Jimmy Morris", bars: [8, 4, 10, 6, 12, 5, 9, 3, 11, 7, 13, 6, 10, 8, 12], colors: ["#378ADD", "#378ADD", "#1D9E75", "#1D9E75", "#1D9E75", "#378ADD", "#1D9E75", "#378ADD", "#1D9E75", "#1D9E75", "#1D9E75", "#378ADD", "#1D9E75", "#1D9E75", "#1D9E75"] },
  { roll: 452, name: "Nashid Martines", bars: [14, 13, 12, 11, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], colors: ["#7F77DD", "#7F77DD", "#7F77DD", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7", "#534AB7"] },
  { roll: 124, name: "Roman Aurora", bars: [5, 8, 3, 0, 10, 0, 6, 0, 9, 0, 4, 0, 7, 0, 0], colors: ["#1D9E75", "#D4537E", "#7F77DD", "#378ADD", "#E24B4A", "#1D9E75", "#D4537E", "#378ADD", "#7F77DD", "#E24B4A", "#1D9E75", "#D4537E", "#378ADD", "#378ADD", "#378ADD"] },
  { roll: 234, name: "Samantha", bars: [6, 10, 4, 8, 2, 12, 5, 9, 3, 11, 6, 8, 10, 7, 9], colors: ["#7F77DD", "#534AB7", "#7F77DD", "#534AB7", "#7F77DD", "#534AB7", "#7F77DD", "#534AB7", "#378ADD", "#378ADD", "#7F77DD", "#534AB7", "#7F77DD", "#534AB7", "#7F77DD"] },
];

function MiniChart({ bars, colors }) {
  const H = 28, max = 16, bw = 4, gap = 2;
  return (
    <svg width={90} height={H} viewBox={`0 0 90 ${H}`}>
      {bars.map((v, i) =>
        v ? (
          <rect
            key={i}
            x={i * (bw + gap)}
            y={H - Math.round((v / max) * H)}
            width={bw}
            height={Math.round((v / max) * H)}
            fill={colors[i]}
            rx={1}
          />
        ) : null
      )}
    </svg>
  );
}

export default function ExamToppers() {
  const [students, setStudents] = useState(initialStudents);

  function handleEdit(i) {
    const newName = prompt(`Edit name for Roll No. ${students[i].roll}:`, students[i].name);
    if (newName && newName.trim()) {
      setStudents((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, name: newName.trim() } : s))
      );
    }
  }

  function handleDelete(i) {
    if (window.confirm(`Delete ${students[i].name}?`)) {
      setStudents((prev) => prev.filter((_, idx) => idx !== i));
    }
  }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full h-full bg-white border border-gray-200 rounded overflow-auto shadow">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-medium text-gray-800">Exam Toppers</h2>
        </div>

        <table className=" table-fixed border-separate border-spacing-y-2">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="w-20 text-left text-xs font-medium text-gray-400 px-4 py-2.5">Roll No.</th>
              <th className="text-left text-xs font-medium text-gray-400 px-4 py-2.5">Name</th>
              <th className="w-28 text-left text-xs font-medium text-gray-400 px-4 py-2.5">Status</th>
              <th className="w-20 text-left text-xs font-medium text-gray-400 px-4 py-2.5">Edit</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr
                key={s.roll}
                className="hover:bg-gray-50 transition-colors shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
              >
                <td className="px-4 py-3 text-sm text-gray-400">{s.roll}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{s.name}</td>
                <td className="px-4 py-3">
                  <MiniChart bars={s.bars} colors={s.colors} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => handleEdit(i)}
                      className="w-7 h-7 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-opacity active:scale-95"
                      aria-label={`Edit ${s.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="w-7 h-7 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-opacity active:scale-95"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
