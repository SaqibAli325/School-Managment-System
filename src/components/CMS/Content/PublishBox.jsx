import React, { useState } from "react";
import { RiArrowUpSLine, RiKey2Fill, RiEyeFill, RiCalendarFill } from "@remixicon/react";

const PublishBox = ({ onPublish }) => {
  const [open, setOpen] = useState(true);

  const editPill =
    "text-[#6A73FC] bg-[#F0F1FE] hover:bg-[#e2e4fd] text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors cursor-pointer ml-2";

  return (
    <div className="bg-white rounded shadow-sm mb-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <span className="text-[#6A73FC] font-semibold text-[15px]">Published</span>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 px-5 pt-4 pb-5">
          <div className="flex items-center text-sm text-gray-600 mb-3 border-b border-dashed pb-1 border-gray-200">
            <span className="font-medium text-gray-700 flex items-center gap-0.5 "><RiKey2Fill size={15} />Status:</span>
            <span className="ml-1">Published</span>
            <button className={editPill}>Edit</button>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-3 border-b border-dashed pb-1 border-gray-200">
            <span className="font-medium text-gray-700 flex items-center gap-0.5"> <RiEyeFill size={15} />Visible:</span>
            <span className="ml-1">Public</span>
            <button className={editPill}>Edit</button>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-4 flex-wrap ">
            <span className="font-medium text-gray-700 flex items-center gap-0.5"><RiCalendarFill size={15} />Published</span>
            <span className="ml-1">on :24-09-2023 16:22:52</span>
          </div>
          <button className={`${editPill} ml-0`}>Edit</button>

          <div className="flex justify-end mt-4 border-t border-gray-200 pt-2 mx-[-20px]">
            <button
              onClick={onPublish}
              className="mr-5 bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishBox;
