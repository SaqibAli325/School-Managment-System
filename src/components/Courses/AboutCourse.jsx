import React, { useState, useEffect } from "react";
import { Link2, Camera, Heart, Reply } from "lucide-react";
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import Header from '../Header.jsx'

const COURSE_IMG_URL = "https://edumin.dexignlab.com/xhtml/images/courses/pic1.jpg";
const POST_IMG_URL = "https://edumin.dexignlab.com/xhtml/images/profile/9.jpg";
const POST_IMG_URL_2 = "https://edumin.dexignlab.com/xhtml/images/profile/8.jpg";

const COURSE_DATA = {
  name: "Why Should You Consider Taking an Education Course?",
  category: "Computer Science",
  duration: "3 Years",
  price: "$1500",
  professor: "Jack Ronan",
  date: "07 March 2023",
  students: 120,
  description: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  curriculum: [
    { name: "Introduction to Programming", percent: 85, color: "bg-red-500" },
    { name: "Data Structures & Algorithms", percent: 90, color: "bg-teal-400" },
    { name: "Web Development Basics", percent: 65, color: "bg-lime-500" },
  ]
};

const AVATAR_URL = "https://edumin.dexignlab.com/xhtml/images/profile/profile.png";

const INITIAL_POSTS = [
  {
    id: 1,
    image: POST_IMG_URL_2,
    title:
      "\u201cEmbark on a Journey of Unparalleled Excellence, Where Innovation and Elegance Converge to Shape Tomorrow's World.\u201d",
    body:
      "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.",
  },
  {
    id: 2,
    image: POST_IMG_URL,
    title: "Collection of textile samples lay spread",
    body:
      "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.",
  },
  {
    id: 3,
    image: POST_IMG_URL_2,
    title:
      "\u201cBreakthrough Study Reveals Promising New Treatment Strategy for Alzheimer's Disease\u201d",
    body:
      "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.",
  },
];

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-700">{value}</span>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm border-b border-[#80808033] pb-1.5">
      <span className="font-bold text-gray-700">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}

