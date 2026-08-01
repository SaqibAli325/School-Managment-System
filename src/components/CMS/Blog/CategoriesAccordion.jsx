import React, { useState } from "react";
import AccordionCard from "../Content/AccordionCard.jsx";
import { RiAddLine } from "@remixicon/react";

const defaultCategories = ["Beauty", "Fashion", "Lifestyle", "Food", "Beauty"];

const CategoriesAccordion = ({ selected, onToggle }) => {
  const [categories, setCategories] = useState(defaultCategories);
  const [newCategory, setNewCategory] = useState("");

  const handleAddNew = () => {
    if (!newCategory.trim()) return;
    setCategories((prev) => [...prev, newCategory.trim()]);
    setNewCategory("");
  };

  return (
    <AccordionCard title="Categories">
      <div className="border border-gray-200 rounded-md max-h-40 overflow-y-auto p-3 mb-4 flex flex-col gap-2.5">
        {categories.map((cat, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={selected ? selected.includes(cat) : false}
              onChange={() => onToggle && onToggle(cat)}
              className="w-4 h-4 accent-[#6A73FC] cursor-pointer"
            />
            {cat}
          </label>
        ))}
      </div>

      <button
        type="button"
        className="flex items-center gap-1 text-sm text-[#6A73FC] font-medium mb-4 cursor-pointer hover:underline"
      >
        <RiAddLine size={16} />
        Add New Categories
      </button>

      <div className="flex items-center gap-2 border-1 border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Username"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-1 px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none "
        />
        <button
          onClick={handleAddNew}
          className=" bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-4 py-2.5  transition-colors cursor-pointer whitespace-nowrap"
        >
          Add New
        </button>
      </div>
    </AccordionCard>
  );
};

export default CategoriesAccordion;
