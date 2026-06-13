import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────
const SAMPLE_EVENTS = [
  { id: 1,  date: "2021-02-01", title: "All Day Event",    color: "bg-indigo-500",  allDay: true,  span: 1 },
  { id: 2,  date: "2021-02-07", title: "Long Event",       color: "bg-red-500",     allDay: true,  span: 3 },
  { id: 3,  date: "2021-02-09", title: "4p Repeating Ev",  color: "bg-indigo-500",  allDay: false, dot: true },
  { id: 4,  date: "2021-02-11", title: "Conference",       color: "bg-red-500",     allDay: true,  span: 2 },
  { id: 5,  date: "2021-02-11", title: "12p Lunch",        color: "bg-teal-500",    allDay: false, dot: true },
  { id: 6,  date: "2021-02-11", title: "8p Dinner",        color: "bg-yellow-400",  allDay: false, dot: true, textDark: true },
  { id: 7,  date: "2021-02-13", title: "7a Birthday Part", color: "bg-indigo-500",  allDay: false, dot: true },
  { id: 8,  date: "2021-02-16", title: "4p Repeating Ev",  color: "bg-indigo-500",  allDay: false, dot: true },
  { id: 9,  date: "2021-02-28", title: "Click for Google", color: "bg-indigo-500",  allDay: true,  span: 1 },
];

const SIDEBAR_EVENTS = [
  { label: "New Theme Release", color: "bg-indigo-500" },
  { label: "My Event",          color: "bg-yellow-400" },
  { label: "Meet manager",      color: "bg-red-500"    },
  { label: "Create New theme",  color: "bg-teal-500"   },
  { label: "Project Launch",    color: "bg-gray-500"   },
  { label: "Meeting",           color: "bg-purple-500" },
];

const DAYS_SHORT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DAYS_LONG  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS     = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const HOURS      = ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function toKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function getWeekNum(d) {
  const jan1 = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
}
function eventsForDate(key) {
  return SAMPLE_EVENTS.filter(e => e.date === key);
}

