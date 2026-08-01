import React from "react";

const placeholders = [
  { code: "#USERNAME#", desc: "Username can display with this placeholder." },
  { code: "#USERNAME#", desc: "Username can display with this placeholder." },
  { code: "#LASTNAME#", desc: "Lastname can display with this placeholder." },
  { code: "#TELEPHONE#", desc: "Contact number can display with this placeholder." },
  { code: "#PASSWORD#", desc: "password can display with this placeholder." },
  { code: "#SITENAME#", desc: "Site name can display with this placeholder." },
];

const PlaceholderPanel = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Placeholder</label>
      <div className="border border-gray-200 rounded-md bg-[#F5F5F5] max-h-[150px] overflow-y-auto px-4 py-3">
        <p className="text-sm font-semibold text-gray-700 mb-1.5">User Configuration</p>
        <ul className="flex flex-col gap-1">
          {placeholders.map((p, i) => (
            <li key={i} className="text-xs text-gray-500 leading-relaxed">
              <span className=" font-medium">{p.code}#:</span> {p.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaceholderPanel;
