import { RiGraduationCapFill } from "@remixicon/react";
import { RiBarChartHorizontalLine } from "@remixicon/react";
import { RiSearchLine } from "@remixicon/react";
import { RiMoonFill } from "@remixicon/react";
import { RiMessage2Line } from "@remixicon/react";
import { RiNotification2Line } from "@remixicon/react";
import { RiSettings3Line } from "@remixicon/react";
import { RiArrowRightLongLine, } from "@remixicon/react";
import { useState, useEffect } from "react";

// Must always match the widths used in Sidebar.jsx / PageContainer.jsx
const SIDEBAR_EXPANDED_WIDTH = 250;
const SIDEBAR_COLLAPSED_WIDTH = 56;

const Header = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Same rule Sidebar.jsx uses: collapse only applies on non-mobile widths
  const isMobileView = windowWidth < 1100;
  const displayCollapsed = isMobileView ? false : sidebarCollapsed;
  const logoWidth = displayCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH;

  const toggleSidebar = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1100) {
      // On small screens, toggle mobile menu
      const newMobileState = !mobileMenuOpen;
      setMobileMenuOpen(newMobileState);
      window.dispatchEvent(new CustomEvent('mobileSidebarToggle', { detail: { isOpen: newMobileState } }));
    } else {
      // On large screens, toggle collapse state
      const newState = !sidebarCollapsed;
      setSidebarCollapsed(newState);
      localStorage.setItem('sidebarCollapsed', newState);
      window.dispatchEvent(new CustomEvent('sidebarToggle', { detail: { collapsed: newState } }));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16.25 bg-white flex items-center z-100 shadow-sm">

      <h1
        className={`uppercase bg-[#6A73FA] text-white h-full flex items-center gap-2 tracking-[4px] text-[1.8rem] font-black shrink-0 overflow-hidden transition-all duration-200 ${displayCollapsed ? 'justify-center' : 'pr-[1.3rem] pl-[0.3rem]'}`}
        style={{ width: `${logoWidth}px` }}
      >
        <RiGraduationCapFill className="w-8 h-8 shrink-0" />
        <span className={`max-[515px]:hidden ${displayCollapsed ? 'hidden' : ''}`}>edumin</span>
      </h1>
      <div
        onClick={toggleSidebar}
        className="cursor-pointer flex items-center"
      >
        {sidebarCollapsed ? (
          <RiArrowRightLongLine
            size={24}
            className="ml-8 max-[340px]:ml-0 text-[#6A73FA] hover:translate-x-1 transition-all duration-300"
          />
        ) : (
          <RiBarChartHorizontalLine
            size={22}
            className="ml-8 max-[340px]:ml-0 text-gray-400 hover:text-gray-600 transition-all duration-300"
          />
        )}
      </div>

      <div className="max-[860px]:hidden flex ml-9 p-4 rounded-[3rem] bg-[#F5F5F5] h-[70%] items-center gap-4 w-[320px]">
        <RiSearchLine className={`${sidebarCollapsed ? 'hidden' : ''} text-[#888892] w-5`} />
        <input type="text" placeholder="Search" className="outline-none text-[14px] text-[#00000094] font-semibold placeholder:text-[#00000094]" />
      </div>

      <div className="flex items-center ml-auto mr-8 gap-[1.2rem]">
        <div className="text-[#7C84FA] cursor-pointer"><RiMoonFill size={22} className="text-[#7C84FA] max-[340px]:w-4" /></div>

        <div className="relative text-[#7C84FA] cursor-pointer">
          <RiMessage2Line size={22} className="max-[820px]:w-4" />
          <span className="absolute -top-1 -right-1 bg-[#7C84FA] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">75</span>
        </div>

        <div className="text-[#7C84FA] cursor-pointer"><RiNotification2Line size={22} className="max-[340px]:w-4" /></div>

        <div className="relative text-[#7C84FA] cursor-pointer">
          <RiSettings3Line size={22} className="max-[340px]:w-4" />
          <span className="absolute -top-1 -right-1 bg-[#7C84FA] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">15</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#7C84FA] overflow-hidden cursor-pointer flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDdc7ZHr1gAvUADsK2GDUuyffGCX61n8zJA&s" alt="user" className="w-full h-full object-cover" />
        </div>
      </div>
    </div >
  )
}

export default Header