import { 
  RiPlayMiniFill, 
  RiHome4Line, 
  RiCalendar2Line, 
  RiUserLine, 
  RiTeamLine, 
  RiGraduationCapLine, 
  RiBook2Line, 
  RiBuilding4Line, 
  RiGift2Line, 
  RiInboxLine, 
  RiSignalCellular3Fill, 
  RiGlobalLine, 
  RiFileAddLine, 
  RiComputerLine, 
  RiFileTextLine, 
  RiLayoutGrid2Line ,
  RiMoneyDollarCircleLine,
  RiHeartFill 
} from "@remixicon/react";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-62.5 h-[calc(100vh-65px)] bg-[#FAF9FB] overflow-y-auto z-90 border-r border-gray-200">
      <div>
        <div className="ml-8 text-gray-500 pt-8 border-b border-gray-200 pb-2 mr-4">
          <small className="text-[70%] font-semibold">Main Menu</small>
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiHome4Line size={20} />
                <span>Dashboard</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiCalendar2Line size={20} />
                <span>Event Management</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiUserLine size={20} />
                <span>Professors</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiTeamLine size={20} />
                <span>Students</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiGraduationCapLine size={20} />
                <span>Courses</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiBuilding4Line size={20} />
                <span>Library</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiGift2Line size={20} />
                <span>Holiday</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <span className="text-[20px] pl-1">$</span>
                <span className="pl-1">Fees</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>
        </div>

        <div className="ml-8 text-gray-500 pt-3 pb-2 mr-4">
          <small className="text-[70%] font-semibold">Apps</small>
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiTeamLine size={20} />
                <span>Apps</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiInboxLine size={20} />
                <div className="flex items-center gap-1.25">
                  <span>CMS</span>
                  <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                </div>
              </div>
              <RiPlayMiniFill size={16} />
          </div>

          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiSignalCellular3Fill size={20} />
                <span>Charts</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>
        </div>

        <div className="ml-8 text-gray-500 pt-3 pb-2 mr-4">
          <small className="text-[70%] font-semibold">COMPONENTS</small>
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiGlobalLine size={20} />
                <span>Bootstrap</span>
              </div>
                <RiPlayMiniFill size={16} />
          </div>
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileAddLine size={20} />
                <span>Plugins</span>
              </div>
                <RiPlayMiniFill size={16} />
          </div>
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiComputerLine size={20} />
                <span>Widget</span>
              </div>

          </div>
        </div>

        <div className="ml-8 text-gray-500 pt-3 pb-2 mr-4">
          <small className="text-[70%] font-semibold">FORMS</small>
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileTextLine size={20} />
                <span>Forms</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>
        </div>

        <div className="ml-8 text-gray-500 pt-3 pb-2 mr-4">
          <small className="text-[70%] font-semibold">TABLE</small>
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiLayoutGrid2Line size={20} />
                <span>Table</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>
        </div>

        <div className="ml-8 text-gray-500 pt-3 pb-2 mr-4">
          <small className="text-[70%] font-semibold">EXTRA</small>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="group flex justify-between items-center w-[90%] mx-auto py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer">
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileTextLine size={20} />
                <span>Pages</span>
              </div>
              <RiPlayMiniFill size={16} />
          </div>
        </div>

        <div className="px-4 py-8 text-[15px] text-gray-400 leading-relaxed">
          <p>Edumin Saas Admin © 2023 All <br /> Rights Reserved <br /> Made with <RiHeartFill size={10} className="inline text-red-500" /> by DexignLab</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar