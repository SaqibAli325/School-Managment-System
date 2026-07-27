import React, { useState } from "react";
import AccordionCard from "../Content/AccordionCard.jsx";
import { RiCloseLine } from "@remixicon/react";

const TagAccordion = ({ tags: controlledTags, onChange }) => {
  const [tags, setTags] = useState(controlledTags || ["Beauty", "Fashion"]);
  const [input, setInput] = useState("");

  const updateTags = (next) => {
    setTags(next);
    onChange && onChange(next);
  };

  const removeTag = (tag) => {
    updateTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      updateTags([...tags, input.trim()]);
      setInput("");
    }
  };

  return (
    <AccordionCard title="Tag">
      <div className="border border-gray-200 rounded-md p-3 flex flex-wrap gap-2 min-h-[52px]">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-1 rounded"
          >
            {tag}
            <button onClick={() => removeTag(tag)} className="cursor-pointer text-gray-500 hover:text-gray-800">
              <RiCloseLine size={14} />
            </button>
          </span>
        ))}
        <input
          type="text"
          placeholder="Add tag and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-[100px] text-sm outline-none text-gray-600 placeholder:text-gray-400"
        />
      </div>
    </AccordionCard>
  );
};

export default TagAccordion;
