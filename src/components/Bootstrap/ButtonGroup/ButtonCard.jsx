import React from "react";

const ButtonCard = () => {
    return (
        <div className="">
            {/* Grid of cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Card 1: Button Group */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Button Group
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default Button group style
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex rounded-md overflow-hidden">
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                Left
                            </button>
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ">
                                Middle
                            </button>
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                Right
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2: Button Toolbar */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Button Toolbar
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default Button toolbar style
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex gap-2">
                            <div className="inline-flex rounded-md overflow-hidden">
                                {["1", "2", "3", "4"].map((n, i) => (
                                    <button
                                        key={n}
                                        className={`px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ${i !== 3 ? "" : ""
                                            }`}
                                    >
                                        {n}
                                    </button>
                                ))}
                            </div>
                            <div className="inline-flex rounded-md overflow-hidden">
                                {["5", "6", "7"].map((n, i) => (
                                    <button
                                        key={n}
                                        className={`px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ${i !== 2 ? "" : ""
                                            }`}
                                    >
                                        {n}
                                    </button>
                                ))}
                            </div>
                            <div className="inline-flex rounded-md overflow-hidden">
                                <button className="px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                    8
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Button Sizing */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Button Sizing
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default button size style
                        </p>
                    </div>
                    <div className="p-6 space-y-3">
                        {/* Large */}
                        <div className="inline-flex rounded-md overflow-hidden">
                            <button className="px-6 py-3 bg-indigo-500 text-white text-base font-medium hover:bg-indigo-600 ">
                                Left
                            </button>
                            <button className="px-6 py-3 bg-indigo-500 text-white text-base font-medium hover:bg-indigo-600 ">
                                Middle
                            </button>
                            <button className="px-6 py-3 bg-indigo-500 text-white text-base font-medium hover:bg-indigo-600">
                                Right
                            </button>
                        </div>
                        <br />
                        {/* Default */}
                        <div className="inline-flex rounded-md overflow-hidden">
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ">
                                Left
                            </button>
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ">
                                Middle
                            </button>
                            <button className="px-5 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                Right
                            </button>
                        </div>{" "}
                        {/* Small */}
                        <div className="inline-flex rounded-md overflow-hidden ml-2">
                            <button className="px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium hover:bg-indigo-600">
                                Left
                            </button>
                            <button className="px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium hover:bg-indigo-600 ">
                                Middle
                            </button>
                            <button className="px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium hover:bg-indigo-600">
                                Right
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 4: Button Nesting */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Button Nesting
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default button nesting style
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex rounded-md overflow-hidden">
                            <button className="px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                1
                            </button>
                            <button className="px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600">
                                2
                            </button>
                            <div className="relative group">
                                <button className="px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 flex items-center gap-1">
                                    Dropdown
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 5: Vertical Variation */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Vertical Variation
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default button vertical variation style
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex flex-col w-20 rounded-md overflow-hidden">
                            {["Button", "Button", "Button", "Button", "Button", "Button"].map(
                                (label, i) => (
                                    <button
                                        key={i}
                                        className={`px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 ${i !== 5 ? "" : ""
                                            }`}
                                    >
                                        {label}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Card 6: Vertical Dropdown Variation */}
                <div className="bg-white rounded shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Vertical Dropdown Variation
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Default button vertical variation style
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex flex-col w-25 rounded-md overflow-hidden">
                            {[
                                { label: "Button", dropdown: false },
                                { label: "Button", dropdown: false },
                                { label: "Dropdown", dropdown: true },
                                { label: "Button", dropdown: false },
                                { label: "Button", dropdown: false },
                                { label: "Dropdown", dropdown: true },
                                { label: "Dropdown", dropdown: true },
                                { label: "Dropdown", dropdown: true },
                            ].map((item, i, arr) => (
                                <button
                                    key={i}
                                    className={`px-4 py-2.5 bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 flex items-center justify-center gap-1 ${i !== arr.length - 1 ? "" : ""
                                        }`}
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-400 mt-8 pb-4">
                Copyright © Designed & Developed by{" "}
                <span className="text-indigo-500">DexignLab</span> 2023
            </div>
        </div>
    );
};

export default ButtonCard;