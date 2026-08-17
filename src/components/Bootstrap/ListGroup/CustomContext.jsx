import React from "react";

const customItems = [
    {
        heading: "List group item heading",
        time: "3 days ago",
        text: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        note: "Donec id elit non mi porta.",
        active: true,
    },
    {
        heading: "List group item heading",
        time: "3 days ago",
        text: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        note: "Donec id elit non mi porta.",
        active: false,
    },
    {
        heading: "List group item heading",
        time: "3 days ago",
        text: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        note: "Donec id elit non mi porta.",
        active: false,
    },
];

const CustomContent = () => {
    return (
        <div className="bg-white rounded shadow-sm p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
                Custom Content
            </h2>

            <ul className="mt-4 border border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200">
                {customItems.map((item, i) => (
                    <li
                        key={i}
                        className={`px-4 py-3 ${item.active ? "bg-indigo-500" : "bg-white"}`}
                    >
                        <div className="flex items-center justify-between gap-3">
                            <h3
                                className={`text-sm font-semibold ${item.active ? "text-white" : "text-gray-800"
                                    }`}
                            >
                                {item.heading}
                            </h3>
                            <span
                                className={`text-xs shrink-0 ${item.active ? "text-indigo-100" : "text-gray-400"
                                    }`}
                            >
                                {item.time}
                            </span>
                        </div>
                        <p
                            className={`text-sm mt-1 leading-relaxed ${item.active ? "text-indigo-50" : "text-gray-600"
                                }`}
                        >
                            {item.text}
                        </p>
                        <p
                            className={`text-xs mt-1 ${item.active ? "text-indigo-100" : "text-gray-400"
                                }`}
                        >
                            {item.note}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomContent;