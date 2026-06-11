import { RiGraduationCapFill } from "@remixicon/react";
import { RiBarChartHorizontalLine } from "@remixicon/react";
import { RiSearchLine } from "@remixicon/react";
import { RiMoonFill } from "@remixicon/react";
import { RiMessage2Line } from "@remixicon/react";
import { RiNotification2Line } from "@remixicon/react";
import { RiSettings3Line } from "@remixicon/react";
import { RiArrowRightLongLine } from "@remixicon/react";

const Header = () => {
  return (
    <div className="absolute w-full h-[65px] bg-white flex items-center">

      <h1 className="uppercase text-[#6A73FA] flex gap-2 tracking-[4px] text-[1.8rem] font-black items-center pl-[0.3rem]"><RiGraduationCapFill className="w-[65px] h-[40px]"/> edumin</h1>
      <div><RiBarChartHorizontalLine className="text-gray-400 ml-8 font-bold"/></div>

      <div className="flex ml-9 p-4 rounded-[3rem] bg-[#F5F5F5] h-[70%] items-center gap-4 w-[320px]">
        <RiSearchLine className="text-[#888892] w-[20px]"/>
        <input type="text" placeholder="Search" className="outline-none text-[14px] text-[#00000094] font-semibold placeholder:text-[#00000094]" />
      </div>

      <div className="flex items-center ml-auto mr-8 gap-[1.2rem]">
        <div className="text-[#7C84FA] cursor-pointer"><RiMoonFill size={22} className="text-[#7C84FA]"/></div>
        
        <div className="relative text-[#7C84FA] cursor-pointer">
          <RiMessage2Line size={22} />
          <span className="absolute -top-1 -right-1 bg-[#7C84FA] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">75</span>
        </div>

        <div className="text-[#7C84FA] cursor-pointer"><RiNotification2Line size={22} /></div>

        <div className="relative text-[#7C84FA] cursor-pointer">
          <RiSettings3Line size={22} />
          <span className="absolute -top-1 -right-1 bg-[#7C84FA] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">15</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#7C84FA] overflow-hidden cursor-pointer flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDdc7ZHr1gAvUADsK2GDUuyffGCX61n8zJA&s" alt="user" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Header