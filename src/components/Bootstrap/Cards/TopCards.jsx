import React from 'react';

export default function TopCards() {
    return (
        <div className="space-y-5 mt-5">
            {/* First Row */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Card 1 (Converted to Tailwind CSS) */}
                <div className="flex flex-col min-h-[220px] p-6 rounded border border-slate-200 bg-white shadow-sm w-full md:w-1/2">
                    <h2 className="text-[1.15rem] font-semibold text-slate-900 mb-3">Card Header Title</h2>
                    <p className="text-[0.85rem] text-slate-600 leading-relaxed mb-6">
                        He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff<br />
                        sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                    </p>

                    <div className="flex justify-between gap-3 mt-auto">
                        <button type="button" className="text-[0.85rem] cursor-pointer text-slate-800 font-medium hover:text-black">
                            Card footer
                        </button>
                        <button type="button" className="text-[0.85rem] cursor-pointer text-[#868a8fea] hover:text-slate-600">
                            Card Link
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-1/2  rounded border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
                    {/* Header with bottom border */}
                    <div className="border-b border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900">Card Header</h2>
                    </div>

                    {/* Paragraph content */}
                    <div className="p-6">
                        <p className="text-sm leading-relaxed text-gray-600">
                            This is the paragraph text positioned below the header border. You can add any card body content or details here.
                        </p>
                    </div>

                    {/* Footer section with top border */}
                    <div className="flex items-center justify-between border-t border-gray-200 px-6 py-5 mt-auto">
                        <span className="text-xs text-gray-500">Last updated 3 mins ago</span>
                        <button
                            type="button"
                            className="rounded-md bg-[#6A73FC] px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer transition duration-150 ease-in-out"
                        >
                            Go somewhere
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Card 3 (Centered Card) */}
                <div className="flex flex-col min-h-[220px] flex-1 rounded border border-slate-200 bg-white shadow-sm w-full md:w-1/2">
                    {/* Header with bottom border */}
                    <div className="border-b border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900">Card Header</h2>
                    </div>

                    {/* Centered Paragraph & Button */}
                    <div className="p-6 flex flex-col items-center justify-center">
                        <p className="text-sm leading-relaxed text-gray-600 mb-5">
                            This paragraph text is centered. Below it sits the action button right in the middle of the body section.
                        </p>
                        <button
                            type="button"
                            className="rounded-md bg-[#6A73FC] px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer transition duration-150 ease-in-out"
                        >
                            Go somewhere
                        </button>
                    </div>

                    {/* Centered Footer Text with top border */}
                    <div className="border-t border-gray-200 px-6 py-4 mt-auto">
                        <span className="text-xs text-gray-500">Last updated 3 mins ago</span>
                    </div>
                </div>

                {/* Card 4 (Tabbed Navigation Card) */}
                <div className="w-full md:w-1/2 flex-1  rounded border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
                    <div className="border-b border-gray-200 px-6 py-4">
                        <h2 className="text-lg font-semibold text-gray-900">Card Header</h2>
                    </div>
                    {/* Header with Nav Links */}
                    <div className="border-b border-gray-200 pt-4 mx-5">
                        <ul className="flex gap-6 text-sm font-medium">
                            {/* Active Tab */}
                            <li className="pb-3 text-blue-600 font-semibold border-b-2 border-blue-600 -mb-[1px] cursor-pointer">
                                Active
                            </li>
                            {/* Normal Link (Hover border) */}
                            <li className="pb-3border-b-2 border-transparent hover:border-b-2 hover:border-blue-600 -mb-[1px] transition-all duration-150 cursor-pointer text-[#6A73FC]">
                                Link
                            </li>
                            {/* Disabled Link */}
                            <li className="pb-3 text-gray-600 border-b-2 border-transparent -mb-[1px] select-none">
                                Disabled
                            </li>
                        </ul>
                    </div>

                    {/* Content Body & Button */}
                    <div className=" flex flex-col justify-between flex-1">
                        <p className="mt-6 text-sm leading-relaxed text-gray-600 mb-6 text-center">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="mb-12 rounded-md bg-[#6A73FC] px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer transition duration-150 ease-in-out"
                            >
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}