import React, { useState } from "react";
import {
    FaInbox, FaPaperPlane, FaStar, FaRegFileAlt, FaTrashAlt,
    FaArchive, FaExclamationCircle, FaFolder, FaTag, FaChevronDown,
    FaReply, FaArrowRight, FaForward
} from 'react-icons/fa';
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'
import Dropdown from '../../../components/Dropdown'

const Read = () => {
    const [message, setMessage] = useState('');

    const folders = [
        { label: 'Inbox', icon: FaInbox, count: 198, active: true },
        { label: 'Sent', icon: FaPaperPlane, count: null, active: false },
        { label: 'Important', icon: FaStar, count: 47, active: false },
        { label: 'Draft', icon: FaRegFileAlt, count: null, active: false },
        { label: 'Trash', icon: FaTrashAlt, count: null, active: false },
    ];

    const categories = ['Work', 'Private', 'Support', 'Social'];

    const toolbarActions = [
        { icon: FaArchive },
        { icon: FaExclamationCircle },
        { icon: FaTrashAlt },
    ];

    let options = ["Option 1", "Option 2", "Option 3"];
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle='Hi, Welcome Back' childTitle="Email" grandChildTitle="Read" />

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

                        {/* RIGHT — email read view */}
                        <div className="lg:col-span-9 flex flex-col gap-5">

                            {/* Toolbar */}
                            <div className="flex items-center gap-1 flex-wrap">

                                {/* Left Icon Group */}
                                <div className="flex items-center h-9 overflow-hidden rounded-md bg-[#F3F3FD]">

                                    {toolbarActions.map((action, i) => {
                                        const Icon = action.icon;

                                        return (
                                            <button
                                                key={i}
                                                className={`w-10 h-9 flex items-center justify-center text-[#6A73FA] hover:bg-[#6A73FA] transition-colors hover:text-white ${i !== toolbarActions.length - 1
                                                    ? "border-r border-[#E1E4F5]"
                                                    : ""
                                                    }`}
                                            >
                                                <Icon size={14} />
                                            </button>
                                        );
                                    })}

                                </div>

                                {/* Folder */}
                                <Dropdown options={["Social", "Promotions", "Updates", "Forums"]} direction="bottom">

                                    <button className="h-9 px-3 flex items-center gap-2 rounded-md bg-[#F3F3FD] text-[#6A73FA] hover:bg-[#6A73FA] transition-colors hover:text-white">
                                        <FaFolder size={14} />
                                        <FaChevronDown size={10} />
                                    </button>
                                </Dropdown>


                                {/* Tag */}
                                <Dropdown options={["Updates", "Social", "Promotions", "Forums"]} direction="bottom">
                                    <button className="h-9 px-3 flex items-center gap-2 rounded-md bg-[#F3F3FD] text-[#6A73FA] hover:bg-[#6A73FA] transition-colors hover:text-white">
                                        <FaTag size={14} />
                                        <FaChevronDown size={10} />
                                    </button>
                                </Dropdown>

                                {/* More */}
                                <Dropdown options={["Mark as Read", "Add to Tasks", "Add Star", "Mute"]} direction="bottom">
                                    <button className="h-9 px-5 flex items-center gap-2 rounded-md bg-[#F3F3FD] text-[#6A73FA] text-sm font-medium hover:bg-[#6A73FA] transition-colors hover:text-white">
                                        More
                                        <FaChevronDown size={10} />
                                    </button>
                                </Dropdown>

                            </div>

                            {/* Sender info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://edumin.dexignlab.com/xhtml/images/avatar/1.jpg"
                                        alt="Ingredia Nutrisha"
                                        className="w-12 h-12 rounded object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-bold text-[#6a73fa]">Ingredia Nutrisha</p>
                                        <p className="text-xs text-[#6a707e]">20 May 2021</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="w-9 h-9 flex items-center justify-center rounded bg-[rgba(106,115,250,0.1)] text-[#6a73fa] hover:bg-[rgba(106,115,250,0.2)] transition-colors">
                                        <FaReply size={14} />
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center rounded bg-[rgba(106,115,250,0.1)] text-[#6a73fa] hover:bg-[rgba(106,115,250,0.2)] transition-colors">
                                        <FaArrowRight size={14} />
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center rounded bg-[rgba(106,115,250,0.1)] text-[#6a73fa] hover:bg-[rgba(106,115,250,0.2)] transition-colors">
                                        <FaTrashAlt size={14} />
                                    </button>
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Subject + body */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-[#6a73fa]">
                                        A collection of textile samples lay spread
                                    </h3>
                                    <span className="text-sm text-[#333333] shrink-0">07:23 AM</span>
                                </div>

                                <p className="text-sm text-[#6a707e]">To: Me, info@example.com</p>

                                <p className="text-sm font-bold text-[#333333]">Hi,Ingredia,</p>

                                <p className="text-sm text-[#6a707e] leading-relaxed">
                                    <span className="font-bold text-[#333333]">Ingredia Nutrisha,</span> A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture
                                </p>

                                <p className="text-sm text-[#6a707e] leading-relaxed">
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                                </p>

                                <p className="text-sm text-[#6a707e] leading-relaxed">
                                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                </p>

                                <p className="text-sm font-bold text-[#333333]">Kind Regards</p>
                                <p className="text-sm text-[#6a707e] -mt-3">Mr Smith</p>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Reply / Forward buttons */}
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 bg-[#673BB7]  text-white text-[12px] font-semibold px-4 py-1.5 rounded transition-colors">
                                    <FaReply size={12} /> Reply
                                </button>
                                <button className="flex items-center gap-2 bg-[#6a73fa] hover:bg-[#5961e0] text-white text-[12px] font-semibold px-4 py-1.5 rounded transition-colors">
                                    <FaForward size={12} /> Forward
                                </button>
                            </div>

                            {/* Quick reply box */}
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="It's really an amazing.I want to know more about it..!"
                                rows="4"
                                className="w-full resize-y border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
                            ></textarea>

                            <div className="flex justify-end">
                                <button className="bg-[#6a73fa] hover:bg-[#5961e0] text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FOOTER */}
                <footer className="w-full text-center py-6 mt-12 text-xs text-gray-400">
                    Copyright © Designed & Developed by <span className="text-[#6a73fa] font-medium">DexignLab</span> 2023
                </footer>

            </PageContainer >
        </div >
    )
}

export default Read