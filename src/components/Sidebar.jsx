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
  RiHeartFill,
  RiStackLine,
} from "@remixicon/react";
import { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";

const Sidebar = () => {
  const [dashboardSections,setdashboardSections] = useState(false);
  const [professorsSections, setProfessorsSections] = useState(false);
  const [studentsSections, setStudentsSections] = useState(false);
  const [coursesSections, setCoursesSections] = useState(false);
  const [librarySections, setLibrarySections] = useState(false);
  const [departmentsSections, setDepartmentsSections] = useState(false);
  const [staffSections, setStaffSections] = useState(false);
  const [collapsed, setCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    
    const handleToggle = (e) => {
      setCollapsed(e.detail.collapsed);
    };
    window.addEventListener("sidebarToggle", handleToggle);
    
    const handleMobileToggle = (e) => {
      setMobileMenuOpen(e.detail.isOpen);
    };
    window.addEventListener("mobileSidebarToggle", handleMobileToggle);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("sidebarToggle", handleToggle);
      window.removeEventListener("mobileSidebarToggle", handleMobileToggle);
    };
  }, []);
  
  const isMobileView = windowWidth < 1100;
  const shouldHide = isMobileView && !mobileMenuOpen;
  const displayCollapsed = isMobileView ? false : collapsed;
  
  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#FAF9FB] overflow-y-auto overflow-x-hidden z-90 border-r border-gray-200 transition-all duration-200 ${isMobileView ? 'w-62.5' : (displayCollapsed ? 'w-14' : 'w-62.5')} ${shouldHide ? 'hidden' : ''} mt-16`}>
      <div>
        <div className={`pt-8  pb-2 mr-4 ${displayCollapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!displayCollapsed && <small className="text-[70%] font-semibold">Main Menu</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="w-full">
            <div 
              onClick={() => setdashboardSections(!dashboardSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${dashboardSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiHome4Line size={20} />
                  {!collapsed && <h2 className="text-[12px]">Dashboard</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${dashboardSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dashboardSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Dashboard 1</Link>
                  <Link to="/dashboard2" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Dashboard 2</Link>
                  <Link to="/dashboard3" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Dashboard 3</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/event-management" className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiCalendar2Line size={20} />
                {!collapsed && <span>Event Management</span>}
              </div>
          </Link>

          <div className="w-full">
            <div 
              onClick={() => setProfessorsSections(!professorsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${professorsSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiUserLine size={20} />
                  {!collapsed && <h2 className="text-[12px]">Professors</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${professorsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${professorsSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-professors" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Professors</Link>
                  <Link to="/add-professor" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Professor</Link>
                  <Link to="/edit-professor" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Professor</Link>
                  <Link to="/professor-profile" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Professor Profile</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div 
              onClick={() => setStudentsSections(!studentsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${studentsSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiTeamLine size={20} />
                  {!collapsed && <h2 className="text-[12px]">Students</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${studentsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${studentsSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-students" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Students</Link>
                  <Link to="/add-student" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Student</Link>
                  <Link to="/edit-student" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Student</Link>
                  <Link to="/about-student" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- About Student</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div 
              onClick={() => setCoursesSections(!coursesSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${coursesSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiGraduationCapLine size={20} />
                  {!collapsed && <h2 className="text-[12px]">Courses</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${coursesSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${coursesSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-courses" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Courses</Link>
                  <Link to="/add-course" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Course</Link>
                  <Link to="/edit-course" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Course</Link>
                  <Link to="/about-course" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- About Course</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div 
              onClick={() => setLibrarySections(!librarySections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${librarySections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiBook2Line size={20} />
                  {!collapsed && <h2 className="text-[12px]">Library</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${librarySections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${librarySections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-library" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Library</Link>
                  <Link to="/add-library" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Library</Link>
                  <Link to="/edit-library" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Library</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div 
              onClick={() => setDepartmentsSections(!departmentsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${departmentsSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiBuilding4Line size={20} />
                  {!collapsed && <h2 className="text-[12px]">Departments</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${departmentsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${departmentsSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-departments" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Departments</Link>
                  <Link to="/add-department" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Department</Link>
                  <Link to="/edit-department" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Department</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div 
              onClick={() => setStaffSections(!staffSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
                <div className={`${staffSections ? "text-[#6A73FA]":""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                  <RiTeamLine size={20} />
                  {!collapsed && <h2 className="text-[12px]">Staff</h2>}
                </div>
                {!collapsed && (
                  <RiPlayMiniFill 
                    size={16} 
                    className={`transition-transform duration-300 ${staffSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                  />
                )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${staffSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-staff" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Staff</Link>
                  <Link to="/add-staff" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Staff</Link>
                  <Link to="/edit-staff" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Staff</Link>
                  <Link to="/staff-profile" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Staff Profile</Link>
                </div>
              </div>
            )}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiGift2Line size={20} />
                {!collapsed && <span>Holiday</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <span className="text-[20px] pl-1">$</span>
                {!collapsed && <span className="pl-1">Fees</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">Apps</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiTeamLine size={20} />
                {!collapsed && <span>Apps</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiInboxLine size={20} />
                {!collapsed && (
                  <div className="flex items-center gap-1.25">
                    <span>CMS</span>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                  </div>
                )}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiSignalCellular3Fill size={20} />
                {!collapsed && <span>Charts</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">COMPONENTS</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiGlobalLine size={20} />
                {!collapsed && <span>Bootstrap</span>}
              </div>
                {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileAddLine size={20} />
                {!collapsed && <span>Plugins</span>}
              </div>
                {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiComputerLine size={20} />
                {!collapsed && <span>Widget</span>}
              </div>

          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">FORMS</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileTextLine size={20} />
                {!collapsed && <span>Forms</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">TABLE</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiLayoutGrid2Line size={20} />
                {!collapsed && <span>Table</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">EXTRA</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
                <RiFileTextLine size={20} />
                {!collapsed && <span>Pages</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
        </div>

        <div className={`px-4 py-8 text-[15px] text-gray-400 leading-relaxed ${collapsed ? 'hidden' : ''}`}>
          {!collapsed && (
            <p>Edumin Saas Admin © 2023 All <br /> Rights Reserved <br /> Made with <RiHeartFill size={10} className="inline text-red-500" /> by DexignLab</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar