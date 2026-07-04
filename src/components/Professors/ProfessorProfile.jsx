import React, { useState, useEffect } from "react";
import { Link2, Camera, Heart, Reply, MapPin } from "lucide-react";
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar.jsx'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header.jsx'

const AVATAR_URL = "https://edumin.dexignlab.com/xhtml/images/profile/profile.png";
const POST_IMG_URL = "https://edumin.dexignlab.com/xhtml/images/profile/9.jpg";
const POST_IMG_URL_2 = "https://edumin.dexignlab.com/xhtml/images/profile/8.jpg";

const PROFILE = {
  name: "Deangelo Sena",
  title: "Senior Manager",
  followers: 1204,
  following: 2540,
  friends: 2540,
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  gender: "Male",
  education: "PHD",
  designation: "Sr. Professor",
  operationDone: 120,
  projects: 150,
  uploads: 140,
  tasks: 45,
  address: "Demo Address #8901 Marmora Road\nChi Minh City, Vietnam",
  skills: [
    { name: "Photoshop", percent: 85, color: "bg-red-500" },
    { name: "Code editor", percent: 90, color: "bg-teal-400" },
    { name: "Illustrator", percent: 65, color: "bg-lime-500" },
  ],
};

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

function ProfileCard() {
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
          src={AVATAR_URL}
          alt={PROFILE.name}
          className="relative z-10 mx-auto h-24 w-24"
        />
        <h2 className="relative z-10 mt-4 text-lg font-semibold text-white">
          {PROFILE.name}
        </h2>
        <p className="relative z-10 text-sm text-indigo-100">
          {PROFILE.title}
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        <StatRow label="Followers" value={PROFILE.followers} />
        <StatRow label="Following" value={PROFILE.following} />
        <StatRow label="Friends" value={PROFILE.friends} />
      </div>

      <div className="flex gap-1 w-[70%] mx-auto p-4">
        <button className="flex-1 rounded bg-indigo-500 py-2 text-sm font-medium text-white transition hover:bg-indigo-600">
          Follow
        </button>
        <button className="flex-1 rounded bg-amber-500 py-2 text-sm font-medium text-white transition hover:bg-amber-600">
          Message
        </button>
      </div>
    </div>
  );
}

function AboutMeCard() {
  return (
    <div className="mt-5 rounded bg-white p-5 px-8 shadow-sm">
      <h3 className="mb-3 text-gray-800 text-[1.2rem] font-medium border-b border-[#8080802b] pb-3.75 -mx-8 px-8">About Me</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-500">
        {PROFILE.bio}
      </p>

      <div className="space-y-3">
        <InfoRow label="Gender" value={PROFILE.gender} />
        <InfoRow label="Education" value={PROFILE.education} />
        <InfoRow label="Designation" value={PROFILE.designation} />
        <InfoRow label="Operation Done" value={PROFILE.operationDone} />
      </div>

      <div className=" grid grid-cols-3 gap-2   text-center">
        <div>
          <p className="text-lg font-bold text-indigo-500">
            {PROFILE.projects}
          </p>
          <p className="text-xs text-gray-400">Projects</p>
        </div>
        <div className="border-l border-r border-gray-200">
          <p className="text-lg font-bold text-indigo-500">
            {PROFILE.uploads}
          </p>
          <p className="text-xs text-gray-400">Uploads</p>
        </div>
        <div>
          <p className="text-lg font-bold text-indigo-500">
            {PROFILE.tasks}
          </p>
          <p className="text-xs text-gray-400">Tasks</p>
        </div>
      </div>
    </div>
  );
}

function AddressCard() {
  return (
    <div className="mt-5 rounded bg-white p-5 px-8 shadow-sm">
      <h3 className="mb-3 text-gray-800 text-[1.2rem] font-medium border-b border-[#8080802b] pb-3.75 -mx-8 px-8">Address</h3>
      <p className="whitespace-pre-line text-sm leading-relaxed text-gray-500">
        {PROFILE.address}
      </p>
    </div>
  );
}

function WorkExpertiseCard() {
  return (
    <div className="mt-5 rounded bg-white p-5 px-8 shadow-sm">
      <h3 className="mb-4 text-gray-800 text-[1.2rem] font-medium border-b border-[#8080802b] pb-3.75 -mx-8 px-8">Work Expertise</h3>
      <div className="space-y-4">
        {PROFILE.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

function Tabs({ active, onChange }) {
  const tabs = [
    { key: "posts", label: "Posts" },
    { key: "about", label: "About Me" },
  ];
  return (
    <div className="px-6 pt-4">
      <div className="flex gap-6 border-b border-gray-100 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`pb-3 text-sm font-medium transition ${active === tab.key
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

export default function ProfessorProfile({ prof }) {
  const [activeTab, setActiveTab] = useState("posts");
  const [draft, setDraft] = useState("");
  const [posts, setPosts] = useState(INITIAL_POSTS);

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
      <PageContainer>

        {prof ?
          <Header parentTitle="Staff Profile" childTitle="Staff" grandChildTitle="Staff Profile" /> :
          <Header parentTitle="Professor Profile" childTitle="Professors" grandChildTitle="Professor Profile" />
        }

        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <aside>
            <ProfileCard />
            <AboutMeCard />
            <AddressCard />
            <WorkExpertiseCard />
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
                      About {PROFILE.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {PROFILE.bio}
                    </p>
                    <div className="mt-4 space-y-3">
                      <InfoRow label="Gender" value={PROFILE.gender} />
                      <InfoRow label="Education" value={PROFILE.education} />
                      <InfoRow label="Designation" value={PROFILE.designation} />
                      <InfoRow
                        label="Operation Done"
                        value={PROFILE.operationDone}
                      />
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
      </PageContainer>
    </div>
  );
}