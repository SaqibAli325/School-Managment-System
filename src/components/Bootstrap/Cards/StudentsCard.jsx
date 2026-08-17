import React from "react";

const FirstCard = () => (
    <div className="bg-white rounded shadow-sm overflow-hidden w-full mt-4">
        <img
            src="https://edumin.dexignlab.com/xhtml/images/card/1.png"
            alt="Card Title"
            className="w-full h-52 object-cover"
        />
        <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200">
                Card Title
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </p>
            <p className="text-sm text-gray-500 mt-3">Last updated 3 mins ago</p>
        </div>
    </div>
);

const SecondCard = () => (
    <div className="bg-white rounded shadow-sm overflow-hidden w-full mt-4">
        <img
            src="https://edumin.dexignlab.com/xhtml/images/card/2.png"
            alt="Card Title"
            className="w-full h-52 object-cover"
        />
        <div className="px-5 py-4">
            <h3 className="text-lg font-semibold text-gray-800">Card Header</h3>
        </div>
        <div className="border-t border-gray-200 px-5 py-4">
            <p className="text-sm text-gray-500 leading-relaxed">
                He lay on his armour-like back, and if he lifted his head a little
            </p>
        </div>
        <div className="border-t border-gray-200 px-5 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">Card Footer</span>
            <a
                href="#"
                className="text-sm text-gray-400 font-medium hover:text-indigo-700"
            >
                Card Link
            </a>
        </div>
    </div>
);

const ThirdCard = () => (
    <div className="bg-white rounded shadow-sm overflow-hidden w-full">
        <div className="px-5 py-4">
            <h3 className="text-lg font-semibold text-gray-800">Card Header</h3>
        </div>
        <div className="border-t border-gray-200 px-5 py-4">
            <p className="text-sm text-gray-500 leading-relaxed">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
            </p>
        </div>
        <img
            src="https://edumin.dexignlab.com/xhtml/images/card/3.png"
            alt="Card"
            className="w-full h-52 object-cover"
        />
        <div className="px-5 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">Card Footer</span>
            <a
                href="#"
                className="text-sm text-gray-400 font-medium hover:text-indigo-700"
            >
                Card Link
            </a>
        </div>
    </div>
);

// grid-cols-2 naturally lays 3 items out as [1][2] / [3][ ]
const StudentCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
    );
};

export default StudentCard;