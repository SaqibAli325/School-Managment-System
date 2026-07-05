import React from 'react';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap,
    FaGlobe, FaHeart, FaReply, FaLink, FaImage, FaEllipsisH,
    FaCalendarAlt, FaRegCommentDots
} from 'react-icons/fa';
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import PageContainer from '../Layout/PageContainer'
import Header from '../Header'

export default function PostDetails() {

    // Skills shown under the post
    const skills = ['Admin', 'Dashboard', 'Photoshop', 'Bootstrap', 'Responsive', 'Crypto'];

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <PageContainer>
                <Navbar />
                <Sidebar />
                <Header
                    parentTitle="Hi, welcome back!"
                    subtitle="Your business dashboard template"
                    childTitle="App"
                    grandChildTitle="Post Details"
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
                                        className="w-16 h-16 rounded-full object-cover shadow-md -mt-10 relative z-10 border-4 border-white"
                                    />

                                    <div>
                                        <h2 className="text-base font-bold text-[#6A73FC]">
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
                                        hello@email.com
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

                        {/* LEFT COLUMN — one single collapsed box, sections divided internally */}
                        <div className="lg:col-span-4 bg-white rounded p-6 shadow-sm border border-gray-100 flex flex-col divide-y divide-gray-100">

                            {/* STATS SECTION */}
                            <div className="pb-6 text-center">
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
                                    <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium py-2.5 px-6 rounded transition-colors shadow-sm whitespace-nowrap">
                                        Follow
                                    </button>
                                    <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium py-2.5 px-6 rounded transition-colors shadow-sm whitespace-nowrap">
                                        Send Message
                                    </button>
                                </div>
                            </div>

                            {/* TODAY HIGHLIGHTS SECTION */}
                            <div className="py-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-base font-bold text-[#6A73FC]">Today Highlights</h4>
                                    <span className="text-xs font-semibold text-[#6A73FC] cursor-pointer">More</span>
                                </div>
                                <div className="rounded overflow-hidden mb-4 bg-gray-100 h-40">
                                    <img
                                        src="https://edumin.dexignlab.com/xhtml/images/profile/1.jpg"
                                        alt="Highlight"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h5 className="text-sm font-bold text-[#333333] mb-2">Darwin Creative Agency Theme</h5>
                                <p className="text-xs leading-relaxed text-[#7e7e7e]">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </p>
                            </div>

                            {/* INTEREST SECTION */}
                            <div className="py-6">
                                <h4 className="text-base font-bold text-[#6A73FC] mb-4">Interest</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=150",
                                        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=150",
                                        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=150",
                                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=150",
                                        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=150",
                                        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=150"
                                    ].map((imgUrl, i) => (
                                        <div key={i} className="rounded overflow-hidden h-16 bg-gray-100 shadow-sm">
                                            <img src={imgUrl} alt="Interest preview" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* OUR LATEST NEWS SECTION */}
                            <div className="pt-6">
                                <h4 className="text-base font-bold text-[#6A73FC] mb-4">Our Latest News</h4>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { title: "Transform Yourself, Conquer Limits.", blurb: "I shared this on my fb wall a few months back, and I thought.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=100" },
                                        { title: "Elevate Fitness, Ignite Potential, Achieve.", blurb: "I shared this on my twitter wall a few months back and I thought.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=100" },
                                        { title: "Strength, Endurance, Progress: Unleash", blurb: "I shared this on my insta wall a few months back and I thought.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100" }
                                    ].map((news, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <img src={news.img} alt="" className="w-12 h-12 object-cover rounded bg-gray-100" />
                                            <div>
                                                <h6 className="text-xs font-bold text-[#333333] line-clamp-1 hover:text-[#6A73FC] cursor-pointer">{news.title}</h6>
                                                <p className="text-[11px] text-gray-400 mt-0.5">{news.blurb}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN — single Post Detail card */}
                        <div className="lg:col-span-8 bg-white rounded p-6 md:p-8 shadow-sm border border-gray-100">

                            {/* POST TITLE + META */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-2">
                                Collection of textile samples lay spread
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-5 pb-5 border-b border-gray-100">
                                <span>By <span className="text-[#6A73FC] font-semibold">Admin</span></span>
                                <span className="flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-[#6A73FC]" /> 18 Nov 2023
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <FaRegCommentDots className="text-[#6A73FC]" /> 28
                                </span>
                            </div>

                            {/* POST IMAGE */}
                            <div className="w-full h-64 md:h-96 rounded overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200"
                                    alt="Post Content"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* POST BODY */}
                            <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#7e7e7e] mb-8">
                                <p>
                                    A wonderful serenity has taken possession of my entire soul like these sweet morning of spare which enjoy whole heart. A wonderful serenity has taken possession of my entire soul like these sweet morning of spare which enjoy whole heart.
                                </p>
                                <p>
                                    A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen centuries.
                                </p>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                                </p>
                            </div>

                            {/* SKILLS */}
                            <div>
                                <h4 className="text-base font-bold text-[#6A73FC] mb-4">Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-[#EDE9FE] text-[#6A73FC] font-semibold px-4 py-2 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* LEAVE A REPLY — original form, only input/label styling updated */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="text-base font-bold text-[#6A73FC] mb-4">Leave a Reply</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2 block">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Author"
                                            className="w-full border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                                        />
                                    </div>
                                    <div>
                                        <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2 block">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full border border-gray-200 rounded px-[0.95rem] py-1.25 h-[2.7rem] focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="ml-1 text-[0.875rem] font-medium text-[#312a2a] mb-2 block">
                                        Comment
                                    </label>
                                    <textarea
                                        placeholder="Comment"
                                        rows="4"
                                        className="w-full resize-none border border-gray-200 rounded px-[0.95rem] py-2 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                                    ></textarea>
                                </div>
                                <button className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors shadow-sm">
                                    Post Comment
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* FOOTER */}
                    <footer className="w-full text-center py-6 mt-12 text-xs text-gray-400 border-t border-gray-200/60">
                        Copyright © Designed & Developed by <span className="text-[#6A73FC] font-medium">DexignLab</span> 2023
                    </footer>

                </div>
            </PageContainer>
        </div>
    );
}