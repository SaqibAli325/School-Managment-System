import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2007", income: 175, expense: 110 },
  { name: "2007", income: 155, expense: 70 },
  { name: "2007", income: 155, expense: 70 },
  { name: "2008", income: 100, expense: 45 },
  { name: "2008", income: 160, expense: 75 },
  { name: "2009", income: 120, expense: 40 },
  { name: "2009", income: 120, expense: 30 },
  { name: "2009", income: 110, expense: 55 },
  { name: "2009", income: 130, expense: 40 },
  { name: "2009", income: 125, expense: 45 },
];

const IncomeExpenseChart = () => {
  return (
    <div className="bg-white rounded shadow-sm p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Income/Expense Report
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          barSize={22}
        >
          <CartesianGrid vertical={false} stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            ticks={[0, 75, 150, 225, 300]}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="income" stackId="a" fill="#1e3a5f" radius={[0, 0, 0, 0]} />
          <Bar dataKey="expense" stackId="a" fill="#f5a623" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
