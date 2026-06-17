import React, { useState, useEffect } from "react";
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'

const COURSE_IMG_URL = "https://edumin.dexignlab.com/xhtml/images/courses/pic1.jpg";

const COURSE_DATA = {
  name: "Why is Early Education Essential",
  category: "Computer Science",
  duration: "3 Year",
  price: "$ 1500",
  professor: "Jimmy Morris",
  date: "07 August 2021",
  stats: [
    { label: "Years", value: "07" },
    { label: "Students", value: "240" },
    { label: "Batches", value: "05" },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting.",
  paragraphs: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
    "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
  ],
  courses: ["Computer", "Programming", "Photoshop", "Management"],
  languages: ["English", "French", "Bangla"],
  info: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
    "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.",
    "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
  ],
};

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm border-b border-[#80808033] pb-2.5 pt-1">
      <span className="font-bold text-gray-700">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}

function CourseImageCard() {
  return (
    <div className="rounded bg-white shadow-sm overflow-hidden">
      <img
        src={COURSE_IMG_URL}
        alt={COURSE_DATA.name}
        className="h-48 w-full"
      />
      <div className="p-5">
        <h2 className="text-base font-semibold text-gray-800">
          {COURSE_DATA.name}
        </h2>
      </div>
    </div>
  );
}

function AboutCourseCard() {
  return (
    <div className="mt-5 rounded bg-white shadow-sm">
      <div className="p-5 px-6">
        <h3 className="mb-3 text-gray-800 text-[1.2rem] font-medium">
          About Course
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-500">
          {COURSE_DATA.description}
        </p>

        <div className="space-y-1">
          <InfoRow label="Duration" value={COURSE_DATA.duration} />
          <InfoRow label="Professor" value={COURSE_DATA.professor} />
          <InfoRow label="Price" value={COURSE_DATA.price} />
          <InfoRow label="Date" value={COURSE_DATA.date} />
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-[#80808033]">
        {COURSE_DATA.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`py-4 text-center ${
              idx !== COURSE_DATA.stats.length - 1
                ? "border-r border-[#80808033]"
                : ""
            }`}
          >
            <p className="text-lg font-bold text-indigo-500">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillButton({ label }) {
  return (
    <button
      type="button"
      className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-600 transition hover:border-indigo-300 hover:text-indigo-500"
    >
      {label}
    </button>
  );
}

function LanguageTag({ label }) {
  return (
    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-500">
      {label}
    </span>
  );
}

function CourseContentCard() {
  return (
    <div className="rounded bg-white p-6 px-8 shadow-sm">
      <div className="space-y-4">
        {COURSE_DATA.paragraphs.map((para, idx) => (
          <p key={idx} className="text-sm leading-relaxed text-gray-500">
            {para}
          </p>
        ))}
      </div>

      <h3 className="mt-6 mb-4 text-base font-semibold text-indigo-500">
        Our Courses
      </h3>
      <div className="flex flex-wrap gap-3">
        {COURSE_DATA.courses.map((course) => (
          <PillButton key={course} label={course} />
        ))}
      </div>

      <h3 className="mt-6 mb-4 text-base font-semibold text-indigo-500">
        Language
      </h3>
      <div className="flex flex-wrap gap-2">
        {COURSE_DATA.languages.map((lang) => (
          <LanguageTag key={lang} label={lang} />
        ))}
      </div>

      <h3 className="mt-6 mb-4 text-base font-semibold text-indigo-500">
        Courses Information
      </h3>
      <div>
        {COURSE_DATA.info.map((para, idx) => (
          <p
            key={idx}
            className={`text-sm leading-relaxed text-gray-500 py-3 ${
              idx !== COURSE_DATA.info.length - 1
                ? "border-b border-[#80808033]"
                : ""
            }`}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AboutCourse() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const handleToggle = (e) => {
        setSidebarCollapsed(e.detail.collapsed);
    };
    window.addEventListener('sidebarToggle', handleToggle);

    const handleMobileToggle = (e) => {
        setMobileMenuOpen(e.detail.isOpen);
    };
    window.addEventListener('mobileSidebarToggle', handleMobileToggle);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('sidebarToggle', handleToggle);
        window.removeEventListener('mobileSidebarToggle', handleMobileToggle);
    };
  }, []);

  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      {/* Main Content Div */}
      <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>

        <Header parentTitle="About Courses" childTitle="Courses" grandChildTitle="About Courses"/>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <aside>
            <CourseImageCard />
            <AboutCourseCard />
          </aside>

          <main>
            <CourseContentCard />
          </main>
        </div>

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </div>
    </div>
  );
}
