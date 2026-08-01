import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BLUE = "#6a73fa";
const GREEN = "#3ac569";

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

// ---- Static datasets (mirroring flot demo shapes) ----

const barSingle = [
  { x: 0, y: 3 },
  { x: 2.5, y: 8.5 },
  { x: 5, y: 5.5 },
  { x: 7.5, y: 13 },
  { x: 10, y: 5.3 },
  { x: 12.5, y: 7.5 },
  { x: 15, y: 4 },
  { x: 17.5, y: 6.3 },
];

const barGrouped = [
  { x: 0, a: 3, b: 5 },
  { x: 2.5, a: 8.5, b: 6.5 },
  { x: 5, a: 5.5, b: 10.2 },
  { x: 7.5, a: 13, b: 6.4 },
  { x: 10, a: 5.3, b: 8.6 },
  { x: 12.5, a: 7.5, b: 5.4 },
  { x: 15, a: 4, b: 8.5 },
  { x: 17.5, a: 6.3, b: 5.5 },
];

const lineUp = [
  { x: 0, a: 2.2, b: 0.8 },
  { x: 1, a: 4.5, b: 2.2 },
  { x: 2, a: 6.1, b: 4.5 },
  { x: 3, a: 5.4, b: 3.2 },
  { x: 4, a: 6.7, b: 4.9 },
  { x: 5, a: 8.1, b: 6.1 },
  { x: 6, a: 9.6, b: 8.7 },
];

const lineDown = [
  { x: 0, a: 10, b: 7.2 },
  { x: 1, a: 6.8, b: 4.9 },
  { x: 2, a: 7.6, b: 6.8 },
  { x: 3, a: 8.4, b: 7.5 },
  { x: 4, a: 5.5, b: 4.1 },
  { x: 5, a: 5, b: 3.1 },
  { x: 6, a: 6.5, b: 5.6 },
];

const areaUp = [
  { x: 0, a: 1.2, b: 1.6 },
  { x: 1, a: 1.5, b: 1.9 },
  { x: 2, a: 1.7, b: 3.2 },
  { x: 3, a: 1.3, b: 2.5 },
  { x: 4, a: 1.8, b: 3.4 },
  { x: 5, a: 1.6, b: 5.5 },
  { x: 6, a: 1.9, b: 7.9 },
];

const areaWave = [
  { x: 0, a: 3.5, b: 3.5 },
  { x: 1, a: 4.0, b: 4.2 },
  { x: 2, a: 2.1, b: 5.9 },
  { x: 3, a: 2.4, b: 3.5 },
  { x: 4, a: 3.1, b: 4.0 },
  { x: 5, a: 3.4, b: 6.0 },
  { x: 6, a: 3.3, b: 6.6 },
];

const genRealtimePoint = (prev, x) => {
  const delta = (Math.random() - 0.45) * 6;
  let next = prev + delta;
  next = Math.max(45, Math.min(80, next));
  return { x, y: Math.round(next * 10) / 10 };
};

const useRealtimeData = (start = 55, max = 40) => {
  const [data, setData] = useState(() => {
    const seed = [];
    let val = start;
    for (let i = 0; i <= 22; i++) {
      val = genRealtimePoint(val, i).y;
      seed.push({ x: i, y: val });
    }
    return seed;
  });
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const lastX = prev[prev.length - 1].x + 1;
        const lastY = prev[prev.length - 1].y;
        const point = genRealtimePoint(lastY, lastX);
        return [...prev.slice(1), point];
      });
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return data;
};

const FlotCharts = () => {
  const realtimeLine = useRealtimeData(55);
  const realtimeArea = useRealtimeData(40);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart - single series */}
      <ChartCard title="Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barSingle} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 17.5]} />
            <YAxis {...axisProps} domain={[0, 15]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="y" fill={BLUE} radius={[2, 2, 0, 0]} barSize={26} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Bar Chart - grouped series */}
      <ChartCard title="Bar Chart">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barGrouped} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 17.5]} />
            <YAxis {...axisProps} domain={[0, 15]} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="a" fill={BLUE} radius={[2, 2, 0, 0]} barSize={12} />
            <Bar dataKey="b" fill={GREEN} radius={[2, 2, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Line Chart 1 */}
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineUp} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 6]} />
            <YAxis {...axisProps} domain={[0, 12]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke={BLUE} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="b" stroke={GREEN} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Line Chart 2 */}
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineUp} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 6]} />
            <YAxis {...axisProps} domain={[0, 12]} />
            <Tooltip {...tooltipStyle} />
            <Line type="basis" dataKey="a" stroke={BLUE} strokeWidth={2} dot={false} />
            <Line type="basis" dataKey="b" stroke={GREEN} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Line Chart 3 */}
      <ChartCard title="Line Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineDown} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 6]} />
            <YAxis {...axisProps} domain={[2, 12]} />
            <Tooltip {...tooltipStyle} />
            <Line type="monotone" dataKey="a" stroke={BLUE} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="b" stroke={GREEN} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area Chart 1 - stacked */}
      <ChartCard title="Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaUp} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 6]} />
            <YAxis {...axisProps} domain={[0, 12.5]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="b" stackId="1" stroke={GREEN} fill={GREEN} fillOpacity={1} />
            <Area type="monotone" dataKey="a" stackId="1" stroke={BLUE} fill={BLUE} fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area Chart 2 - stacked wave */}
      <ChartCard title="Area Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={areaWave} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={[0, 6]} />
            <YAxis {...axisProps} domain={[0, 12]} />
            <Tooltip {...tooltipStyle} />
            <Area type="monotone" dataKey="b" stackId="1" stroke={GREEN} fill={GREEN} fillOpacity={1} />
            <Area type="monotone" dataKey="a" stackId="1" stroke={BLUE} fill={BLUE} fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Realtime Chart - line */}
      <ChartCard title="Realtime Chart">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={realtimeLine} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={["dataMin", "dataMax"]} />
            <YAxis {...axisProps} domain={[45, 80]} />
            <Tooltip {...tooltipStyle} />
            <Line type="linear" dataKey="y" stroke={BLUE} strokeWidth={1.5} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Realtime Chart - area */}
      <ChartCard title="Realtime Chart">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={realtimeArea} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="x" {...axisProps} type="number" domain={["dataMin", "dataMax"]} />
            <YAxis {...axisProps} domain={[0, 80]} />
            <Tooltip {...tooltipStyle} />
            <Area type="linear" dataKey="y" stroke={BLUE} fill={BLUE} fillOpacity={0.85} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default FlotCharts;
