import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded shadow-sm p-6 w-full h-full">
    <h2 className="text-[16px] font-semibold text-gray-800 mb-1 pb-4 border-b border-gray-100">
      {title}
    </h2>
    <div className="pt-4">{children}</div>
  </div>
);

const axisProps = {
  axisLine: { stroke: "#e5e7eb" },
  tickLine: false,
  tick: { fontSize: 10, fill: "#9ca3af" },
};
const tooltipStyle = {
  contentStyle: {
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontSize: "12px",
  },
};

const BLUE = "#3f7ff2";
const RED = "#c0392b";
const ORANGE = "#f2984a";
const YELLOW = "#f5b800";
const PURPLE = "#6a4ff2";

// 1. Advanced Smil Animation
const smilData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({
  x, y: 3 + Math.round(Math.abs(Math.sin(x * 0.7)) * 9 * 10) / 10,
}));

// 2. Simple Line Chart
const simpleLine = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d, i) => ({
  d,
  a: [10, 6, 8, 8, 5][i],
  b: [1, 2, 6, 4, 3][i],
  c: [2, 5, 3, 8, 4][i],
}));

// 3. Line Scatter Diagram
const scatterColors = [RED, BLUE, YELLOW, PURPLE];
const scatterData = Array.from({ length: 90 }, (_, i) => ({
  x: i,
  y: Math.round(Math.random() * 100),
  fill: scatterColors[i % scatterColors.length],
}));

// 4. Line Chart With Tooltips
const tooltipLine = [1, 2, 3, 4, 5, 6].map((x) => ({
  x, a: Math.round(1.2 * Math.pow(1.55, x) * 10) / 10, b: Math.round(1 * Math.pow(1.5, x) * 10) / 10,
}));

// 5. Line Chart With Area
const areaOnly = [1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => ({
  x, y: [5, 7, 4, 6, 3, 4, 3, 6][i],
}));

// 6. Bi-Polar Line Chart With Area Only
const bipolarArea = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => ({
  x,
  a: [1, 2, -1, 1.5, 2, -0.5, 1, 2, 0][i],
  b: [-1, 0.5, 1, -1, 0.5, 1.5, -1, 0, 1][i],
  c: [0.5, -1, 0.5, 1, -1.5, 0.5, 0.5, -1, 1.5][i],
}));

// 7. SVG Path Animation
const pathAnim = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => ({
  d, y: [1, 5, 3, 6, 4, 8][i], base: 0.3,
}));

// 8. Line Interpolation / Smoothing
const interpData = [1, 2, 3, 4, 5].map((x, i) => ({
  x, red: [10, 15, 5, 8, 3][i], blue: [8, 8, 12, 3, 12][i],
}));

// 9. Different Configuration For Different Series
const diffConfig = [1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => ({
  x,
  blue: [0, 5, 0, -5, 0, 5, 0, -3][i],
  red: [1, -5, 8, 1, 8, -3, 8, 1][i],
  yellow: [2, 1, 3, 2, 4, 3, 5, 4][i],
}));

// 10. SVG Animations Chart
const svgAnimDots = [
  { x: 0, y: 5 }, { x: 15, y: 5 }, { x: 30, y: 6 }, { x: 45, y: 4 },
  { x: 60, y: 6 }, { x: 75, y: 2 }, { x: 90, y: 3 },
];

// 11. Bi-Polar Bar Chart
const bipolarBar = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"].map((w, i) => ({
  w, y: [8, 2, -3, -7, -3, 2, -6, 3, -9][i],
}));

// 12. Overlapping Bars On Mobile
const overlapMonths = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const overlapBars = overlapMonths.map((m, i) => ({
  m,
  a: [3, 5, 8, 6, 4, 9, 5, 7, 10, 6, 8, 5][i],
  b: [5, 3, 6, 9, 3, 6, 8, 5, 6, 8, 4, 7][i],
}));