// ─── Month View ───────────────────────────────────────────────────────────────
function MonthView({ current }) {
  const y = current.getFullYear(), m = current.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const cells = [];
  let day = 1 - firstDay;
  for (let w = 0; w < 6; w++) {
    const rowStart = new Date(y, m, day);
    const wn = getWeekNum(rowStart);
    const row = [];
    for (let d = 0; d < 7; d++) {
      const cur = new Date(y, m, day);
      row.push({ date: cur, key: toKey(cur), isOther: cur.getMonth() !== m });
      day++;
    }
    cells.push({ wn, row });
  }

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr>
            <th className="w-8 border border-gray-200 text-xs text-gray-400 font-normal py-2"></th>
            {DAYS_SHORT.map(d => (
              <th key={d} className="border border-gray-200 text-xs text-gray-500 font-medium py-2 text-center">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cells.map(({ wn, row }) => (
            <tr key={wn}>
              <td className="border border-gray-200 text-xs text-gray-300 text-center align-top py-1 px-1">W{wn}</td>
              {row.map(({ date, key, isOther }) => {
                const evs = eventsForDate(key);
                return (
                  <td key={key} className={`border border-gray-200 align-top h-24 p-1 ${isOther ? "opacity-30" : ""}`}>
                    <div className="text-xs text-gray-500 text-right mb-1">{date.getDate()}</div>
                    {evs.map(ev => (
                      ev.allDay ? (
                        <div key={ev.id} className={`${ev.color} text-white text-xs px-2 py-0.5 rounded mb-0.5 truncate cursor-pointer`}>
                          {ev.title}
                        </div>
                      ) : (
                        <div key={ev.id} className="flex items-center gap-1 text-xs mb-0.5 truncate cursor-pointer">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${ev.color}`}></span>
                          <span className="text-gray-700 truncate">{ev.title}</span>
                        </div>
                      )
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Week View ────────────────────────────────────────────────────────────────
function WeekView({ current }) {
  const sunday = new Date(current);
  sunday.setDate(current.getDate() - current.getDay());
  const cols = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday); d.setDate(sunday.getDate() + i);
    return { date: d, key: toKey(d) };
  });
  const wn = getWeekNum(sunday);

  return (
    <div className="flex-1 overflow-auto">
      {/* Header row */}
      <div className="flex border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="w-14 shrink-0 border-r border-gray-200 text-xs text-gray-400 px-1 py-2 text-right">W {wn}</div>
        {cols.map(({ date }) => (
          <div key={toKey(date)} className="flex-1 text-center text-xs font-medium text-gray-700 py-2 border-r border-gray-200">
            {DAYS_SHORT[date.getDay()]} {date.getMonth()+1}/{date.getDate()}
          </div>
        ))}
      </div>
      {/* All-day row */}
      <div className="flex border-b border-gray-300 min-h-9">
        <div className="w-14 shrink-0 border-r border-gray-200 text-xs text-gray-400 px-1 py-2 text-right">all-day</div>
        {cols.map(({ key }) => {
          const allDay = eventsForDate(key).filter(e => e.allDay);
          return (
            <div key={key} className="flex-1 border-r border-gray-200 p-1">
              {allDay.map(ev => (
                <div key={ev.id} className={`${ev.color} text-white text-xs px-2 py-0.5 rounded mb-0.5 truncate`}>{ev.title}</div>
              ))}
            </div>
          );
        })}
      </div>
      {/* Time grid */}
      <div className="flex">
        <div className="w-14 shrink-0 border-r border-gray-200">
          {HOURS.map(h => (
            <div key={h} className="h-12 border-b border-dashed border-gray-100 text-xs text-gray-400 text-right pr-2 pt-1">{h}</div>
          ))}
        </div>
        {cols.map(({ key }) => (
          <div key={key} className="flex-1 border-r border-gray-200">
            {HOURS.map(h => (
              <div key={h} className="h-12 border-b border-dashed border-gray-100 hover:bg-indigo-50 cursor-pointer transition-colors"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Day View ─────────────────────────────────────────────────────────────────
function DayView({ current }) {
  const key = toKey(current);
  const wn = getWeekNum(current);
  const allDay = eventsForDate(key).filter(e => e.allDay);

  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="flex border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="w-14 shrink-0 border-r border-gray-200 text-xs text-gray-400 px-1 py-2 text-right">W {wn}</div>
        <div className="flex-1 text-center text-sm font-medium text-gray-700 py-2">{DAYS_LONG[current.getDay()]}</div>
      </div>
      {/* All-day */}
      <div className="flex border-b border-gray-300 min-h-9">
        <div className="w-14 shrink-0 border-r border-gray-200 text-xs text-gray-400 px-1 py-2 text-right">all-day</div>
        <div className="flex-1 p-1">
          {allDay.map(ev => (
            <div key={ev.id} className={`${ev.color} text-white text-xs px-2 py-0.5 rounded mb-0.5 w-full`}>{ev.title}</div>
          ))}
        </div>
      </div>
      {/* Time grid */}
      <div className="flex">
        <div className="w-14 shrink-0 border-r border-gray-200">
          {HOURS.map(h => (
            <div key={h} className="h-12 border-b border-dashed border-gray-100 text-xs text-gray-400 text-right pr-2 pt-1">{h}</div>
          ))}
        </div>
        <div className="flex-1">
          {HOURS.map(h => (
            <div key={h} className="h-12 border-b border-dashed border-gray-100 hover:bg-indigo-50 cursor-pointer transition-colors"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Calendar ────────────────────────────────────────────────────────────
export default function Calendar() {
  const [view, setView]       = useState("month");
  const [current, setCurrent] = useState(new Date(2021, 1, 1));

  function navigate(dir) {
    if (view === "month") {
      setCurrent(new Date(current.getFullYear(), current.getMonth() + dir, 1));
    } else if (view === "week") {
      const d = new Date(current); d.setDate(d.getDate() + dir * 7); setCurrent(d);
    } else {
      const d = new Date(current); d.setDate(d.getDate() + dir); setCurrent(d);
    }
  }

  function getTitle() {
    if (view === "month") return `${MONTHS[current.getMonth()].toUpperCase()} ${current.getFullYear()}`;
    if (view === "week") {
      const sun = new Date(current); sun.setDate(current.getDate() - current.getDay());
      const sat = new Date(sun); sat.setDate(sun.getDate() + 6);
      return `${MONTHS[sun.getMonth()].slice(0,3).toUpperCase()} ${sun.getDate()}–${MONTHS[sat.getMonth()].slice(0,3)} ${sat.getDate()}, ${sat.getFullYear()}`;
    }
    return `${MONTHS[current.getMonth()].toUpperCase()} ${current.getDate()}, ${current.getFullYear()}`;
  }

  return (
    <div className="flex h-fit bg-white overflow-hidden rounded-xl shadow-sm border border-gray-200">
      {/* ── Calendar area ── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 flex-wrap">
          {/* Nav */}
          <div className="flex gap-1">
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-gray-600"
            >‹</button>
            <button
              onClick={() => navigate(1)}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 text-gray-600"
            >›</button>
          </div>
          <button
            onClick={() => setCurrent(new Date(2021, 1, 1))}
            className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded"
          >Today</button>

          {/* Title */}
          <div className="flex-1 text-center text-base font-semibold text-gray-800 min-w-36">{getTitle()}</div>

          {/* View tabs */}
          <div className="flex rounded border border-gray-300 overflow-hidden text-sm">
            {["month","week","day"].map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1.5 capitalize ${view === v ? "bg-indigo-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
              >{v.charAt(0).toUpperCase() + v.slice(1)}</button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {view === "month" && <MonthView current={current} />}
          {view === "week"  && <WeekView  current={current} />}
          {view === "day"   && <DayView   current={current} />}
        </div>
      </div>

      {/* ── Sidebar ── */}
      <div className="w-56 shrink-0 border-l border-gray-200 p-4 flex flex-col gap-3 overflow-y-auto">
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-1">Calendar</h2>
          <p className="text-xs text-gray-500">Drag and drop your event or click in the calendar</p>
        </div>

        <div className="flex flex-col gap-2">
          {SIDEBAR_EVENTS.map(ev => (
            <div
              key={ev.label}
              draggable
              className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 cursor-grab text-sm text-gray-700 hover:bg-gray-50"
            >
              <span className={`w-3 h-3 rounded-full shrink-0 ${ev.color}`}></span>
              {ev.label}
            </div>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer mt-1">
          <input type="checkbox" className="rounded" />
          Remove After Drop
        </label>

        <button className="w-full py-2 bg-[#3945F8] hover:bg-indigo-600 text-white text-sm rounded flex items-center justify-center gap-1">
          <span className="text-lg leading-none">+</span> Create New
        </button>
      </div>
    </div>
  );
}
