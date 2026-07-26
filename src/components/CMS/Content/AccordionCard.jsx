import React, { useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

const AccordionCard = ({ title, defaultOpen = true, children, className = "" }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded shadow-sm mb-5 ${className}`}>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <span className="text-[#6A73FC] font-semibold text-[15px]">{title}</span>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 px-5 pt-5 pb-6">{children}</div>
      </div>
    </div>
  );
};

export default AccordionCard;
