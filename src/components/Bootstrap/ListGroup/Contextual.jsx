import React from "react";

const contextualItems = [
    { label: "Dapibus ac facilisis in", variant: "default" },
    { label: "This is a primary list group item", variant: "primary" },
    { label: "This is a secondary list group item", variant: "secondary" },
    { label: "This is a success list group item", variant: "success" },
    { label: "This is a danger list group item", variant: "danger" },
    { label: "This is a warning list group item", variant: "warning" },
    { label: "This is a info list group item", variant: "info" },
    { label: "This is a light list group item", variant: "light" },
    { label: "This is a dark list group item", variant: "dark" },
];

const Contextual = () => {
    return (
        <div className="bg-white rounded shadow-sm p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
                Contextual
            </h2>

            <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200">
                {contextualItems.map((item, i) => (
                    <li
                        key={i}
                        className={`px-4 py-3 text-sm `}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contextual;