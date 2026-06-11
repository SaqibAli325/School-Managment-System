// StatCard.jsx
export default function StatCard({ color, icon, label, value, progress, footer }) {
  return (
    <div className={`bg-blue-500 rounded-xl p-5 text-white flex flex-col gap-3 flex-1 min-w-[160px]`}>
      
      {/* Icon LEFT — Text RIGHT */}
      <div className="flex flex-row items-center gap-4">
        <div className="w-14 h-14 min-w-[56px] rounded-full bg-white/25 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold tracking-widest uppercase opacity-90 m-0">{label}</p>
          <p className="text-3xl font-bold leading-tight m-0">{value}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/25 rounded-full h-1.5">
        <div className="bg-white h-1.5 rounded-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Footer */}
      <p className="text-[11px] opacity-85 m-0">{footer}</p>
    </div>
  );
}