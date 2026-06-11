import { useState } from "react";

const professors = [
  { id: 1, name: "Theodore Handle", degree: "B.Com", available: true, img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Bess Willis", degree: "M.Com", available: false, img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 3, name: "James Jones", degree: "M.Tach", available: true, img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, name: "Smith Watson", degree: "B.Tach", available: false, img: "https://randomuser.me/api/portraits/women/90.jpg" },
  { id: 5, name: "Morese Sharpe", degree: "B.A, M.A", available: true, img: "https://randomuser.me/api/portraits/women/32.jpg" },
];

const ProfessorList = () => {
  const [list] = useState(professors);

  return (
    <div className="bg-white rounded shadow-sm p-5 w-full max-w-xs flex flex-col gap-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800">Professors List</h2>

      <div className="flex flex-col divide-y divide-gray-100">
        {list.map((prof) => (
          <div key={prof.id} className="flex items-center gap-3 py-3">
            <img
              src={prof.img}
              alt={prof.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {prof.name}{" "}
                <span className="font-normal text-gray-500">( {prof.degree} )</span>
              </p>
              <p className={`text-xs font-medium mt-0.5 ${prof.available ? "text-blue-500" : "text-red-500"}`}>
                {prof.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2.5 px-6 rounded-lg w-fit mx-auto transition-colors">
        View All
      </button>
    </div>
  );
};

export default ProfessorList;