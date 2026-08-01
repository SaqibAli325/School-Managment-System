import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  PieChart,
  Pie,
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

// --- datasets ---
const barAsc = [3, 5, 6, 8, 10, 12, 14, 16, 18, 20].map((y, x) => ({ x, y }));

const trafficWave1 = [4, 3, 5, 8, 6, 9, 7, 10, 8, 6, 9, 7].map((y, x) => ({ x, y }));
const trafficWave2 = [5, 4, 6, 5, 7, 6, 9, 6, 8, 5, 7, 9].map((y, x) => ({ x, y }));

const barPink = [8, 3, 10, 6, 9, 4, 7, 3, 5, 8, 6, 4].map((y, x) => ({ x, y }));

const stacked = [
  { x: 0, a: 4, b: 6, c: 5 },
  { x: 1, a: 6, b: 4, c: 3 },
  { x: 2, a: 5, b: 5, c: 4 },
  { x: 3, a: 7, b: 3, c: 6 },
];

const tristate = [3, -2, 4, 0, -3, 2, 0, -4, 3, -1, 2, -2, 0, 3].map((y, x) => ({ x, y }));

const composite = [
  { x: 0, bar: 4, line: 2 },
  { x: 1, bar: 8, line: 4 },
  { x: 2, bar: 5, line: 6 },
  { x: 3, bar: 9, line: 5 },
  { x: 4, bar: 12, line: 8 },
  { x: 5, bar: 6, line: 7 },
  { x: 6, bar: 10, line: 9 },
  { x: 7, bar: 7, line: 6 },
  { x: 8, bar: 14, line: 10 },
];

const compositeBar = [3, 6, 4, 8, 5, 9, 6, 7, 5, 8, 6, 4, 7, 5].map((y, x) => ({ x, y }));

const pieSpark = [
  { name: "A", value: 34, color: "#6a73fa" },
  { name: "B", value: 33, color: "#2bb3a3" },
  { name: "C", value: 33, color: "#f0768c" },
];

// --- Bullet chart (custom svg) ---
const BulletChart = () => (
  <div className="w-full h-[70px] flex items-center">
    <svg viewBox="0 0 400 40" className="w-full h-10">
      <rect x="0" y="8" width="400" height="24" fill="#e4e7fb" />
      <rect x="0" y="8" width="260" height="24" fill="#c3c9fb" />
      <rect x="0" y="8" width="150" height="24" fill="#9aa1f9" />
      <rect x="0" y="14" width="230" height="12" fill="#4a52c9" />
      <line x1="300" y1="2" x2="300" y2="38" stroke="#e0374a" strokeWidth="3" />
    </svg>
  </div>
);

// --- Box plot (custom svg) ---
const BoxPlot = () => (
  <div className="w-full h-[70px] flex items-center">
    <svg viewBox="0 0 200 40" className="w-40 h-10">
      <line x1="10" y1="20" x2="70" y2="20" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="130" y1="20" x2="190" y2="20" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="10" y2="30" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="190" y1="10" x2="190" y2="30" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="70" y="6" width="60" height="28" fill="#c3c9fb" stroke="#6a73fa" strokeWidth="1.5" />
      <line x1="100" y1="6" x2="100" y2="34" stroke="#6a73fa" strokeWidth="1.5" />
    </svg>
  </div>
);

const SparklineCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={barAsc}>
            <Bar dataKey="y" fill="#3ac569" radius={[1, 1, 0, 0]} barSize={6} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Site Traffic">
        <ResponsiveContainer width="100%" height={90}>
          <AreaChart data={trafficWave1}>
            <Area type="monotone" dataKey="y" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.85} strokeWidth={1.5} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Site Traffic">
        <ResponsiveContainer width="100%" height={90}>
          <AreaChart data={trafficWave2}>
            <Area type="monotone" dataKey="y" stroke="#f2984a" fill="#f2984a" fillOpacity={0.85} strokeWidth={1.5} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Bar Chart">
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={barPink}>
            <Bar dataKey="y" fill="#e8368f" radius={[1, 1, 0, 0]} barSize={6} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Stacked Bar CHART">
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={stacked} barGap={2}>
            <Bar dataKey="a" stackId="s" fill="#2d4ea3" barSize={14} />
            <Bar dataKey="b" stackId="s" fill="#2bb3a3" barSize={14} />
            <Bar dataKey="c" stackId="s" fill="#f2984a" barSize={14} radius={[1, 1, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Tristate Charts">
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={tristate}>
            <Bar dataKey="y" barSize={5}>
              {tristate.map((d, i) => (
                <Cell key={i} fill={d.y === 0 ? "#d1d5db" : d.y > 0 ? "#3ac569" : "#e8368f"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Composite Line Chart">
        <ResponsiveContainer width="100%" height={90}>
          <ComposedChart data={composite}>
            <Area type="monotone" dataKey="line" stroke="#2d4ea3" fill="#c3c9fb" fillOpacity={0.6} strokeWidth={1.5} />
            <Bar dataKey="bar" fill="#3ac569" barSize={8} />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Composite Bar Chart">
        <ResponsiveContainer width="100%" height={90}>
          <BarChart data={compositeBar}>
            <Bar dataKey="y" fill="#6a73fa" radius={[1, 1, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Bullet Chart">
        <BulletChart />
      </ChartCard>

      <ChartCard title="Pie Chart">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie data={pieSpark} dataKey="value" innerRadius={0} outerRadius={55} stroke="none">
              {pieSpark.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Box Plot">
        <BoxPlot />
      </ChartCard>
    </div>
  );
};

export default SparklineCharts;
