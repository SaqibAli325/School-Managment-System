import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "https://esm.sh/chart.js@4.4.1";
Chart.register(...registerables);

const miniBarHeights = [30, 50, 40, 70, 55, 85, 60, 95, 45, 75, 30, 65];
const miniCandleHeights = [60, 40, 80, 55, 100, 70, 45, 85, 30, 65, 90, 50];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const barData = [65, 58, 80, 81, 56, 56, 40];
const lineData = [25, 20, 60, 40, 65, 45, 83];

function StatCard({ title, value, bg, children }) {
  return (
    <div className={`${bg} rounded p-5 flex flex-col justify-between min-h-50 text-white`}>
      <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-4 -mx-5 px-5">
        <span className="text-[1.2rem] font-medium opacity-100">{title}</span>
        <span className="text-sm font-bold opacity-90">▲ {value}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function PieChart() {
  const ref = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    instance.current = new Chart(ref.current, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Inactive', 'New'],
        datasets: [{
          data: [210, 122, 90],
          backgroundColor: [
            '#b3b3ff',
            '#ffffff',
            '#7B7FD4',
          ],
          borderColor: 'transparent',
          borderWidth: 0,
          hoverOffset: 6,
        }],
      },
      options: {
        responsive: false,
        cutout: '60%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.parsed}`,
            },
          },
        },
      },
    });
    return () => instance.current?.destroy();
  }, []);

  return <canvas ref={ref} width={70} height={70} className="m-auto" />
}

function MiniBars({ heights }) {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="relative flex items-end gap-1 sm:gap-2.5 h-14 w-full">
      {heights.map((h, i) => (
        <div
          key={i}
          className="relative flex-1 rounded-t-sm cursor-pointer"
          style={{ height: `${h}%`, background: "rgba(255,255,255,0.65)" }}
          onMouseEnter={() => setTooltip({ i, h })}
          onMouseLeave={() => setTooltip(null)}
        >
          {tooltip?.i === i && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap z-10">
              {labels[i]}: {h}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MiniCandlestick({ heights }) {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="relative flex items-center gap-1 sm:gap-2.5 h-14 w-full">
      {heights.map((h, i) => (
        <div
          key={i}
          className="relative flex-1 rounded-sm cursor-pointer"
          style={{ height: `${h}%`, background: "rgba(255,255,255,0.6)" }}
          onMouseEnter={() => setTooltip({ i, h })}
          onMouseLeave={() => setTooltip(null)}
        >
          {tooltip?.i === i && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap z-10">
              {labels[i]}: {h}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MiniLine() {
  return (
    <svg width="100%" height="55" viewBox="0 0 160 55" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,40 20,30 40,45 60,15 80,35 100,10 120,30 140,20 160,35"
        fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function BarChart() {
  const ref = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    instance.current = new Chart(ref.current, {
      type: "bar",
      data: {
        labels: months,
        datasets: [{
          label: "Amount",
          data: barData,
          backgroundColor: "#7B7FD4",
          borderRadius: 4,
          borderSkipped: false,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: 0, max: 90,
            ticks: { stepSize: 10, font: { size: 11 } },
            grid: { color: "rgba(0,0,0,0.06)" },
          },
          x: {
            ticks: { font: { size: 11 } },
            grid: { display: false },
          },
        },
      },
    });
    return () => instance.current?.destroy();
  }, []);

  return (
    <div className="relative w-full h-60">
      <canvas ref={ref} role="img" aria-label="Bar chart income/expense Jan to Jul" />
    </div>
  );
}

function LineChart() {
  const ref = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    instance.current = new Chart(ref.current, {
      type: "line",
      data: {
        labels: months,
        datasets: [{
          label: "Amount",
          data: lineData,
          borderColor: "#7B7FD4",
          backgroundColor: "rgba(123,127,212,0.15)",
          pointBackgroundColor: "#7B7FD4",
          pointRadius: 4,
          fill: true,
          tension: 0.4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: 0, max: 100,
            ticks: { stepSize: 20, font: { size: 11 } },
            grid: { color: "rgba(0,0,0,0.06)" },
          },
          x: {
            ticks: { font: { size: 11 } },
            grid: { display: false },
          },
        },
      },
    });
    return () => instance.current?.destroy();
  }, []);

  return (
    <div className="relative w-full h-60">
      <canvas ref={ref} role="img" aria-label="Line chart income/expense Jan to Jul" />
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-5">
      <p className="text-sm font-medium text-gray-800 mb-4">{title}</p>
      {children}
    </div>
  );
}

export default function StudentDashboard() {
  return (
    <div className=" bg-gray-100 p-6">

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Students" value="422" bg="bg-[#6A73FA]">
          <PieChart />
        </StatCard>

        <StatCard title="New Students" value="357" bg="bg-[#7ED321]">
          <MiniBars heights={miniBarHeights} />
        </StatCard>

        <StatCard title="Total Course" value="547" bg="bg-[#673BB7]">
          <MiniCandlestick heights={miniCandleHeights} />
        </StatCard>

        <StatCard title="Fees Collection" value="3280$" bg="bg-[#FF3232]">
          <MiniLine />
        </StatCard>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ChartCard title="Income/Expense Report">
          <BarChart />
        </ChartCard>

        <ChartCard title="Income/Expense Report">
          <LineChart />
        </ChartCard>
      </div>

    </div>
  );
}