function SkillBar({ name, percent, color }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500">{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function CourseImageCard() {
  return (
    <div className=" rounded bg-white shadow-sm">
      <div className="relative overflow-hidden bg-indigo-500 px-6 pb-6 pt-8 text-center">
        {/* decorative pattern */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 300 200"
          fill="none"
        >
          <circle cx="30" cy="20" r="40" stroke="white" strokeWidth="2" />
          <circle cx="90" cy="10" r="20" stroke="white" strokeWidth="2" />
          <circle cx="270" cy="180" r="50" stroke="white" strokeWidth="2" />
        </svg>

        <img
          src={COURSE_IMG_URL}
          alt={COURSE_DATA.name}
          className="relative z-10 mx-auto h-32 w-full object-cover rounded"
        />
        <h2 className="relative z-10 mt-4 text-lg font-semibold text-white">
          {COURSE_DATA.name}
        </h2>
      </div>

      <div className="divide-y divide-gray-100">
        <StatRow label="Duration" value={COURSE_DATA.duration} />
        <StatRow label="Price" value={COURSE_DATA.price} />
        <StatRow label="Professor" value={COURSE_DATA.professor} />
      </div>

      <div className="flex gap-1 w-[70%] mx-auto p-4">
        <button className="flex-1 rounded bg-indigo-500 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 cursor-pointer">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

function CourseDetailsCard() {
  return (
    <div className="mt-5 rounded bg-white p-5 px-8 shadow-sm">
      <h3 className="mb-3 text-gray-800 text-[1.2rem] font-medium border-b border-[#8080802b] pb-3.75">Course Details</h3> 
      <p className="mb-4 text-sm leading-relaxed text-gray-500">
        {COURSE_DATA.description.substring(0, 100)}...
      </p>

      <div className="space-y-3">
        <InfoRow label="Category" value={COURSE_DATA.category} />
        <InfoRow label="Start Date" value={COURSE_DATA.date} />
        <InfoRow label="Max Students" value={COURSE_DATA.students} />
        <InfoRow label="Course Fee" value={COURSE_DATA.price} />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center mt-4">
        <div>
          <p className="text-lg font-bold text-indigo-500">
            {COURSE_DATA.students}
          </p>
          <p className="text-xs text-gray-400">Students</p>
        </div>
        <div className="border-l border-r border-gray-200">
          <p className="text-lg font-bold text-indigo-500">
            20
          </p>
          <p className="text-xs text-gray-400">Modules</p>
        </div>
        <div>
          <p className="text-lg font-bold text-indigo-500">
            15
          </p>
          <p className="text-xs text-gray-400">Quizzes</p>
        </div>
      </div>
    </div>
  );
}

function CourseExpertiseCard() {
  return (
    <div className="mt-5 rounded bg-white p-5 px-8 shadow-sm">
      <h3 className="mb-4 text-gray-800 text-[1.2rem] font-medium border-b border-[#8080802b] pb-3.75">Course Curriculum</h3>
      <div className="space-y-4">
        {COURSE_DATA.curriculum.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

function Tabs({ active, onChange }) {
  const tabs = [
    { key: "posts", label: "Posts" },
    { key: "about", label: "About Course" },
  ];
  return (
    <div className="px-6 pt-4">
      <div className="flex gap-6 border-b border-gray-100 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`pb-3 text-sm font-medium transition ${
              active === tab.key
                ? "border-b-2 border-indigo-500 text-indigo-500"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Composer({ value, onChange, onSubmit }) {
  return (
    <div className="mt-5 rounded">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        placeholder="Please type what you want...."
        className="w-full resize-none rounded border border-gray-200 p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          aria-label="Attach link"
          className="rounded bg-indigo-50 p-2 text-indigo-500 transition hover:bg-indigo-100"
        >
          <Link2 size={18} />
        </button>
        <button
          type="button"
          aria-label="Attach photo"
          className="rounded bg-indigo-50 p-2 text-indigo-500 transition hover:bg-indigo-100"
        >
          <Camera size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
        >
          Post
        </button>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="mt-5 overflow-hidden rounded">
      <img
        src={post.image}
        alt=""
        className="h-auto w-full sm:h-auto bg-gray-50"
      />
      <div>
        <h4 className="mb-2 text-lg font-semibold text-gray-800">
          {post.title}
        </h4>
        <p className="mb-4 text-sm leading-relaxed text-gray-500">
          {post.body}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600">
            <Heart size={16} fill="currentColor" />
            Like
          </button>
          <button className="flex items-center gap-2 rounded bg-violet-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-900">
            <Reply size={16} />
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AboutCourse() {
  const [activeTab, setActiveTab] = useState("posts");
  const [draft, setDraft] = useState("");
  const [posts, setPosts] = useState(INITIAL_POSTS);
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

  const handlePost = () => {
    const text = draft.trim();
    if (!text) return;
    setPosts((prev) => [
      {
        id: Date.now(),
        image: AVATAR_URL,
        title: text,
        body: "",
      },
      ...prev,
    ]);
    setDraft("");
  };

  return (
    <div className='w-screen h-screen bg-[#F2F2F3]'>
      <Navbar />
      <Sidebar />

      {/* Main Content Div */}
      <div className={`absolute right-0 bottom-0 ${windowWidth < 1100 ? (mobileMenuOpen ? 'w-[calc(100vw-250px)]' : 'w-screen') : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : 'w-[calc(100vw-250px)]')} h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden`}>
        
        <Header parentTitle="About Course" childTitle="Courses" grandChildTitle="About Course"/>

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <aside>
            <CourseImageCard />
            <CourseDetailsCard />
            <CourseExpertiseCard />
          </aside>

          <main>
            <div className="rounded bg-white shadow-sm">
              <Tabs active={activeTab} onChange={setActiveTab} />
              <div className="p-5">
              {activeTab === "posts" ? (
                <>
                  <Composer value={draft} onChange={setDraft} onSubmit={handlePost} />
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </>
              ) : (
                <>
                <h3 className="mb-3 font-semibold text-gray-800">
                  About {COURSE_DATA.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {COURSE_DATA.description}
                </p>
                <div className="mt-4 space-y-3">
                  <InfoRow label="Category" value={COURSE_DATA.category} />
                  <InfoRow label="Professor" value={COURSE_DATA.professor} />
                  <InfoRow label="Duration" value={COURSE_DATA.duration} />
                  <InfoRow label="Price" value={COURSE_DATA.price} />
                </div>
                </>
              )}
              </div>
            </div>
          </main>
        </div>

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
        </footer>
      </div>
    </div>
  );
}
