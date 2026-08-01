import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartCard = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded shadow-sm p-6 w-full h-full ${className}`}>
    <h2 className="text-[16px] font-semibold text-gray-800 mb-1 pb-4 border-b border-gray-100">
      {title}
    </h2>
    <div className="pt-4">{children}</div>
  </div>
);

const axisProps = {
  axisLine: { stroke: "#e5e7eb" },
  tickLine: false,
  tick: { fontSize: 11, fill: "#9ca3af" },
};

const tooltipStyle = {
  contentStyle: {
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontSize: "12px",
  },
};

// --- Donut chart ---
const donutData = [
  { name: "Online", value: 42, color: "#f5b800" },
  { name: "In-Store", value: 30, color: "#3ac569" },
  { name: "Wholesale", value: 28, color: "#6a73fa" },
];

// --- Line chart 1 (single red line) ---
const lineSingle = [
  { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 25 }, { x: 3, y: 40 },
  { x: 4, y: 32 }, { x: 5, y: 45 }, { x: 6, y: 42 }, { x: 7, y: 55 },
  { x: 8, y: 48 }, { x: 9, y: 95 }, { x: 10, y: 80 }, { x: 11, y: 88 },
];

// --- Grouped bar chart (years) ---
const barYears = [
  { x: "2006", a: 100, b: 55, c: 32 },
  { x: "2008", a: 62, b: 40, c: 25 },
  { x: "2010", a: 78, b: 45, c: 30 },
  { x: "2012", a: 100, b: 60, c: 35 },
];

// --- Multi line chart (years) ---
const lineYears = [
  { x: "2001", a: 10, b: 8, c: 5 },
  { x: "2002", a: 78, b: 40, c: 30 },
  { x: "2003", a: 48, b: 55, c: 40 },
  { x: "2004", a: 50, b: 35, c: 45 },
  { x: "2005", a: 145, b: 105, c: 60 },
  { x: "2006", a: 60, b: 90, c: 65 },
  { x: "2007", a: 20, b: 15, c: 55 },
];

// --- Bar chart (days) ---
const barDays = [
  { x: "T", y: 88 }, { x: "F", y: 100 }, { x: "M", y: 60 },
  { x: "T", y: 15 }, { x: "F", y: 45 }, { x: "T", y: 40 },
  { x: "S", y: 68 }, { x: "S", y: 38 },
];

// --- Stacked area (years) ---
const areaYears = [
  { x: "2001", a: 40, b: 15, c: 5 },
  { x: "2002", a: 55, b: 30, c: 10 },
  { x: "2003", a: 45, b: 40, c: 15 },
  { x: "2004", a: 35, b: 25, c: 10 },
  { x: "2005", a: 60, b: 70, c: 20 },
  { x: "2006", a: 50, b: 45, c: 15 },
  { x: "2007", a: 40, b: 20, c: 10 },
];

// --- Full-width area (years, 2010-2016) ---
const areaFull = [
  { x: "2010", a: 60, b: 40 },
  { x: "2011", a: 90, b: 60 },
  { x: "2012", a: 70, b: 100 },
  { x: "2013", a: 110, b: 150 },
  { x: "2014", a: 120, b: 100 },
  { x: "2015", a: 95, b: 130 },
  { x: "2016", a: 220, b: 170 },
];

const MorrisCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Donut Chart */}
      <ChartCard title="Donught Chart">
        <div className="relative">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {donutData.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[13px] text-gray-500">In-Store Sales</span>
            <span className="text-[22px] font-semibold text-gray-800">30</span>
          </div>
        </div>
      </ChartCard>

      {/* Line Chart - single red */}
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineSingle} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
            <Line type="monotone" dataKey="y" stroke="#f0483e" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar Chart - grouped years */}
      <ChartCard title="Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barYears} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill="#3ac569" barSize={8} />
            <Bar dataKey="b" fill="#6a73fa" barSize={8} />
            <Bar dataKey="c" fill="#f5b800" barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Line Chart - multi years */}
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineYears} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 200]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke="#f0483e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="b" stroke="#6a73fa" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="c" stroke="#2bb3a3" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar Chart - days */}
      <ChartCard title="Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barDays} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="y" fill="#6a73fa" background={{ fill: "#eef0fe" }} radius={[2, 2, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area Chart - stacked years */}
      <ChartCard title="Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaYears} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 200]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="a" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.55} />
            <Area type="monotone" dataKey="b" stroke="#3ac569" fill="#3ac569" fillOpacity={0.55} />
            <Area type="monotone" dataKey="c" stroke="#f5b800" fill="#f5b800" fillOpacity={0.55} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area Chart - full width */}
      <ChartCard title="Area Chart" className="lg:col-span-2">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={areaFull} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 300]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="a" stroke="#2bb3a3" fill="#2bb3a3" fillOpacity={0.5} />
            <Area type="monotone" dataKey="b" stroke="#2d4ea3" fill="#2d4ea3" fillOpacity={0.7} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default MorrisCharts;