// 13. Multi-Line Labels
const quarterLabels = ["First quarter\nof the year", "Second\nquarter of the\nyear", "Third quarter\nof the year", "Fourth quarter\nof the year"];
const multiLine = quarterLabels.map((q, i) => ({
  q: `Q${i + 1}`,
  a: [32000, 22000, 65000, 30000][i],
  b: [23000, 18000, 78000, 32000][i],
}));

// 14. Stacked Bar Chart
const stackedQ = ["Q1", "Q2", "Q3", "Q4"].map((q, i) => ({
  q, a: [500, 700, 900, 750][i], b: [300, 600, 900, 500][i], c: [200, 700, 400, 600][i],
}));

// 15. Horizontal Bar Chart
const hDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d, i) => ({
  d, a: [3, 4, 8, 6, 2.5, 8.5, 3][i], b: [5, 2, 6, 3.5, 6, 5, 8.5][i],
}));

// 16. Extreme Responsive Configuration
const extremeQ = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"].map((q, i) => ({
  q,
  a: [4, 2, 8, 4][i], b: [2, 5, 3, 6][i], c: [6, 3, 9, 2][i], d: [1, 6, 5, 3][i],
}));

// 17. Label Placement
const labelPlacement = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => ({
  d, a: [3, 6, 8, 3.5, 6, 4.5, 2][i], b: [2, 3, 5, 8.5, 2.5, 3, 5.5][i],
}));

// 18. Donut chart
const donutAnim = [
  { name: "A", value: 35, color: BLUE },
  { name: "B", value: 35, color: RED },
  { name: "C", value: 30, color: YELLOW },
];

// 19. Simple Pie Chart
const simplePie = [
  { name: "A", value: 15, color: ORANGE },
  { name: "B", value: 59, color: "#2bcbe0" },
  { name: "C", value: 26, color: BLUE },
];

// 20. Pie Chart With Custom Labels
const customLabelPie = [
  { name: "A", value: 10, color: PURPLE },
  { name: "B", value: 35, color: RED },
  { name: "C", value: 55, color: YELLOW },
];

// 21. Gauge chart (half donut)
const gaugeData = [
  { name: "A", value: 25, color: "#2d2a7a" },
  { name: "B", value: 25, color: ORANGE },
  { name: "C", value: 25, color: YELLOW },
  { name: "D", value: 25, color: RED },
];

const pctLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RAD = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RAD);
  const y = cy + radius * Math.sin(-midAngle * RAD);
  return (
    <text x={x} y={y} fill="#6b7280" fontSize={11} textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${Math.round(percent * 100)}%`}
    </text>
  );
};

const ChartistCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Advanced Smil Animation">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={smilData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 12.5]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="y" stroke={BLUE} strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Simple Line Chart">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={simpleLine} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="d" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 12.5]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke={BLUE} strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="b" stroke={RED} strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="c" stroke={YELLOW} strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Line Scatter Diagram">
        <ResponsiveContainer width="100%" height={220}>
          <ScatterChart margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} tick={false} />
            <YAxis dataKey="y" {...axisProps} domain={[0, 100]} />
            <Tooltip {...tooltipStyle} />
            <Scatter data={scatterData}>
              {scatterData.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Line Chart With Tooltips">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={tooltipLine} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 15]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke={BLUE} strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="b" stroke={RED} strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Line Chart With Area">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={areaOnly} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 8]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="y" stroke={BLUE} fill={BLUE} fillOpacity={0.25} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Bi-Polar Line Chart With Area Only">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={bipolarArea} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[-3, 3]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="a" stroke="none" fill={BLUE} fillOpacity={0.25} />
            <Area type="monotone" dataKey="b" stroke="none" fill={ORANGE} fillOpacity={0.25} />
            <Area type="monotone" dataKey="c" stroke="none" fill="#2bcbe0" fillOpacity={0.25} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="SVG Path Animation">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={pathAnim} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="d" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 8]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="y" stroke={BLUE} fill={BLUE} fillOpacity={0.2} strokeWidth={2} />
            <Line type="monotone" dataKey="base" stroke={YELLOW} strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Line Interpolation / Smoothing">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={interpData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 15]} />
            <Tooltip {...tooltipStyle} />
            <Line type="linear" dataKey="red" stroke={RED} strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="blue" stroke={BLUE} strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Different Configuration For Different Series">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={diffConfig} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} />
            <YAxis {...axisProps} domain={[-5, 10]} />
            <Tooltip {...tooltipStyle} />
            <Line type="linear" dataKey="blue" stroke={BLUE} strokeWidth={2} strokeDasharray="4 3" dot={false} />
            <Line type="linear" dataKey="red" stroke={RED} strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="yellow" stroke={YELLOW} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="SVG Animations Chart">
        <ResponsiveContainer width="100%" height={220}>
          <ScatterChart margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <XAxis dataKey="x" {...axisProps} tick={false} />
            <YAxis dataKey="y" {...axisProps} domain={[0, 8]} tick={false} />
            <Scatter data={svgAnimDots} fill={BLUE} />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Bi-Polar Bar Chart">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={bipolarBar} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="w" {...axisProps} />
            <YAxis {...axisProps} domain={[-10, 10]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="y" fill={BLUE} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Overlapping Bars On Mobile">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={overlapBars} margin={{ top: 5, right: 10, left: -15, bottom: 0 }} barGap={-8}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="m" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 10]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill={BLUE} barSize={10} fillOpacity={0.85} />
            <Bar dataKey="b" fill={RED} barSize={10} fillOpacity={0.85} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Multi-Line Labels">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={multiLine} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="q" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 80000]} tickFormatter={(v) => `${v / 1000}k CHF`} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill={BLUE} barSize={14} />
            <Bar dataKey="b" fill={RED} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Stacked Bar Chart">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={stackedQ} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="q" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 2500]} tickFormatter={(v) => `${v}k`} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" stackId="s" fill={BLUE} barSize={28} />
            <Bar dataKey="b" stackId="s" fill={RED} barSize={28} />
            <Bar dataKey="c" stackId="s" fill={YELLOW} barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Horizontal Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={hDays} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid horizontal={false} stroke="#f0f0f0" />
            <XAxis type="number" {...axisProps} domain={[0, 10]} />
            <YAxis type="category" dataKey="d" {...axisProps} width={80} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill={BLUE} barSize={8} />
            <Bar dataKey="b" fill={RED} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Extreme Responsive Configuration">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={extremeQ} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="q" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 10]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill="#2d2a7a" barSize={8} />
            <Bar dataKey="b" fill={ORANGE} barSize={8} />
            <Bar dataKey="c" fill={YELLOW} barSize={8} />
            <Bar dataKey="d" fill={PURPLE} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Label Placement">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={labelPlacement} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="d" {...axisProps} />
            <YAxis {...axisProps} domain={[0, 8.75]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill={PURPLE} barSize={10} />
            <Bar dataKey="b" fill={RED} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Animating A Donut With Svg.Animate">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={donutAnim} dataKey="value" innerRadius={55} outerRadius={85} stroke="none">
              {donutAnim.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Simple Pie Chart">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={simplePie} dataKey="value" outerRadius={85} stroke="#fff" strokeWidth={2} label={pctLabel} labelLine={false}>
              {simplePie.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Pie Chart With Custom Labels">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={customLabelPie} dataKey="value" innerRadius={45} outerRadius={85} stroke="#fff" strokeWidth={2} label={pctLabel} labelLine={false}>
              {customLabelPie.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Gauge Chart">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={gaugeData}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              cy="90%"
              innerRadius={60}
              outerRadius={95}
              stroke="none"
            >
              {gaugeData.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default ChartistCharts;
