import React from "react";

const items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
];

// -----------------------------
// 1. Basic List Group
// -----------------------------
const BasicListGroup = () => (
    <div className="bg-white rounded-lg shadow-sm p-5 w-full">
        <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
            Basic List Group
        </h2>
        <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden">
            {items.map((label, i) => (
                <li
                    key={i}
                    className={`px-4 py-3 text-sm text-gray-700 ${i !== items.length - 1 ? "border-b border-gray-200" : ""
                        }`}
                >
                    {label}
                </li>
            ))}
        </ul>
    </div>
);

// -----------------------------
// 2. List Active Items
// -----------------------------
const ListActiveItems = () => (
    <div className="bg-white rounded-lg shadow-sm p-5 w-full">
        <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
            List Active Items
        </h2>
        <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden">
            {items.map((label, i) => (
                <li
                    key={i}
                    className={`px-4 py-3 text-sm ${i !== items.length - 1 ? "border-b border-gray-200" : ""
                        } ${i === 0
                            ? "bg-indigo-500 text-white font-semibold"
                            : "text-gray-700"
                        }`}
                >
                    {label}
                </li>
            ))}
        </ul>
    </div>
);

// -----------------------------
// 3. List Disabled Items
// -----------------------------
const ListDisabledItems = () => (
    <div className="bg-white rounded-lg shadow-sm p-5 w-full">
        <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
            List Disabled Items
        </h2>
        <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden">
            {items.map((label, i) => (
                <li
                    key={i}
                    className={`px-4 py-3 text-sm ${i !== items.length - 1 ? "border-b border-gray-200" : ""
                        } ${i === 0
                            ? "bg-purple-700 text-white font-semibold"
                            : "text-gray-400"
                        }`}
                >
                    {label}
                </li>
            ))}
        </ul>
    </div>
);

// -----------------------------
// 4. Links And Buttons Items
// -----------------------------
const LinksAndButtonsItems = () => {
    const states = ["active", "normal", "normal", "normal", "selected"];
    return (
        <div className="bg-white rounded-lg shadow-sm p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
                Links And Buttons Items
            </h2>
            <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                {items.map((label, i) => {
                    const state = states[i];
                    return (
                        <li key={i}>
                            <button
                                type="button"
                                className={`w-full text-left px-4 py-3 text-sm transition-colors ${i !== items.length - 1 ? "border-b border-gray-200" : ""
                                    } ${state === "active"
                                        ? "bg-indigo-500 text-white font-semibold"
                                        : state === "selected"
                                            ? "bg-purple-700 text-white font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

// -----------------------------
// 5. Flush
// -----------------------------
const Flush = () => (
    <div className="bg-white rounded-lg shadow-sm p-5 w-full">
        <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
            Flush
        </h2>
        <ul className="mt-2">
            {items.map((label, i) => (
                <li
                    key={i}
                    className={`px-1 py-3 text-sm text-gray-700 ${i !== items.length - 1 ? "border-b border-gray-200" : ""
                        }`}
                >
                    {label}
                </li>
            ))}
        </ul>
    </div>
);

// -----------------------------
// 6. With Badges
// -----------------------------
const WithBadges = () => {
    const badgeItems = [
        { label: "Cras justo odio", badge: 14 },
        { label: "Dapibus ac facilisis in", badge: 2 },
        { label: "Cras justo odio", badge: 14 },
        { label: "Morbi leo risus", badge: 1 },
        { label: "Morbi leo risus", badge: 1 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
                With Badges
            </h2>
            <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                {badgeItems.map(({ label, badge }, i) => (
                    <li
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 text-sm text-gray-700 ${i !== badgeItems.length - 1 ? "border-b border-gray-200" : ""
                            }`}
                    >
                        <span>{label}</span>
                        <span className="bg-indigo-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                            {badge}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// -----------------------------
// Main export — grid of all cards
// -----------------------------
const ListCard = () => {
    return (
        <div className="w-full bg-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <BasicListGroup />
                <ListActiveItems />
                <ListDisabledItems />
                <LinksAndButtonsItems />
                <Flush />
                <WithBadges />
            </div>
        </div>
    );
};

export default ListCard;