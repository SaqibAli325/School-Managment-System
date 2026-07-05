import React, { useRef, useState } from "react";
import {
    FaInbox, FaPaperPlane, FaStar, FaRegFileAlt, FaTrashAlt, FaPaperclip,
    FaSyncAlt, FaChevronDown, FaSearch, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const Inbox = () => {
    const [selectedEmails, setSelectedEmails] = useState({});
    const [selectAll, setSelectAll] = useState(false);
    const [starred, setStarred] = useState({});

    const handleStar = (id) => {
        setStarred((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFiles = (files) => {
        const fileArray = Array.from(files);
        setSelectedFiles(fileArray);
    };

    const folders = [
        { label: 'Inbox', icon: FaInbox, count: 198, active: true },
        { label: 'Sent', icon: FaPaperPlane, count: null, active: false },
        { label: 'Important', icon: FaStar, count: 47, active: false },
        { label: 'Draft', icon: FaRegFileAlt, count: null, active: false },
        { label: 'Trash', icon: FaTrashAlt, count: null, active: false },
    ];

    const categories = ['Work', 'Private', 'Support', 'Social'];

    const emailTexts = [
        "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa w...",
        "Almost unorthographic life One day however a small line of blind text by the name of L...",
        "Pointing has no control about the blind texts it is an almost unorthographic life One da...",
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unort...",
    ];

    const emails = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        text: emailTexts[i % emailTexts.length],
        time: '11:49 am',
        read: i % 2 !== 0,
    }));

    const [currentPage, setCurrentPage] = useState(2);
    const totalPages = [1, 2, 3, 4];

    const handleSelectAll = (e) => {
        const checked = e.target.checked;

        setSelectAll(checked);

        const updated = {};
        emails.forEach((email) => {
            updated[email.id] = checked;
        });

        setSelectedEmails(updated);
    };

    const handleSelectEmail = (id) => {
        const updated = {
            ...selectedEmails,
            [id]: !selectedEmails[id],
        };

        setSelectedEmails(updated);

        // Agar sab selected hain to top checkbox bhi check ho jaye
        const allSelected = emails.every((email) => updated[email.id]);
        setSelectAll(allSelected);
    };
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle='Hi, Welcome Back' childTitle="Email" grandChildTitle="Compose" />

                <div className="w-full p-6 mt-5 bg-white rounded shadow-sm border border-gray-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* LEFT — folders + categories */}
                        <div className="lg:col-span-3 flex flex-col gap-6">

                            <button className="w-full bg-[#6a73fa] hover:bg-[#5961e0] text-white font-bold text-sm py-3 rounded transition-colors">
                                Compose
                            </button>

                            {/* Folder list */}
                            <div className="flex flex-col gap-1 border border-gray-200 rounded rounded overflow-hidden">
                                {folders.map((folder, i) => {
                                    const Icon = folder.icon;
                                    return (
                                        <div
                                            key={i}
                                            className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors border-b border-gray-300 ${folder.active
                                                ? 'bg-[#6a73fa] text-white'
                                                : 'text-[#333333] hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className="font-semibold flex items-center gap-3 text-sm font-medium">
                                                <Icon size={14} className={folder.active ? 'text-white' : 'text-[#6a707e] '} />
                                                {folder.label}
                                            </span>
                                            {folder.count !== null && (
                                                <span className="bg-[#FF1616] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                                                    {folder.count}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Categories */}
                            <div>
                                <div className="bg-[rgba(106,115,250,0.1)] px-4 py-3 rounded-t text-sm font-bold text-[#6a707e]">
                                    Categories
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b">
                                    {categories.map((cat, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0 border-gray-100 text-sm text-[#6a707e] hover:bg-gray-50 cursor-pointer transition-colors font-bold"
                                        >
                                            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — email list */}
                        <div className="lg:col-span-9 flex flex-col gap-4">

                            {/* Toolbar */}
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                                    />
                                    <button className="w-8 h-8 flex items-center justify-center rounded bg-[rgba(106,115,250,0.1)] text-[#6a73fa]">
                                        <FaSyncAlt size={13} />
                                    </button>
                                    <div className="relative">
                                        <select
                                            className="appearance-none border border-gray-200 rounded pl-2 py-2 text-sm font-semibold text-[#6a73fa] bg-[#6A73FA1A] hover:bg-[#6a73fa] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6a73fa]/30 cursor-pointer "
                                        >
                                            <option className='bg-gray-50 text-black'>More</option>
                                            <option className='bg-gray-50 text-black'>Mark as Unread</option>
                                            <option className='bg-gray-50 text-black'>Add to Tasks</option>
                                            <option className='bg-gray-50 text-black'>Add Star</option>
                                            <option className='bg-gray-50 text-black'>Mute</option>
                                        </select>

                                        <FaChevronDown
                                            size={10}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="search"
                                        placeholder="Search here"
                                        className="border border-gray-200 rounded px-4 py-2.5 pr-10 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                                    />
                                    <FaSearch size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Email list */}
                            <div className="flex flex-col">
                                {emails.map((email) => (
                                    <div
                                        key={email.id}
                                        className="flex items-center gap-4  py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                                    ><input
                                            type="checkbox"
                                            checked={selectedEmails[email.id]}
                                            onChange={() => handleSelectEmail(email.id)}
                                            className="w-4 h-4 rounded border-gray-300 shrink-0"
                                        />
                                        <FaStar
                                            size={18}
                                            onClick={() => handleStar(email.id)}
                                            className={`shrink-0 cursor-pointer transition-colors duration-200 ${starred[email.id] ? "text-yellow-400" : "text-black"
                                                }`}
                                        />
                                        <span
                                            className={`flex-1 text-sm truncate text-[#333333] font-semibold'
                                                }`}
                                        >
                                            {email.text}
                                        </span>
                                        <span className="text-xs text-[#6a707e] shrink-0">{email.time}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center  gap-2 mt-2">
                                <button
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50"
                                >
                                    <FaChevronLeft size={11} />
                                </button>
                                {totalPages.map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 flex items-center justify-center rounded text-sm font-semibold transition-colors cursor-pointer ${currentPage === page
                                            ? 'bg-[#6a73fa] text-white'
                                            : 'text-[#333333] hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages.length, p + 1))}
                                    className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50"
                                >
                                    <FaChevronRight size={11} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FOOTER */}
                <footer className="w-full text-center py-6 mt-12 text-xs text-gray-400">
                    Copyright © Designed & Developed by <span className="text-[#6a73fa] font-medium">DexignLab</span> 2023
                </footer>

            </PageContainer>
        </div>
    )
}

export default Inbox