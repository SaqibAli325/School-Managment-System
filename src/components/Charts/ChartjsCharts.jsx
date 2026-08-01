import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartCard = ({ title, subtitle, children }) => (
  <div className="bg-white rounded shadow-sm p-6 w-full h-full">
    <h2 className="text-[16px] font-semibold text-gray-800">{title}</h2>
    {subtitle && <p className="text-[12px] text-gray-400 mt-0.5 mb-2">{subtitle}</p>}
    <div className="pt-3">{children}</div>
  </div>
);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
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

const barData = months.map((m, i) => ({ m, y: [52, 45, 63, 62, 42, 40, 30][i] }));

const stackedDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((d) => ({
  d, a: 8, b: 12, c: 10,
}));

const lineBasic = months.map((m, i) => ({ m, y: [20, 22, 45, 30, 48, 32, 62][i] }));
const dualLine = months.map((m, i) => ({
  m,
  a: [20, 22, 45, 30, 48, 45, 78][i],
  b: [5, 22, 30, 30, 42, 62, 80][i],
}));

const areaBasic = months.map((m, i) => ({ m, y: [10, 22, 65, 40, 68, 45, 88][i] }));
const dualArea = months.map((m, i) => ({
  m,
  a: [15, 22, 60, 40, 65, 45, 88][i],
  b: [20, 22, 30, 25, 20, 65, 68][i],
}));

const radarData = [
  { subject: "Eating Dinner", a: 90, b: 55 },
  { subject: "Drinking Water", a: 55, b: 70 },
  { subject: "Sleeping", a: 60, b: 75 },
  { subject: "Designing Graphics", a: 75, b: 45 },
  { subject: "Coding", a: 65, b: 30 },
  { subject: "Cycling", a: 45, b: 80 },
  { subject: "Running", a: 60, b: 85 },
];

const pieData = [
  { name: "A", value: 40, color: "#6a73fa" },
  { name: "B", value: 15, color: "#dfe1f5" },
  { name: "C", value: 20, color: "#c3c9fb" },
  { name: "D", value: 25, color: "#a9b0f8" },
];

const doughnutData = [
  { name: "A", value: 25, color: "#e0374a" },
  { name: "B", value: 45, color: "#6a73fa" },
  { name: "C", value: 30, color: "#3ac569" },
];

const polarData = [
  { name: "A", value: 20, color: "#f5b800" },
  { name: "B", value: 16, color: "#3f7ff2" },
  { name: "C", value: 12, color: "#3ac569" },
  { name: "D", value: 9, color: "#e0374a" },
];

const PolarAreaChart = ({ data, size = 260 }) => {
  const max = Math.max(...data.map((d) => d.value));
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2 - 30;
  const n = data.length;
  const angleStep = 360 / n;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <circle key={t} cx={cx} cy={cy} r={maxR * t} fill="none" stroke="#eceef2" strokeWidth="1" />
      ))}
      {data.map((d, i) => {
        const r = (d.value / max) * maxR;
        const startAngle = -90 + i * angleStep;
        const endAngle = startAngle + angleStep;
        const toRad = (deg) => (deg * Math.PI) / 180;
        const x1 = cx + r * Math.cos(toRad(startAngle));
        const y1 = cy + r * Math.sin(toRad(startAngle));
        const x2 = cx + r * Math.cos(toRad(endAngle));
        const y2 = cy + r * Math.sin(toRad(endAngle));
        const largeArc = angleStep > 180 ? 1 : 0;
        const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
        return <path key={i} d={path} fill={d.color} fillOpacity={0.85} stroke="#fff" strokeWidth="1" />;
      })}
    </svg>
  );
};

const ChartjsCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Basic Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 90]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="y" fill="#6a73fa" barSize={26} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Gradient Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a9b0f8" />
                <stop offset="100%" stopColor="#dfe1f5" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 90]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="y" fill="url(#barGrad)" barSize={26} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Stalked Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={stackedDays} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="d" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 40]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" stackId="s" fill="#6a73fa" barSize={26} />
            <Bar dataKey="b" stackId="s" fill="#2bb3a3" barSize={26} />
            <Bar dataKey="c" stackId="s" fill="#e0374a" barSize={26} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Basic Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineBasic} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="y" stroke="#6a73fa" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Gradient Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineBasic} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="y" stroke="#a9b0f8" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Dual Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={dualLine} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke="#6a73fa" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="b" stroke="#f5b800" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Basic Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaBasic} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="y" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.4} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Gradinet Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaBasic} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="y" stroke="#e0374a" fill="#e0374a" fillOpacity={0.3} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Dual Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={dualArea} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="a" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.45} strokeWidth={2} />
            <Area type="monotone" dataKey="b" stroke="#f5b800" fill="#f5b800" fillOpacity={0.45} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Radar Chart">
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData} outerRadius={90}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "#6b7280" }} />
            <PolarRadiusAxis tick={{ fontSize: 9, fill: "#9ca3af" }} />
            <Radar dataKey="a" stroke="#3f9cf2" fill="#3f9cf2" fillOpacity={0.4} />
            <Radar dataKey="b" stroke="#3ac569" fill="#3ac569" fillOpacity={0.4} />
          </RadarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Pie Chart">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={95} stroke="none">
              {pieData.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Doughnut Chart">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie data={doughnutData} dataKey="value" innerRadius={55} outerRadius={95} stroke="none">
              {doughnutData.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Polar Chart">
        <PolarAreaChart data={polarData} />
      </ChartCard>
    </div>
  );
};

export default ChartjsCharts;
