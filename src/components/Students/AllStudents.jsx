import React, { useState, useEffect } from "react";
import { Pencil, Trash2, MoreVertical } from "lucide-react";

// data prop me array of objects aayega, jaise:
// {
//   profile: "image url",
//   name: "Tiger Nixon",
//   department: "Architect",
//   gender: "Male",
//   education: "M.COM., P.H.D.",
//   mobile: "123 456 7890",
//   email: "info@example.com",
//   joiningDate: "2011/04/25",
// }

const defaultData = [
  {
    rollNo: "01",
    name: "Tiger Nixon",
    department: "Architect",
    gender: "Male",
    education: "M.COM, P.H.D.",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2011/04/25",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "02",
    name: "Garrett Winters",
    department: "Accountant",
    gender: "Female",
    education: "M.COM, P.H.D.",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2011/07/25",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "03",
    name: "Ashton Cox",
    department: "Junior Technical",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2009/01/12",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "04",
    name: "Cedric Kelly",
    department: "Developer",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2012/03/29",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "05",
    name: "Airi Satou",
    department: "Accountant",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2008/11/28",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  {
    rollNo: "06",
    name: "Brielle Williamson",
    department: "Specialist",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2012/12/02",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "07",
    name: "Herrod Chandler",
    department: "Sales Assistant",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2012/08/06",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "08",
    name: "Rhona Davidson",
    department: "Integration",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2010/10/14",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "09",
    name: "Colleen Hurst",
    department: "Javascript Developer",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2009/09/15",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "10",
    name: "Sonya Frost",
    department: "Software Engineer",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2008/12/13",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  {
    rollNo: "11",
    name: "Jena Gaines",
    department: "Office Manager",
    gender: "Female",
    education: "B.TACH, M.TACH",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2008/12/19",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "12",
    name: "Quinn Flynn",
    department: "Support Lead",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2013/03/03",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "13",
    name: "Charde Marshall",
    department: "Regional Director",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2008/10/16",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "14",
    name: "Haley Kennedy",
    department: "Senior Marketing",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2012/12/18",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "15",
    name: "Tatyana Fitzpatrick",
    department: "Regional Director",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2010/03/17",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  {
    rollNo: "16",
    name: "Michael Silva",
    department: "Marketing Designer",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2012/11/27",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "17",
    name: "Paul Byrd",
    department: "Financial Officer",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2010/06/09",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "18",
    name: "Gloria Little",
    department: "Systems Administrator",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2009/04/10",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "19",
    name: "Bradley Greer",
    department: "Software Engineer",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2012/10/13",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "20",
    name: "Dai Rios",
    department: "Personnel Lead",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2012/09/28",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  {
    rollNo: "21",
    name: "Jenette Caldwell",
    department: "Development Lead",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2011/09/03",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "22",
    name: "Yuri Berry",
    department: "Marketing Officer",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2009/06/25",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "23",
    name: "Caesar Vance",
    department: "Pre-Sales Support",
    gender: "Male",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2011/12/12",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "24",
    name: "Doris Wilder",
    department: "Sales Assistant",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2010/09/20",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "25",
    name: "Angelica Ramos",
    department: "Executive Officer",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "987 654 3210",
    email: "info@example.com",
    joiningDate: "2009/10/09",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  {
    rollNo: "26",
    name: "Gavin Joyce",
    department: "Developer",
    gender: "Female",
    education: "B.TACH, M.TACH",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2010/12/22",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic1.jpg"
  },
  {
    rollNo: "27",
    name: "Jennifer Chang",
    department: "Regional Director",
    gender: "Male",
    education: "B.A, B.C.A",
    mobile: "(123) 4567 890",
    email: "info@example.com",
    joiningDate: "2010/11/14",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic2.jpg"
  },
  {
    rollNo: "28",
    name: "Brenden Wagner",
    department: "Software Engineer",
    gender: "Female",
    education: "B.TACH, M.TACH",
    mobile: "123 456 7890",
    email: "info@example.com",
    joiningDate: "2011/08/07",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic3.jpg"
  },
  {
    rollNo: "29",
    name: "Dummy Person 29",
    department: "Developer",
    gender: "Male",
    education: "B.COM, M.COM.",
    mobile: "123 456 7890",
    email: "dummy29@example.com",
    joiningDate: "2015/01/01",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic4.jpg"
  },
  {
    rollNo: "30",
    name: "Dummy Person 30",
    department: "Accountant",
    gender: "Female",
    education: "B.A, B.C.A",
    mobile: "987 654 3210",
    email: "dummy30@example.com",
    joiningDate: "2016/05/12",
    profile: "https://edumin.dexignlab.com/xhtml/images/profile/small/pic5.jpg"
  },
  // ... and so on up to Dummy Person 72 to reach exactly 100 elements.
];

const AllStudents = ({ data = defaultData, onEdit, onDelete }) => {
  const [view, setView] = useState("list"); // "list" | "grid"
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter ya entries change hone par page 1 par reset karein
  useEffect(() => {
    setCurrentPage(1);
  }, [search, entries]);

  // Search filter - name, department, email me se kahin bhi match kare
  const filteredData = data.filter((student) => {
    const term = search.toLowerCase();
    return (
      student.name?.toLowerCase().includes(term) ||
      student.rollNo?.toLowerCase().includes(term) ||
      student.department?.toLowerCase().includes(term) ||
      student.email?.toLowerCase().includes(term)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const visibleData = filteredData.slice(startIndex, startIndex + entries);

  return (
    <div className="pt-4">
      {/* View toggle buttons */}
      <div className="mt-2 mb-6 flex gap-2">
        <button
          onClick={() => setView("list")}
          className={`rounded-[5px] px-5 py-3 transition-colors duration-150 ease-in-out cursor-pointer ${
            view === "list"
              ? "bg-[#6A73FC] shadow-[0_0_20px_0_rgba(106,115,250,0.2)] text-white"
              : "text-[#6A73FC]"
          }`}
        >
          List View
        </button>
        <button
          onClick={() => setView("grid")}
          className={`rounded-[5px] px-5 py-3 transition-colors duration-150 ease-in-out cursor-pointer ${
            view === "grid"
              ? "bg-[#6A73FC] shadow-[0_0_20px_0_rgba(106,115,250,0.2)] text-white"
              : "text-[#6A73FC]"
          }`}
        >
          Grid View
        </button>
      </div>

      {/* Card wrapper */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold text-gray-700">All Students</h2>
          <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-auto transition-colors cursor-pointer">
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
              className="border border-gray-200 rounded px-3 py-2  sm:w-45 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
            />
          </div>
        </div>

        {/* ===== LIST VIEW ===== */}
        {view === "list" && (
          <div className="-mx-4 sm:mx-0">
            <table className="w-full min-w-200 text-sm">
              <thead>
                <tr className="text-left font-semibold border-y border-gray-100">
                  <th className="py-3 px-4 w-16">Profile</th>
                  <th className="py-3 px-4">Roll No</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-2">Department</th>
                  <th className="py-3 px-4">Gender</th>
                  <th className="py-3 px-4">Education</th>
                  <th className="py-3 px-4">Mobile</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Addmision Date</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {visibleData.length === 0 && (
                  <tr>
                    <td colSpan={10} className="text-center py-6 text-gray-400">
                      Student not Found
                    </td>
                  </tr>
                )}

                {visibleData.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <img
                        src={student.profile}
                        alt={student.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    </td>
                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap font-bold">{student.rollNo || "N/A"}</td>
                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{student.name}</td>
                    <td className="py-3 px-2 text-[#737b8b] whitespace-nowrap">{student.department}</td>
                    <td className="py-3 px-4 text-[#737b8b]">{student.gender}</td>
                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{student.education}</td>
                    <td className="py-3 px-4 text-[#888888] whitespace-nowrap font-bold">{student.mobile}</td>
                    <td className="py-3 px-4 text-[#888888] whitespace-nowrap font-bold">{student.email}</td>
                    <td className="py-3 px-4 text-[#737b8b] whitespace-nowrap">{student.joiningDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onEdit && onEdit(student, index)}
                          className="bg-[#6A73FC] hover:bg-[#5961e0] text-white p-2 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => onDelete && onDelete(student, index)}
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
        )}

        {/* ===== GRID VIEW ===== */}
        {view === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleData.length === 0 && (
              <p className="text-center text-gray-400 col-span-full py-6">
                Student not Found
              </p>
            )}

            {visibleData.map((student, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                {/* Top-right menu icon */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <MoreVertical size={20} />
                </button>

                {/* Circular Profile Image */}
                <div className="mb-4">
                  <img
                    src={student.profile}
                    alt={student.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>

                {/* Name & Education */}
                <h3 className="text-xl font-bold text-gray-800 text-center">{student.name}</h3>
                <p className="text-gray-500 text-sm text-center mb-4">{student.education}</p>

                {/* Horizontal divider */}
                <div className="w-full border-t border-gray-100 my-2" />

                {/* Info rows */}
                <div className="w-full text-sm space-y-3 py-2">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Roll No :</span>
                    <span className="font-bold text-gray-700">{student.rollNo || "N/A"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Gender :</span>
                    <span className="font-bold text-gray-700">{student.gender}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Phone No. :</span>
                    <span className="font-bold text-gray-700">{student.mobile}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Email :</span>
                    <span className="font-bold text-gray-700">{student.email}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-500">Address :</span>
                    <span className="font-bold text-gray-700 text-right line-clamp-1">{student.address || "New York, USA"}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="mt-4 px-6 py-2 border border-[#6A73FC] text-[#6A73FC] font-medium rounded-full bg-white hover:bg-[#6A73FC] hover:text-white transition-all duration-200 cursor-pointer text-sm">
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ===== PAGINATION & FOOTER ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 border-t border-gray-100 pt-6">
          <div className="text-sm text-gray-400">
            Showing {filteredData.length > 0 ? startIndex + 1 : 0} to{" "}
            {Math.min(startIndex + entries, filteredData.length)} of {filteredData.length} entries
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm rounded transition-colors cursor-pointer ${
                currentPage === 1
                  ? "bg-gray-200 text-black cursor-not-allowed"
                  : "text-white bg-[#6A73FC] hover:text-[rgb(106,115,252)] hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentPage === num
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
              className={`px-4 py-2 text-sm rounded transition-colors cursor-pointer ${
                currentPage === totalPages || totalPages === 0
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

export default AllStudents;