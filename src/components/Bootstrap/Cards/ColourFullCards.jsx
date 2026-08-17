import React from 'react';

const cardsData = [
    { title: 'Primary card', color: '#6a73fa' },
    { title: 'Secondary card', color: 'rgb(103, 59, 183)' },
    { title: 'Success card', color: 'rgb(126, 211, 33)' },
    { title: 'Danger card', color: 'rgb(255, 22, 22)' },
    { title: 'Warning card', color: 'rgb(255, 170, 22)' },
    { title: 'Info card', color: 'rgb(80, 227, 194)' },
    { title: 'Light card', color: 'rgb(218, 218, 218)' },
    { title: 'Dark card', color: 'rgb(69, 69, 69)' },
];

export default function ColourFullCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    style={{ backgroundColor: card.color }}
                    className="rounded shadow-sm flex flex-col justify-between"
                >
                    {/* Header with white bottom border */}
                    <div className="border-b border-white px-6 py-4">
                        <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <p className="text-sm leading-relaxed text-white mb-4">
                                This is paragraph text positioned below the header border.
                            </p>

                            <button
                                type="button"
                                style={{ color: card.color }}
                                className="rounded-md bg-white px-5 py-2 text-sm font-semibold hover:bg-opacity-90 cursor-pointer transition duration-150 ease-in-out shadow-sm"
                            >
                                Go somewhere
                            </button>
                        </div>

                        {/* Footer text without top border */}
                        <span className="text-xs text-white mt-6 block">
                            Last updated 3 mins ago
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}