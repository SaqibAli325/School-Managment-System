import React, { useState, useRef, useEffect } from "react";

const positionClasses = {
    bottom: "top-full left-0 mt-2",
    top: "bottom-full left-0 mb-2",
    left: "right-full top-0 mr-2",
    right: "left-full top-0 ml-2",
};

const Dropdown = ({ options = [], direction = "bottom", children }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // outside click par dropdown close ho jaye
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOptionClick = (option) => {
        if (typeof option === "object" && option.onClick) {
            option.onClick();
        }
        setOpen(false);
    };

    return (
        <div className="relative inline-block" ref={wrapperRef}>
            {/* Trigger — jo bhi button/element pass hoga wahi click ke liye use hoga */}
            <div onClick={() => setOpen((prev) => !prev)} className="inline-block cursor-pointer">
                {children}
            </div>

            {/* Dropdown panel — trigger ke direction wali side pe khulega */}
            {open && options.length > 0 && (
                <div
                    className={`absolute z-50 min-w-[180px] bg-white rounded-lg shadow-lg border border-gray-100 py-2 ${positionClasses[direction] || positionClasses.bottom
                        }`}
                >
                    {options.map((option, i) => (
                        <div
                            key={i}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 text-sm text-gray-500 font-medium hover:bg-gray-50 hover:text-[#6a73fa] cursor-pointer transition-colors"
                        >
                            {typeof option === "string" ? option : option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;