import React, { useState } from 'react';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap,
    FaGlobe, FaHeart, FaReply, FaLink, FaImage, FaEllipsisH
} from 'react-icons/fa';
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import PageContainer from '../Layout/PageContainer'
import Header from '../Header'

export default function UserProfile() {
    const [activeTab, setActiveTab] = useState('posts');

    // Dummy Interest Data
    const interests = ['Photoshop', 'Illustrator', 'Corel Draw', 'UI/UX Design', 'Web Development'];

    const tabs = [
        { key: 'posts', label: 'Posts' },
        { key: 'about', label: 'About Me' },
        { key: 'settings', label: 'Setting' },
    ];

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <PageContainer>
                <Navbar />
                <Sidebar />
                <Header
                    parentTitle="Hi, welcome back!"
                    subtitle="Your business dashboard template"
                    childTitle="App"
                    grandChildTitle="Profile"
                />
                <div className="mt-5 w-full min-h-screen text-[#7e7e7e]">
                    {/* 1. TOP PROFILE HEADER BANNER */}
                    <div className="p-4 bg-white rounded shadow-sm overflow-hidden mb-6 border border-gray-100">
                        <div className="h-48 md:h-64 w-full relative bg-gray-200">
                            <img
                                src="https://edumin.dexignlab.com/xhtml/images/profile/cover.jpg"
                                alt="Graduation Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Profile Meta Row */}
                        <div className="pt-4 px-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                                {/* Left Side: Avatar + Name/Role */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://edumin.dexignlab.com/xhtml/images/profile/profile.png"
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full object-cover shadow-md -mt-10 relative z-10"
                                    />

                                    <div>
                                        <h2 className="text-base font-bold text-[#6a73fa]">
                                            Mitchell C. Shay
                                        </h2>
                                        <p className="text-sm text-gray-400">
                                            UX / UI Designer
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="sm:ml-10">
                                    <h2 className="text-base font-bold text-[#333]">
                                        info@example.com
                                    </h2>
                                    <h3 className="text-sm text-gray-400">
                                        Email
                                    </h3>
                                </div>

                                {/* More Button */}
                                <button className="sm:ml-auto h-10 w-10 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-100 transition">
                                    <FaEllipsisH />
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* MAIN TWO-COLUMN LAYOUT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                        {/* LEFT COLUMN — separate cards for each section */}
                        <div className="lg:col-span-4 flex flex-col gap-6">

                            {/* STATS CARD */}
                            <div className="bg-white rounded p-6 shadow-sm border border-gray-100 text-center">
                                <div className="grid grid-cols-3 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#333333]">150</h3>
                                        <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Follower</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#333333]">140</h3>
                                        <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Place Stay</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#333333]">45</h3>
                                        <p className="text-xs text-gray-400 mt-1 uppercase font-semibold">Reviews</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3 mt-6">
                                    <button className="bg-[#6a73fa] hover:bg-[#5260f5] text-white text-sm font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm whitespace-nowrap">
                                        Follow
                                    </button>
                                    <button className="bg-[#6a73fa] hover:bg-[#5260f5] text-white text-sm font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm whitespace-nowrap">
                                        Send Message
                                    </button>
                                </div>
                            </div>

                            {/* TODAY HIGHLIGHTS CARD */}
                            <div className="bg-white rounded p-6 shadow-sm border border-gray-100">
                                <h4 className="text-base font-bold text-[#6a73fa] mb-4">Today Highlights</h4>
                                <div className="rounded overflow-hidden mb-4 bg-gray-100 h-40">
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=500"
                                        alt="Highlight"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h5 className="text-sm font-bold text-[#333333] mb-2">Darwin Creative Agency Theme</h5>
                                <p className="text-xs leading-relaxed text-[#7e7e7e]">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </p>
                            </div>

                            {/* INTEREST CARD */}
                            <div className="bg-white rounded p-6 shadow-sm border border-gray-100">
                                <h4 className="text-base font-bold text-[#6a73fa] mb-4">Interest</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=150",
                                        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=150",
                                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=150",
                                        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=150",
                                        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=150",
                                        "https://images.unsplash.com/photo-1556761175-b204652f9716?q=80&w=150"
                                    ].map((imgUrl, i) => (
                                        <div key={i} className="rounded overflow-hidden h-16 bg-gray-100 shadow-sm">
                                            <img src={imgUrl} alt="Interest preview" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* OUR LATEST NEWS CARD */}
                            <div className="bg-white rounded p-6 shadow-sm border border-gray-100">
                                <h4 className="text-base font-bold text-[#6a73fa] mb-4">Our Latest News</h4>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { title: "Transform Yourself, Conquer Limits.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=100" },
                                        { title: "Medical advancements globally.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=100" },
                                        { title: "Collection of textile samples.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=100" }
                                    ].map((news, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <img src={news.img} alt="" className="w-12 h-12 object-cover rounded bg-gray-100" />
                                            <div>
                                                <h6 className="text-xs font-bold text-[#333333] line-clamp-1 hover:text-[#6a73fa] cursor-pointer">{news.title}</h6>
                                                <p className="text-[11px] text-gray-400 mt-0.5">I shared this on my social media a few months back...</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN — collapsed into a single card */}
                        <div className="lg:col-span-8 bg-white rounded shadow-sm border border-gray-100">

                            {/* TAB BUTTONS TRAY - underline style */}
                            <div className="px-6 pt-4">
                                <div className="flex gap-8 border-b border-gray-100">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`text-sm font-semibold pb-3 -mb-px border-b-2 transition-colors ${activeTab === tab.key
                                                ? 'text-[#6a73fa] border-[#6a73fa]'
                                                : 'text-gray-400 border-transparent hover:text-[#333333]'
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* DYNAMIC TAB CONTENTS */}
                            {activeTab === 'posts' && (
                                <div className="p-6 flex flex-col gap-6 divide-y divide-gray-100">

                                    {/* CREATE POST INPUT BOX */}
                                    <div className="pb-6">
                                        <textarea
                                            placeholder="Please type what you want..."
                                            rows="3"
                                            className="w-full resize-none border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[#6a73fa] focus:ring-1 focus:ring-[#6a73fa] placeholder-gray-400"
                                        ></textarea>
                                        <div className="flex justify-between items-center mt-3">
                                            <div className="flex items-center gap-1.5">
                                                <button className="p-2.5 bg-[#EDE9FE] hover:bg-[#e0d9fd] text-[#6a73fa] rounded transition-colors text-xs flex items-center justify-center">
                                                    <FaLink />
                                                </button>
                                                <button className="p-2.5 bg-[#EDE9FE] hover:bg-[#e0d9fd] text-[#6a73fa] rounded transition-colors text-xs flex items-center justify-center">
                                                    <FaImage />
                                                </button>
                                            </div>
                                            <button className="bg-[#6a73fa] hover:bg-[#5260f5] text-white text-xs font-semibold px-5 py-2 rounded transition-colors shadow-sm">
                                                Post
                                            </button>
                                        </div>
                                    </div>

                                    {/* FEED POSTS ITEMS */}
                                    {[
                                        {
                                            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
                                            title: '"Embark on a Journey of Unparalleled Excellence, Where Innovation and Elegance Converge to Shape Tomorrow\'s World."',
                                        },
                                        {
                                            img: "https://images.unsplash.com/photo-1491845338219-4f53c1cd7927?q=80&w=800",
                                            title: 'Collection of textile samples lay spread',
                                        },
                                        {
                                            img: "https://images.unsplash.com/photo-1525921429624-479b6c294521?q=80&w=800",
                                            title: '"Breakthrough Study Reveals Promising New Treatment Strategy for Alzheimer\'s Disease"',
                                        }
                                    ].map((post, index) => (
                                        <div key={index} className="pt-6 first:pt-0 flex flex-col gap-4">
                                            <div className="w-full h-64 md:h-80 bg-gray-100 rounded overflow-hidden">
                                                <img src={post.img} alt="Post Content" className="w-full h-full object-cover" />
                                            </div>
                                            <h3 className="text-base md:text-lg font-bold text-[#333333] leading-snug hover:text-[#6a73fa] cursor-pointer">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs md:text-sm leading-relaxed text-[#7e7e7e]">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy whole heart.
                                            </p>
                                            <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                                                <button className="flex items-center gap-1.5 bg-[#6a73fa] hover:bg-[#5260f5] text-white text-xs px-4 py-2 rounded transition-colors shadow-sm font-semibold">
                                                    <FaHeart /> Like
                                                </button>
                                                <button className="flex items-center gap-1.5 bg-[#673bb7] hover:bg-[#5a30a3] text-white text-xs px-4 py-2 rounded transition-colors shadow-sm font-semibold">
                                                    <FaReply /> Reply
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}

                            {/* ABOUT ME TAB CONFIG */}
                            {activeTab === 'about' && (
                                <div className="p-6 flex flex-col gap-6 animate-fadeIn">
                                    <div>
                                        <h4 className="text-base font-bold text-[#333333] mb-2">About Me</h4>
                                        <p className="text-sm leading-relaxed">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                    <hr className="border-gray-100" />
                                    <div>
                                        <h4 className="text-base font-bold text-[#333333] mb-3">Interests & Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {interests.map((item, i) => (
                                                <span key={i} className="text-xs bg-gray-50 border border-gray-100 text-[#333333] font-medium px-3 py-1.5 rounded">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* SETTINGS TAB CONFIG */}
                            {activeTab === 'settings' && (
                                <div className="p-6 flex flex-col gap-4 animate-fadeIn">
                                    <h4 className="text-base font-bold text-[#333333] mb-2">Account Settings</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Full Name</label>
                                            <input type="text" defaultValue="Mitchell C. Shay" className="w-full border border-gray-200 rounded p-2.5 text-sm focus:outline-none focus:border-[#6a73fa]" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Email Address</label>
                                            <input type="email" defaultValue="info@example.com" className="w-full border border-gray-200 rounded p-2.5 text-sm focus:outline-none focus:border-[#6a73fa]" />
                                        </div>
                                    </div>
                                    <button className="bg-[#6a73fa] text-white text-xs font-bold py-2.5 px-6 rounded self-end mt-4 shadow-sm hover:bg-[#5260f5] transition-all">
                                        Save Changes
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* FOOTER */}
                    <footer className="w-full text-center py-6 mt-12 text-xs text-gray-400 border-t border-gray-200/60">
                        Copyright © Designed & Developed by <span className="text-[#6a73fa] font-medium">DexignLab</span> 2023
                    </footer>

                </div>
            </PageContainer>
        </div>
    );
}