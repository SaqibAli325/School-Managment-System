import React, { useRef, useState } from "react";
import AccordionCard from "./AccordionCard.jsx";

const FeaturedImageBox = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <AccordionCard title="Featured Image">
      <div className="w-full h-40 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center overflow-hidden mb-4">
        {preview ? (
          <img src={preview} alt="Featured" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm font-semibold text-center px-4">
            NO IMAGE AVAILABLE
          </span>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
      <button
        onClick={() => fileRef.current?.click()}
        className="w-full bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors cursor-pointer"
      >
        Select Image
      </button>
    </AccordionCard>
  );
};

export default FeaturedImageBox;
