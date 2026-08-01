import {
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const ChartCard = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded shadow-sm p-6 w-full h-full ${className}`}>
    <h2 className="text-[15px] font-semibold text-gray-800 mb-3">{title}</h2>
    <div>{children}</div>
  </div>
);

const barColor1 = [40, 65, 50, 30, 45, 60, 40, 70, 48, 32].map((y, x) => ({ x, y }));
const barColor2 = [30, -15, 45, -25, 20, -10, 35, -20, 40, 15, -30, 25].map((y, x) => ({ x, y }));
const barColor3 = [90, 78, 66, 55, 45, 38, 30, 24, 18, 12].map((y, x) => ({ x, y }));

const pieColor = [
  { name: "A", value: 22, color: "#f2984a" },
  { name: "B", value: 20, color: "#6a73fa" },
  { name: "C", value: 22, color: "#3f7ff2" },
  { name: "D", value: 18, color: "#e8368f" },
  { name: "E", value: 18, color: "#e0374a" },
];

const attributes = [
  { value: 68, color: "#e0374a", track: "#f6c8ce", ring: false },
  { value: 30, color: "#2d2a7a", track: "#d6d3f2", ring: false },
  { value: 60, color: "#2bb3a3", track: "#c9ece7", ring: false },
  { value: 20, color: "#c81e78", track: "#f2cfe4", ring: false },
  { value: 40, color: "#3f7ff2", track: "#e4e9fa", ring: true },
  { value: 12, color: "#e0374a", track: "#f6dde1", ring: true },
];

const bigBarPalette = ["#6a73fa", "#3f7ff2", "#e8368f"];
const bigBarData = Array.from({ length: 22 }, (_, i) => ({
  x: i,
  y: 15 + Math.round(Math.abs(Math.sin(i * 1.3)) * 55),
}));

const lineWave = Array.from({ length: 14 }, (_, i) => ({
  x: i,
  y: 20 + Math.round(Math.abs(Math.sin(i * 1.1)) * 60) + (i % 3 === 0 ? 15 : 0),
}));

const smallPiePct = [65, 55, 45, 40, 58, 50];
const donutColors = ["#3ac569", "#3f7ff2", "#2bb3a3", "#3f9cf2", "#2d2a7a", "#3ac569"];
const donutPct = [65, 55, 50, 55, 40, 60];

const liveUpdate = Array.from({ length: 30 }, (_, i) => ({
  x: i,
  y: 20 + Math.round(Math.abs(Math.sin(i * 0.8)) * 70),
}));

const MiniDonut = ({ value, color, track, ring = false }) => {
  const data = [
    { name: "v", value },
    { name: "rest", value: 100 - value },
  ];
  return (
    <ResponsiveContainer width="100%" height={90}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={ring ? 30 : 0}
          outerRadius={38}
          startAngle={90}
          endAngle={-270}
          stroke="none"
        >
          <Cell fill={color} />
          <Cell fill={ring ? "transparent" : track} stroke={ring ? track : "none"} strokeWidth={ring ? 2 : 0} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const SmallPie = ({ value, filledColor = "#c3c9fb", accentColor = "#6a73fa" }) => {
  const data = [
    { name: "v", value },
    { name: "rest", value: 100 - value },
  ];
  return (
    <ResponsiveContainer width="100%" height={110}>
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={48} startAngle={90} endAngle={-270} stroke="none">
          <Cell fill={accentColor} />
          <Cell fill={filledColor} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const SmallDonut = ({ value, color }) => {
  const data = [
    { name: "v", value },
    { name: "rest", value: 100 - value },
  ];
  return (
    <ResponsiveContainer width="100%" height={110}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={28} outerRadius={48} startAngle={90} endAngle={-270} stroke="none">
          <Cell fill={color} />
          <Cell fill="#eceef8" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const PeityCharts = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Row 1: bar/pie color demos */}
      <div className="bg-white rounded shadow-sm p-6 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-[15px] font-semibold text-gray-800 mb-3">Bar Color 1</h2>
          <ResponsiveContainer width="100%" height={90}>
            <BarChart data={barColor1}>
              <Bar dataKey="y" barSize={6} radius={[1, 1, 0, 0]}>
                {barColor1.map((_, i) => (
                  <Cell key={i} fill={i % 2 === 0 ? "#6a73fa" : "#3f9cf2"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-[15px] font-semibold text-gray-800 mb-3">Bar Color 2</h2>
          <ResponsiveContainer width="100%" height={90}>
            <BarChart data={barColor2}>
              <Bar dataKey="y" barSize={6} radius={[1, 1, 0, 0]}>
                {barColor2.map((d, i) => (
                  <Cell key={i} fill={d.y >= 0 ? "#6a2df2" : "#4a52c9"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-[15px] font-semibold text-gray-800 mb-3">Bar Color 3</h2>
          <ResponsiveContainer width="100%" height={90}>
            <BarChart data={barColor3}>
              <Bar dataKey="y" barSize={6}>
                {barColor3.map((_, i) => {
                  const t = i / (barColor3.length - 1);
                  const r = Math.round(21 + t * (43 - 21));
                  const g = Math.round(30 + t * (179 - 30));
                  const b = Math.round(58 + t * (163 - 58));
                  return <Cell key={i} fill={`rgb(${r},${g},${b})`} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-[15px] font-semibold text-gray-800 mb-3">Pie Color</h2>
          <ResponsiveContainer width="100%" height={90}>
            <PieChart>
              <Pie data={pieColor} dataKey="value" outerRadius={40} stroke="none">
                {pieColor.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 2: Attributes */}
      <ChartCard title="Attributes">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {attributes.map((a, i) => (
            <MiniDonut key={i} value={a.value} color={a.color} track={a.track} ring={a.ring} />
          ))}
        </div>
      </ChartCard>

      {/* Row 3: 3 big bar charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((k) => (
          <ChartCard title="Bar Chart" key={k}>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart data={bigBarData.map((d) => ({ ...d, y: (d.y + k * 7) % 90 + 10 }))}>
                <Bar dataKey="y" barSize={5} radius={[1, 1, 0, 0]}>
                  {bigBarData.map((_, i) => (
                    <Cell key={i} fill={bigBarPalette[(i + k) % bigBarPalette.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        ))}
      </div>

      {/* Row 4: 3 line/area charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((k) => (
          <ChartCard title="Line Chart" key={k}>
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={lineWave.map((d) => ({ ...d, y: (d.y + k * 11) % 80 + 15 }))}>
                <Area type="monotone" dataKey="y" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.55} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        ))}
      </div>

      {/* Row 5: Pie 1-6 */}
      <div className="bg-white rounded shadow-sm p-6 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {smallPiePct.map((p, i) => (
          <div key={i}>
            <h2 className="text-[15px] font-semibold text-gray-800 mb-2">Pie {i + 1}</h2>
            <SmallPie value={p} />
          </div>
        ))}
      </div>

      {/* Row 6: Donut 1-6 */}
      <div className="bg-white rounded shadow-sm p-6 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {donutPct.map((p, i) => (
          <div key={i}>
            <h2 className="text-[15px] font-semibold text-gray-800 mb-2">Donut {i + 1}</h2>
            <SmallDonut value={p} color={donutColors[i]} />
          </div>
        ))}
      </div>

      {/* Row 7: Live Update */}
      <ChartCard title="Live Update">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={liveUpdate}>
            <Area type="linear" dataKey="y" stroke="#6a73fa" fill="#6a73fa" fillOpacity={0.55} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default PeityCharts;
