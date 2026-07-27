import React, { useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

const AddBlogCategoryForm = ({ onSave }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const inputClass =
    "w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  const handleSave = () => {
    if (!name.trim()) return;
    onSave && onSave({ name, slug, description });
    setName("");
    setSlug("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded shadow-sm">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none"
      >
        <span className="text-[#6A73FC] font-semibold text-[15px]">Add Blog Category</span>
        <RiArrowUpSLine
          size={20}
          className={`text-gray-400 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-gray-100 px-5 pt-5 pb-6">
          <div className="mb-4">
            <label className={labelClass}>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="mb-4">
            <label className={labelClass}>Slug</label>
            <input
              type="text"
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Example textarea</label>
            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlogCategoryForm;
