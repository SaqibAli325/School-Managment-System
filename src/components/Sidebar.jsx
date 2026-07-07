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
  RiLayoutGrid2Line,
  RiMoneyDollarCircleLine,
  RiHeartFill,
  RiStackLine,
} from "@remixicon/react";
import { useState, useEffect } from "react";
import { Link, Links, useLocation } from "react-router-dom";

const EXPANDED_WIDTH = 250;
const COLLAPSED_WIDTH = 56;

const Sidebar = () => {
  const [dashboardSections, setdashboardSections] = useState(false);
  const [professorsSections, setProfessorsSections] = useState(false);
  const [studentsSections, setStudentsSections] = useState(false);
  const [coursesSections, setCoursesSections] = useState(false);
  const [librarySections, setLibrarySections] = useState(false);
  const [departmentsSections, setDepartmentsSections] = useState(false);
  const [staffSections, setStaffSections] = useState(false);
  const [holidaySections, setHolidaySections] = useState(false);
  const [collapsed, setCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [FeesSection, setFeesSection] = useState(false)
  const [appsSection, setAppsSection] = useState(false)
  const [emailSection, setEmailSection] = useState(false)
  const [shopSection, setShopSection] = useState(false)

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
    <div className={`custom-scrollbar pb-12 fixed top-0 left-0 h-screen bg-[#FAF9FB] overflow-y-auto overflow-x-hidden z-90 border-r border-gray-200 transition-all duration-200 ${isMobileView
      ? "w-[250px]"
      : displayCollapsed
        ? "w-14"
        : "w-[250px]"} mt-16`}>
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
              <div className={`${dashboardSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiHome4Line size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Dashboard</h2>}
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
              <div className={`${professorsSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiUserLine size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Professors</h2>}
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
              <div className={`${studentsSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiTeamLine size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Students</h2>}
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
              <div className={`${coursesSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiGraduationCapLine size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Courses</h2>}
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
              <div className={`${librarySections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiBook2Line size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Library</h2>}
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
              <div className={`${departmentsSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiBuilding4Line size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Departments</h2>}
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
              <div className={`${staffSections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiTeamLine size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Staff</h2>}
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

          <div className="w-full">
            <div
              onClick={() => setHolidaySections(!holidaySections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className={`${holidaySections ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiGift2Line size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Holiday</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-transform duration-300 ${holidaySections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${holidaySections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/all-holiday" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- All Holiday</Link>
                  <Link to="/add-holiday" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Holiday</Link>
                  <Link to="/edit-holiday" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Holiday</Link>
                  <Link to="/holiday-calendar" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Holiday Calendar</Link>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div
              onClick={() => { setFeesSection(!FeesSection) }}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>

              <div className={`${FeesSection ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <span className="text-[20px] pl-1">$</span>
                {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Fees</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} />}
            </div>


            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${FeesSection ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/fees-collection" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Fees Collection</Link>
                  <Link to="/add-fees" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Add Fees</Link>
                  <Link to="/fees-reciept" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Fees Reciept</Link>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">Apps</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="w-full">
            <div
              onClick={() => setAppsSection(!appsSection)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className={`${appsSection ? "text-[#6A73FA]" : ""} flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]`}>
                <RiTeamLine size={20} />
                {!collapsed && <h2 className="text-[#737B8B] text-[0.8375rem]">Apps</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-transform duration-300 ${appsSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${appsSection ? "max-h-160 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col text-[12px] pl-10 gap-3 pb-3 text-[#737b8b] font-medium">
                  <Link to="/app-profile" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Profile</Link>

                  <div className="flex items-center gap-1.25">
                    <Link to="/post-details" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Post Details</Link>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                  </div>

                  <div className="flex items-center gap-1.25">
                    <Link to="/edit-app-profile" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Edit Profile</Link>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                  </div>

                  <div>
                    <div
                      onClick={() => setEmailSection(!emailSection)}
                      className="flex items-center justify-between pr-2 cursor-pointer hover:pl-2 transition-all duration-500"
                    >
                      <span className={emailSection ? "text-[#6A73FA]" : ""}>- Email</span>
                      <RiPlayMiniFill
                        size={14}
                        className={`transition-transform duration-300 ${emailSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${emailSection ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-col gap-3 pt-3 pl-4">
                        <Link to="/compose-email" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Compose</Link>
                        <Link to="/inbox" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Inbox</Link>
                        <Link to="/read" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Read</Link>
                      </div>
                    </div>
                  </div>

                  <Link to="/app-calender" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Calender</Link>

                  <div>
                    <div
                      onClick={() => setShopSection(!shopSection)}
                      className="flex items-center justify-between pr-2 cursor-pointer hover:pl-2 transition-all duration-500"
                    >
                      <span className={shopSection ? "text-[#6A73FA]" : ""}>- Shop</span>
                      <RiPlayMiniFill
                        size={14}
                        className={`transition-transform duration-300 ${shopSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${shopSection ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-col gap-3 pt-3 pl-4">
                        <Link to="/product-grid" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Product Grid</Link>
                        <Link to="/product-list" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Product List</Link>
                        <Link to="/product-details" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Product Details</Link>
                        <Link to="/order" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Order</Link>
                        <Link to="/checkout" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Checkout</Link>
                        <Link to="/invoice" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Invoice</Link>
                        <Link to="/customers" className="hover:text-[#6A73FA] cursor-pointer hover:pl-2 transition-all duration-500">- Customers</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
              <RiInboxLine size={20} />
              {!collapsed && (
                <div className="flex items-center gap-1.25">
                  <span className='text-[#737B8B] text-[0.8375rem]'>CMS</span>
                  <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                </div>
              )}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} />}
          </div>

          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
              <RiSignalCellular3Fill size={20} />
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Charts</span>}
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
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Bootstrap</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
              <RiFileAddLine size={20} />
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Plugins</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} />}
          </div>
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4 transition-colors duration-300 group-hover:text-[#6A73FA]">
              <RiComputerLine size={20} />
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Widget</span>}
            </div>

          </div>
        </div>

        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[#737B8B] text-[0.8375rem]">FORMS</small>}
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
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Table</span>}
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
              {!collapsed && <span className="text-[#737B8B] text-[0.8375rem]">Pages</span>}
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