const tasks = [
  { id: 1, task: "Working Design report",  professor: "Herman Beck",     status: "DONE",      progress: 65, statusColor: "bg-[#6C63DB] text-white" },
  { id: 2, task: "Fees Collection report", professor: "Emma Watson",     status: "Pending",   progress: 50, statusColor: "bg-[#FFA500] text-white" },
  { id: 3, task: "Management report",      professor: "Mary Adams",      status: "Pending",   progress: 45, statusColor: "bg-[#FFA500] text-white" },
  { id: 4, task: "Library book status",    professor: "Caleb Richards",  status: "Suspended", progress: 30, statusColor: "bg-[#E02020] text-white" },
  { id: 5, task: "Placement status",       professor: "June Lane",       status: "Pending",   progress: 55, statusColor: "bg-[#FFA500] text-white" },
  { id: 6, task: "Working Design report",  professor: "Herman Beck",     status: "DONE",      progress: 65, statusColor: "bg-[#6C63DB] text-white" },
];

const progressColor = {
  DONE:      "bg-[#6C63DB]",
  Pending:   "bg-[#FFA500]",
  Suspended: "bg-[#E02020]",
};

const notifications = [
  { id: 1, name: "Dr sultads Send you Photo",    time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic1.jpg" },
  { id: 2, name: "Resport created successfully", time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic2.jpg" },
  { id: 3, name: "Reminder : Treatment Time!",   time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic3.jpg" },
  { id: 4, name: "Dr sultads Send you Photo",    time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic4.jpg" },
  { id: 5, name: "Resport created successfully", time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic5.jpg" },
  { id: 6, name: "Reminder : Treatment Time!",   time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic6.jpg" },
  { id: 7, name: "Dr sultads Send you Photo",    time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic7.jpg" },
  { id: 8, name: "Resport created successfully", time: "29 July 2021 - 02:26 PM", img: "https://edumin.dexignlab.com/xhtml/images/profile/education/pic8.jpg" },
];

export default function AssignTaskPage() {
  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="flex gap-5">

        {/* Assign Task Table */}
        <div className="flex-1 bg-white border border-gray-200 rounded p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b border-[gainsboro] pb-5">Assign Task</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left font-medium pb-3 w-12">S.No.</th>
                <th className="text-left font-medium pb-3">Task</th>
                <th className="text-left font-medium pb-3">Assigned Professors</th>
                <th className="text-left font-medium pb-3">Status</th>
                <th className="text-left font-medium pb-3">Progress</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-50 ${i % 2 === 0 ? "" : ""}`}
                >
                  <td className="py-3 text-gray-400 text-xs font-bold">{row.id}</td>
                  <td className="py-3 text-gray-600 font-medium text-[13px]">{row.task}</td>
                  <td className="py-3 text-gray-600 font-medium text-[13px]">{row.professor}</td>
                  <td className="py-3">
                    <span className={`${row.statusColor} text-xs font-semibold px-3 py-1 rounded-full`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${progressColor[row.status]}`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notifications */}
        <div className="w-72 bg-white border border-gray-200 rounded p-6 flex flex-col h-112.5">
          <h2 className="text-lg font-semibold text-gray-800 mb-5 border-b border-[gainsboro] pb-5">Notifications</h2>

          <div className="flex flex-col gap-4 overflow-y-auto pr-2">
            {notifications.map((n) => (
              <div key={n.id} className="flex items-center gap-3">
                <img
                  src={n.img}
                  alt={n.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-snug">{n.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
