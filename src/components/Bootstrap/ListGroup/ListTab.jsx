import React, { useState } from "react";

const tabs = [
    {
        key: "home",
        label: "Home",
        content:
            "Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.",
    },
    {
        key: "profile",
        label: "Profile",
        content:
            "Sunt aliqua incididunt sint eiusmod deserunt velit laborum enim aliquip officia dolore. Cupidatat cillum reprehenderit nostrud amet ea proident excepteur ex duis fugiat aliqua ipsum. Non ut ipsum aute id deserunt nisi culpa eiusmod pariatur consequat.",
    },
    {
        key: "messages",
        label: "Messages",
        content:
            "Duis magna eu aute ea quis reprehenderit ipsum culpa proident duis occaecat. Sunt culpa dolore laborum voluptate mollit nulla enim aliqua fugiat. Officia excepteur velit consequat cillum anim reprehenderit ad ea eiusmod.",
    },
    {
        key: "settings",
        label: "Settings",
        content:
            "Laboris commodo do ex duis proident anim tempor. Elit sit dolore consectetur non aliqua ullamco quis do ut irure. Fugiat nostrud pariatur ipsum reprehenderit exercitation dolor cupidatat officia sint velit.",
    },
];

const ListTab = () => {
    const [activeKey, setActiveKey] = useState("home");
    const activeTab = tabs.find((t) => t.key === activeKey);

    return (
        <div className="bg-white rounded shadow-sm p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
                List Tab
            </h2>

            <div className="mt-5 flex flex-col md:flex-row gap-6">
                <ul className="w-full md:w-32 shrink-0 border border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200 h-fit">
                    {tabs.map((tab) => (
                        <li key={tab.key}>
                            <button
                                type="button"
                                onClick={() => setActiveKey(tab.key)}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${activeKey === tab.key
                                    ? "bg-indigo-500 text-white "
                                    : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex-1 pt-1">
                    <h3 className="text-base font-semibold text-gray-800">
                        {activeTab.label} Tab Content
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        {activeTab.content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ListTab;