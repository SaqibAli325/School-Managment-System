import React, { useState } from "react";
import { RiArrowUpSLine, RiMailFill } from "@remixicon/react";
import EmailTemplateEditor from "./EmailTemplateEditor.jsx";
import PlaceholderPanel from "./PlaceholderPanel.jsx";

const AddEmailTemplateForm = ({ onSave }) => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [templateBody, setTemplateBody] = useState("");
  const [active, setActive] = useState(false);

  const slug = title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const inputClass =
    "w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const helperClass = "text-xs mt-1.5 text-[#888888]";

  const handleSave = () => {
    onSave && onSave({ title, slug, description, templateBody, active });
  };

  return (
    <div className="bg-white rounded shadow-sm">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2 text-[#6A73FC] font-semibold text-[15px]">
          <RiMailFill size={16} />
          <span>Add Email Template</span>
        </div>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 px-5 pt-5 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            {/* Title */}
            <div>
              <label className={labelClass}>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
              />
              <p className={helperClass}>
                Title should be meaning full like : registration email, forgot password email.
              </p>
            </div>

            {/* Slug */}
            <div>
              <label className={labelClass}>Slug</label>
              <input
                type="text"
                readOnly
                placeholder="Slug"
                value={slug}
                className={`${inputClass} bg-[#F5F5F5] cursor-default`}
              />
              <p className="text-xs text-gray-400 mt-1.5">slug will use for url. can't edited.</p>
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${inputClass} resize-none`}
              />
              <p className="text-xs text-gray-400 mt-1.5">Describe about this email template.</p>
            </div>

            {/* Placeholder */}
            <PlaceholderPanel />
          </div>

          {/* Email Template rich editor */}
          <div className="mb-2">
            <label className={labelClass}>Email Template</label>
            <EmailTemplateEditor onChange={setTemplateBody} />
            <p className={helperClass}>
              This design will show in recieved email and place holders will replace with dynamic content.
            </p>
          </div>

          {/* Status */}
          <div className="mt-6 mb-6">
            <label className="block text-sm font-medium text-[#888888] mb-2">Status</label>
            <label className="flex items-center gap-2 text-sm text-[#888888] cursor-pointer">
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                className="w-4 h-4 accent-[#6A73FC]  cursor-pointer"
              />
              Active status template will use in email sending only.
            </label>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Save Email Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmailTemplateForm;
