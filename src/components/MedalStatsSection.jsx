import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { v: 30 }, { v: 60 }, { v: 40 }, { v: 80 }, { v: 50 },
  { v: 90 }, { v: 45 }, { v: 70 }, { v: 55 }, { v: 85 },
  { v: 40 }, { v: 65 }, { v: 75 }, { v: 50 }, { v: 95 },
];

export const medals = [
  {
    title: "Gold Medal",
    color: "#A2BAD3",
    stroke: "#e8673a",
    overall: "82.24%",
    monthly: "12.24 %",
    day: "42.24%",
    badge: "20% High then last mont",
  },
  {
    title: "Silver Medal",
    color: "#FFE1C1",
    stroke: "#e8673a",
    overall: "82.24%",
    monthly: "12.24 %",
    day: "42.24%",
    badge: "20% High then last mont",
  },
  {
    title: "Bronze Medal",
    color: "#FBB49D",
    stroke: "#e8673a",
    overall: "82.24%",
    monthly: "12.24 %",
    day: "42.24%",
    badge: "20% High then last mont",
  },
];

export const MedalStatsCard = ({ title, color, stroke, overall, monthly, day, badge }) => {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col w-auto h-full">
      <div className="px-5 pt-5 pb-3 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-green-500 text-xs font-medium flex items-center gap-0.5">
          ▲ {badge}
        </span>
      </div>

      <div className="px-5 pb-4 grid grid-cols-3 gap-2">
        <div>
          <p className="text-xs text-gray-500 leading-tight">Overall Growth</p>
          <p className="text-sm font-bold text-gray-800 mt-1">{overall}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Montly</p>
          <p className="text-sm font-bold text-gray-800 mt-1">{monthly}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Day</p>
          <p className="text-sm font-bold text-gray-800 mt-1">{day}</p>
        </div>
      </div>

      <div className="mt-auto">
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${title.replace(/\s+/g, "-")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.9} />
                <stop offset="95%" stopColor={color} stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{ fontSize: "11px", borderRadius: "6px", border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke={stroke}
              strokeWidth={2}
              fill={`url(#grad-${title.replace(/\s+/g, "-")})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const MedalStatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
      {medals.map((medal) => (
        <MedalStatsCard key={medal.title} {...medal} />
      ))}
    </div>
  );
};

export default MedalStatsSection;