import React from 'react';

export default function ChartsDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex items-center justify-center font-sans">
      {/* Dashboard Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        
        {/* 1. University Survey (Bar Chart) */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-[450px]">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">University Survey</h2>
          </div>
          
          {/* Chart Area */}
          <div className="p-6 flex-1 flex items-end justify-between relative select-none">
            {/* Y-Axis Labels */}
            <div className="absolute left-6 top-6 bottom-16 flex flex-col justify-between text-xs text-gray-400 font-medium z-10">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Bars Container */}
            <div className="flex-1 flex items-end justify-between h-full pl-10 pb-8 gap-1 sm:gap-2">
              {/* Bar heights matching the original chart design */}
              {[65, 75, 50, 75, 50, 15, 70, 30, 40, 28, 43, 30, 60, 40, 45].map((height, index) => {
                // Determine day labels based on fixed index mapping from image
                let label = '';
                if (index === 2) label = 'T';
                if (index === 5) label = 'F';
                if (index === 8) label = 'M';
                if (index === 11) label = 'T';
                if (index === 14) label = 'S';

                return (
                  <div key={index} className="flex flex-col items-center flex-1 h-full justify-end relative">
                    <div className="bg-gray-50 rounded-t-full h-full w-full flex items-end">
                      <div 
                        style={{ height: `${height}%` }}
                        className="bg-blue-600 w-full rounded-t-full transition-all duration-500 hover:bg-blue-700 cursor-pointer"
                      ></div>
                    </div>
                    {label && (
                      <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">
                        {label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Donught Chart */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-[450px]">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Donught Chart</h2>
          </div>
          
          {/* Chart Area */}
          <div className="p-6 flex-1 flex items-center justify-center">
            <div className="relative w-56 h-56 flex items-center justify-center">
              {/* Main Outer Blue Donut using SVG */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background track */}
                <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="12" fill="transparent" />
                {/* Segment 1 (Top Thick Blue) */}
                <circle cx="50" cy="50" r="40" stroke="#1d4ed8" strokeWidth="14" fill="transparent" 
                  strokeDasharray="170 251.2" strokeDashoffset="0" strokeLinecap="butt" />
                {/* Segment 2 (Bottom Blue) */}
                <circle cx="50" cy="50" r="40" stroke="#1e6091" strokeWidth="12" fill="transparent" 
                  strokeDasharray="60 251.2" strokeDashoffset="-180" strokeLinecap="butt" />
              </svg>
              
              {/* Inner White Circle + Text Card */}
              <div className="absolute inset-8 bg-white rounded-full border-4 border-blue-600 flex flex-col items-center justify-center shadow-md">
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">In-Store Sales</span>
                <span className="text-3xl font-black text-gray-900 mt-0.5">30</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. University Survey (Area Chart) */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-[450px] relative">
          {/* Top Right Purple Tag */}
          <div className="absolute top-0 right-0 w-4 h-8 bg-purple-700 rounded-bl-md"></div>
          
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">University Survey</h2>
          </div>
          
          {/* Chart Area */}
          <div className="p-6 flex-1 flex items-end justify-between relative select-none">
            {/* Y-Axis Labels */}
            <div className="absolute left-6 top-10 bottom-16 flex flex-col justify-between text-xs text-gray-400 font-medium z-10">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            {/* SVG Wave/Area Chart Container */}
            <div className="flex-1 h-full pl-10 pb-8 relative w-full">
              <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                {/* Light Blue Background Layer (Behind) */}
                <path d="M 0 200 
                         Q 25 100, 50 110 
                         T 100 130 
                         T 150 150 
                         Q 165 40, 180 50 
                         T 210 120 
                         Q 225 150, 240 200 Z" 
                      fill="#93c5fd" fillOpacity="0.6"/>
                
                {/* Darker Blue Main Layer (Front) */}
                <path d="M 0 200 
                         Q 30 140, 50 150 
                         T 100 170 
                         Q 120 100, 140 60 
                         T 180 140 
                         Q 200 160, 240 200 Z" 
                      fill="#2563eb" fillOpacity="0.9"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
