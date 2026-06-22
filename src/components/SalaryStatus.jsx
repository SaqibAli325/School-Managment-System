import { useState } from "react";

const salaryData = {
  Professors: [
    { id: 1, name: "Angelica Ramos", status: "Paid", date: "12 August 2021", amount: "$100", txId: "#42317", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Bradley Greer", status: "Unpaid", date: "11 July 2021", amount: "$200", txId: "#54682", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Cedric Kelly", status: "Pending", date: "10 May 2021", amount: "$400", txId: "#57894", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 4, name: "Caesar Vance", status: "Unpaid", date: "09 April 2021", amount: "$300", txId: "#57864", img: "https://randomuser.me/api/portraits/women/90.jpg" },
    { id: 5, name: "Rhona Davidson", status: "Pending", date: "08 March 2021", amount: "$500", txId: "#56387", img: "https://randomuser.me/api/portraits/women/32.jpg" },
  ],
  Librarian: [
    { id: 1, name: "Angelica Ramos", status: "Paid", date: "12 August 2021", amount: "$100", txId: "#42317", img: "https://randomuser.me/api/portraits/women/47.jpg" },
    { id: 2, name: "Bradley Greer", status: "Unpaid", date: "11 July 2021", amount: "$200", txId: "#54682", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 3, name: "Cedric Kelly", status: "Pending", date: "10 May 2021", amount: "$400", txId: "#57894", img: "https://randomuser.me/api/portraits/men/28.jpg" },
    { id: 4, name: "Caesar Vance", status: "Unpaid", date: "09 April 2021", amount: "$300", txId: "#57864", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 5, name: "Rhona Davidson", status: "Pending", date: "08 March 2021", amount: "$500", txId: "#56387", img: "https://randomuser.me/api/portraits/women/15.jpg" },
  ],
  Other: [
    { id: 1, name: "Angelica Ramos", status: "Paid", date: "12 August 2021", amount: "$100", txId: "#42317", img: "https://randomuser.me/api/portraits/women/47.jpg" },
    { id: 2, name: "Bradley Greer", status: "Unpaid", date: "11 July 2021", amount: "$200", txId: "#54682", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 3, name: "Cedric Kelly", status: "Pending", date: "10 May 2021", amount: "$400", txId: "#57894", img: "https://randomuser.me/api/portraits/men/28.jpg" },
    { id: 4, name: "Caesar Vance", status: "Unpaid", date: "09 April 2021", amount: "$300", txId: "#57864", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 5, name: "Rhona Davidson", status: "Pending", date: "08 March 2021", amount: "$500", txId: "#56387", img: "https://randomuser.me/api/portraits/women/15.jpg" },
  ],
};

const statusStyles = {
  Paid: "bg-green-500 text-white",
  Unpaid: "bg-red-500 text-white",
  Pending: "bg-yellow-400 text-white",
};

const tabs = ["Professors", "Librarian", "Other"];

const SalaryStatus = () => {
  const [activeTab, setActiveTab] = useState("Professors");

  const rows = salaryData[activeTab];

  return (
    <div className="bg-white rounded mt-5 shadow-sm w-full">
      <div className="px-6 pt-5 pb-3 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 pl-[.7em]">Salary Status</h2>
      </div>

      <div className="flex gap-6 px-6 border-b border-gray-100 pl-[2.5rem] pt-[1rem]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
              ? "border-indigo-500 text-indigo-600"
              : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-6 py-4 pl-[2.5rem]">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-600 text-left">
              <th className="pb-3 font-semibold w-16">S.No.</th>
              <th className="pb-3 font-semibold">Name</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Date</th>
              <th className="pb-3 font-semibold">Amount</th>
              <th className="pb-3 font-semibold">Transaction ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3">
                  <img
                    src={row.img}
                    alt={row.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 text-gray-700">{row.name}</td>
                <td className="py-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 text-gray-600">{row.date}</td>
                <td className="py-3 text-gray-700">{row.amount}</td>
                <td className="py-3 text-gray-500">{row.txId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryStatus;
