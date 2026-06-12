import { useState } from "react";

const students = [
  { id: 1, name: "Angelica Ramos", coach: "Ashton Cox", date: "12 August 2021", time: "10:15" },
  { id: 2, name: "Bradley Greer", coach: "Brenden Wagner", date: "11 July 2021", time: "10:00" },
  { id: 3, name: "Cedric Kelly", coach: "Brielle Williamson", date: "10 May 2021", time: "09:45" },
  { id: 4, name: "Caesar Vance", coach: "Herrod Chandler", date: "09 April 2021", time: "09:30" },
  { id: 5, name: "Rhona Davidson", coach: "Sonya Frost", date: "08 March 2021", time: "09:15" },
  { id: 6, name: "Bradley Greer", coach: "Brenden Wagner", date: "11 July 2021", time: "10:00" },
];

const StudentListDashboard2 = () => {
  const [selected, setSelected] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selected.length === students.length) {
      setSelected([]);
    } else {
      setSelected(students.map((s) => s.id));
    }
  };

  return (
    <div className="bg-white rounded shadow-sm p-6 w-full flex flex-col gap-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800">Student List</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-left">
            <th className="pb-4 w-8">
              <input 
                type="checkbox" 
                checked={selected.length === students.length && students.length > 0}
                onChange={toggleAll}
                className="w-4 h-4 accent-indigo-500 cursor-pointer" 
              />
            </th>
            <th className="pb-4 font-semibold text-gray-700">Student Name</th>
            <th className="pb-4 font-semibold text-gray-700">Assigned Coach</th>
            <th className="pb-4 font-semibold text-gray-700">Date</th>
            <th className="pb-4 font-semibold text-gray-700">Time</th>
            <th className="pb-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3">
                <input
                  type="checkbox"
                  checked={selected.includes(student.id)}
                  onChange={() => toggleSelect(student.id)}
                  className="w-4 h-4 accent-indigo-500 cursor-pointer"
                />
              </td>
              <td className="py-3 text-gray-800">{student.name}</td>
              <td className="py-3 text-gray-600">{student.coach}</td>
              <td className="py-3 text-gray-600">{student.date}</td>
              <td className="py-3 text-gray-600">{student.time}</td>
              <td className="py-3 relative">
                <button
                  onClick={() => setOpenMenu(openMenu === student.id ? null : student.id)}
                  className="text-gray-400 hover:text-gray-700 text-lg px-2"
                >
                  ⋮
                </button>
                {openMenu === student.id && (
                  <div className="absolute right-0 top-8 bg-white border border-gray-100 rounded-lg shadow-md z-10 w-32">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Edit</button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50">Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListDashboard2;