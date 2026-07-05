import React, { useRef, useState } from "react";
import {
    FaInbox, FaPaperPlane, FaStar, FaRegFileAlt, FaTrashAlt, FaPaperclip
} from 'react-icons/fa';
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'

const Compose = () => {
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

                        {/* RIGHT — compose form */}
                        <div className="lg:col-span-9 flex flex-col gap-4">

                            <input
                                type="text"
                                placeholder="To:"
                                className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                            />

                            <input
                                type="text"
                                placeholder="Subject:"
                                className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                            />

                            <textarea
                                placeholder="Enter text ..."
                                rows="7"
                                className="w-full resize-y border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                            ></textarea>

                            <div className="flex items-center gap-2 text-sm font-semibold text-[#333333]">
                                <FaPaperclip className="text-gray-400" />
                                Attachment
                            </div>

                            <>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    className="hidden"
                                    multiple
                                    onChange={(e) => handleFiles(e.target.files)}
                                />

                                <div
                                    onClick={() => fileInputRef.current.click()}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        handleFiles(e.dataTransfer.files);
                                    }}
                                    className="w-full h-48 border-2 border-dashed border-gray-200 rounded bg-gray-50 flex items-center justify-center cursor-pointer p-4"
                                >
                                    {selectedFiles.length === 0 ? (
                                        <p className="text-sm text-[#333333]">
                                            Drop files here to upload
                                        </p>
                                    ) : (
                                        <div className="w-full">
                                            {selectedFiles.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-center bg-white border border-gray-200 rounded px-3 py-2 mb-2"
                                                >
                                                    <span className="text-sm text-[#333333] truncate">
                                                        {file.name}
                                                    </span>

                                                    <span className="text-xs text-gray-500">
                                                        {(file.size / 1024).toFixed(1)} KB
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>

                            <div className="flex items-center gap-3 mt-2">
                                <button className="flex items-center gap-2 bg-[#6a73fa] hover:bg-[#5961e0] text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors">
                                    <FaPaperPlane size={12} /> Send
                                </button>
                                <button className="flex items-center gap-2 bg-[#ffd8d8] hover:bg-[#ffc7c7] text-[#FF1616] text-sm font-semibold px-6 py-2.5 rounded transition-colors">
                                    ✕ Discard
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

export default Compose