import React from 'react';

export default function CourseCard({ title, likes, professor, img }) {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-2 w-full">
      {/* Card Container */}
      <div className="w-full bg-white rounded shadow-lg border border-gray-100 overflow-hidden font-sans">
        
        {/* Card Image */}
        <div className="w-full h-56 bg-slate-900 relative">
          <img 
            src={img} 
            alt="Course Workspace" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          
          {/* Title */}
          <h2 className="text-[15px] font-bold text-gray-900 leading-snug mb-5">
            {title}
          </h2>

          {/* Info Rows Container */}
          <div className="space-y-4 text-sm mb-6">
            
            {/* Row 1: Date & Likes */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">April 23</span>
              <div className="flex items-center gap-1 text-gray-400">
                {/* Heart Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span className="font-semibold text-gray-500">{likes}</span>
              </div>
            </div>

            {/* Row 2: Duration */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">Duration :</span>
              <span className="font-bold text-gray-900">12 Months</span>
            </div>

            {/* Row 3: Professor */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-500 font-medium">Professor :</span>
              <span className="font-bold text-gray-900">{professor}</span>
            </div>

            {/* Row 4: Student */}
            <div className="flex justify-between items-center pb-2">
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                {/* Graduation Cap SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L10.74 13.34c.792.387 1.728.387 2.52 0l6.48-3.34M12 21.75V14.25m5.34-3.141v4.755c0 1.055-.658 2.013-1.66 2.373a11.164 11.164 0 01-7.36 0c-1.002-.36-1.66-1.318-1.66-2.373v-4.755m13.5 0L12 6.75 3.75 11.11" />
                </svg>
                <span>Student</span>
              </div>
              <span className="font-extrabold text-gray-900">+120</span>
            </div>

          </div>

          {/* Button */}
          <button className="w-auto px-6 py-3 bg-[#6A73FA] hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all duration-200 active:scale-95 cursor-pointer">
            Read More
          </button>

        </div>
      </div>
    </div>
  );
}