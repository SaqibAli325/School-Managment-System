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
  RiHeartFill,
} from "@remixicon/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Reusable styling classes
const SidebarTextStyling = "text-[#737B8B] font-[500] text-[0.8375rem] transition-colors duration-300 group-hover:text-[#6A73FA]";
const SubMenuTextStyling = "text-[#737B8B] hover:text-[#6A73FA] text-[12px] cursor-pointer hover:pl-2 transition-all duration-300 font-medium";

const Sidebar = () => {
  const [dashboardSections, setDashboardSections] = useState(false);
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
  const [feesSection, setFeesSection] = useState(false);
  const [appsSection, setAppsSection] = useState(false);
  const [emailSection, setEmailSection] = useState(false);
  const [shopSection, setShopSection] = useState(false);
  const [cmsSection, setCmsSection] = useState(false);
  const [chartsSection, setChartsSection] = useState(false);
  const [bootstrapSection, setBootstrapSection] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleToggle = (e) => setCollapsed(e.detail.collapsed);
    window.addEventListener("sidebarToggle", handleToggle);

    const handleMobileToggle = (e) => setMobileMenuOpen(e.detail.isOpen);
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

  const bootstrapMenuItems = [
    { title: "Accordion", to: "/bootstrap/accordion" },
    { title: "Alert", to: "/bootstrap/alert" },
    { title: "Badge", to: "/bootstrap/badge" },
    { title: "Button", to: "/bootstrap/button" },
    { title: "Modal", to: "/bootstrap/modal" },
    { title: "Button Group", to: "/bootstrap/button-group" },
    { title: "List Group", to: "/bootstrap/list-group" },
    { title: "Media Object", to: "/bootstrap/media-object" },
    { title: "Cards", to: "/bootstrap/cards" },
    { title: "Carousel", to: "/bootstrap/carousel" },
    { title: "Dropdown", to: "/bootstrap/dropdown" },
    { title: "Popover", to: "/bootstrap/popover" },
    { title: "Progressbar", to: "/bootstrap/progressbar" },
    { title: "Tab", to: "/bootstrap/tab" },
    { title: "Typography", to: "/bootstrap/typography" },
    { title: "Pagination", to: "/bootstrap/pagination" },
    { title: "Grid", to: "/bootstrap/grid" }
  ];

  return (
    <div
      className={`custom-scrollbar pb-12 fixed top-0 left-0 h-screen bg-[#FAF9FB] overflow-y-auto overflow-x-hidden z-50 border-r border-gray-200 transition-all duration-300 ${shouldHide ? "-translate-x-full" : "translate-x-0"
        } ${isMobileView ? "w-[250px]" : displayCollapsed ? "w-14" : "w-[250px]"
        } mt-16`}
    >
      <div>
        <div className={`pt-8 pb-2 mr-4 ${displayCollapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!displayCollapsed && <small className="text-[70%] font-semibold">Main Menu</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          {/* Dashboard */}
          <div className="w-full">
            <div
              onClick={() => setDashboardSections(!dashboardSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiHome4Line size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${dashboardSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Dashboard</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${dashboardSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dashboardSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/" className={`${SubMenuTextStyling}`}>- Dashboard 1</Link>
                  <Link to="/dashboard2" className={`${SubMenuTextStyling}`}>- Dashboard 2</Link>
                  <Link to="/dashboard3" className={`${SubMenuTextStyling}`}>- Dashboard 3</Link>
                </div>
              </div>
            )}
          </div>

          {/* Event Management */}
          <Link to="/event-management" className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiCalendar2Line size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Event Management</span>}
            </div>
          </Link>

          {/* Professors */}
          <div className="w-full">
            <div
              onClick={() => setProfessorsSections(!professorsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiUserLine size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${professorsSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Professors</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${professorsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${professorsSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-professors" className={`${SubMenuTextStyling}`}>- All Professors</Link>
                  <Link to="/add-professor" className={`${SubMenuTextStyling}`}>- Add Professor</Link>
                  <Link to="/edit-professor" className={`${SubMenuTextStyling}`}>- Edit Professor</Link>
                  <Link to="/professor-profile" className={`${SubMenuTextStyling}`}>- Professor Profile</Link>
                </div>
              </div>
            )}
          </div>

          {/* Students */}
          <div className="w-full">
            <div
              onClick={() => setStudentsSections(!studentsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiTeamLine size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${studentsSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Students</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${studentsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${studentsSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-students" className={`${SubMenuTextStyling}`}>- All Students</Link>
                  <Link to="/add-student" className={`${SubMenuTextStyling}`}>- Add Student</Link>
                  <Link to="/edit-student" className={`${SubMenuTextStyling}`}>- Edit Student</Link>
                  <Link to="/about-student" className={`${SubMenuTextStyling}`}>- About Student</Link>
                </div>
              </div>
            )}
          </div>

          {/* Courses */}
          <div className="w-full">
            <div
              onClick={() => setCoursesSections(!coursesSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiGraduationCapLine size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${coursesSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Courses</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${coursesSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${coursesSections ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-courses" className={`${SubMenuTextStyling}`}>- All Courses</Link>
                  <Link to="/add-course" className={`${SubMenuTextStyling}`}>- Add Course</Link>
                  <Link to="/edit-course" className={`${SubMenuTextStyling}`}>- Edit Course</Link>
                  <Link to="/about-course" className={`${SubMenuTextStyling}`}>- About Course</Link>
                </div>
              </div>
            )}
          </div>

          {/* Library */}
          <div className="w-full">
            <div
              onClick={() => setLibrarySections(!librarySections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiBook2Line size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${librarySections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Library</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${librarySections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${librarySections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-library" className={`${SubMenuTextStyling}`}>- All Library</Link>
                  <Link to="/add-library" className={`${SubMenuTextStyling}`}>- Add Library</Link>
                  <Link to="/edit-library" className={`${SubMenuTextStyling}`}>- Edit Library</Link>
                </div>
              </div>
            )}
          </div>

          {/* Departments */}
          <div className="w-full">
            <div
              onClick={() => setDepartmentsSections(!departmentsSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiBuilding4Line size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${departmentsSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Departments</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${departmentsSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${departmentsSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-departments" className={`${SubMenuTextStyling}`}>- All Departments</Link>
                  <Link to="/add-department" className={`${SubMenuTextStyling}`}>- Add Department</Link>
                  <Link to="/edit-department" className={`${SubMenuTextStyling}`}>- Edit Department</Link>
                </div>
              </div>
            )}
          </div>

          {/* Staff */}
          <div className="w-full">
            <div
              onClick={() => setStaffSections(!staffSections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiTeamLine size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${staffSections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Staff</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${staffSections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${staffSections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-staff" className={`${SubMenuTextStyling}`}>- All Staff</Link>
                  <Link to="/add-staff" className={`${SubMenuTextStyling}`}>- Add Staff</Link>
                  <Link to="/edit-staff" className={`${SubMenuTextStyling}`}>- Edit Staff</Link>
                  <Link to="/staff-profile" className={`${SubMenuTextStyling}`}>- Staff Profile</Link>
                </div>
              </div>
            )}
          </div>

          {/* Holiday */}
          <div className="w-full">
            <div
              onClick={() => setHolidaySections(!holidaySections)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiGift2Line size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${holidaySections ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Holiday</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${holidaySections ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${holidaySections ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/all-holiday" className={`${SubMenuTextStyling}`}>- All Holiday</Link>
                  <Link to="/add-holiday" className={`${SubMenuTextStyling}`}>- Add Holiday</Link>
                  <Link to="/edit-holiday" className={`${SubMenuTextStyling}`}>- Edit Holiday</Link>
                  <Link to="/holiday-calendar" className={`${SubMenuTextStyling}`}>- Holiday Calendar</Link>
                </div>
              </div>
            )}
          </div>

          {/* Fees */}
          <div className="w-full">
            <div
              onClick={() => setFeesSection(!feesSection)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
              <div className="flex items-center gap-4">
                <span className={`text-[18px] pl-1 transition-colors duration-300 group-hover:text-[#6A73FA] ${feesSection ? "text-[#6A73FA]" : ""}`}>$</span>
                {!collapsed && <span className={`${SidebarTextStyling}`}>Fees</span>}
              </div>
              {!collapsed && <RiPlayMiniFill size={16} className={`transition-all duration-300 group-hover:text-[#6A73FA] ${feesSection ? "rotate-90 text-[#6A73FA]" : ""}`} />}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${feesSection ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/fees-collection" className={`${SubMenuTextStyling}`}>- Fees Collection</Link>
                  <Link to="/add-fees" className={`${SubMenuTextStyling}`}>- Add Fees</Link>
                  <Link to="/fees-reciept" className={`${SubMenuTextStyling}`}>- Fees Reciept</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* APPS SECTION */}
        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-semibold">Apps</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className="w-full">
            <div
              onClick={() => setAppsSection(!appsSection)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiTeamLine size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${appsSection ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <h2 className={`${SidebarTextStyling}`}>Apps</h2>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${appsSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>

            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${appsSection ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/app-profile" className={`${SubMenuTextStyling}`}>- Profile</Link>

                  <div className="flex items-center gap-2">
                    <Link to="/post-details" className={`${SubMenuTextStyling}`}>- Post Details</Link>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link to="/edit-app-profile" className={`${SubMenuTextStyling}`}>- Edit Profile</Link>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">New</div>
                  </div>

                  <div>
                    <div
                      onClick={() => setEmailSection(!emailSection)}
                      className="group flex items-center justify-between pr-2 cursor-pointer"
                    >
                      <span className={`${SubMenuTextStyling} ${emailSection ? "text-[#6A73FA]" : ""}`}>- Email</span>
                      <RiPlayMiniFill
                        size={12}
                        className={`transition-transform duration-300 group-hover:text-[#6A73FA] ${emailSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${emailSection ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-col gap-3 pt-3 pl-4">
                        <Link to="/compose-email" className={`${SubMenuTextStyling}`}>- Compose</Link>
                        <Link to="/inbox" className={`${SubMenuTextStyling}`}>- Inbox</Link>
                        <Link to="/read" className={`${SubMenuTextStyling}`}>- Read</Link>
                      </div>
                    </div>
                  </div>

                  <Link to="/app-calender" className={`${SubMenuTextStyling}`}>- Calender</Link>

                  <div>
                    <div
                      onClick={() => setShopSection(!shopSection)}
                      className="group flex items-center justify-between pr-2 cursor-pointer"
                    >
                      <span className={`${SubMenuTextStyling} ${shopSection ? "text-[#6A73FA]" : ""}`}>- Shop</span>
                      <RiPlayMiniFill
                        size={12}
                        className={`transition-transform duration-300 group-hover:text-[#6A73FA] ${shopSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${shopSection ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-col gap-3 pt-3 pl-4">
                        <Link to="/product-grid" className={`${SubMenuTextStyling}`}>- Product Grid</Link>
                        <Link to="/product-list" className={`${SubMenuTextStyling}`}>- Product List</Link>
                        <Link to="/product-details" className={`${SubMenuTextStyling}`}>- Product Details</Link>
                        <Link to="/order" className={`${SubMenuTextStyling}`}>- Order</Link>
                        <Link to="/checkout" className={`${SubMenuTextStyling}`}>- Checkout</Link>
                        <Link to="/invoice" className={`${SubMenuTextStyling}`}>- Invoice</Link>
                        <Link to="/customers" className={`${SubMenuTextStyling}`}>- Customers</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CMS SECTION */}
          <div className="w-full">
            <div
              onClick={() => setCmsSection(!cmsSection)}
              className={`group flex items-center ${collapsed ? "justify-center" : "justify-between w-[90%] mx-auto"
                } py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiInboxLine
                  size={18}
                  className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${cmsSection ? "text-[#6A73FA]" : ""
                    }`}
                />
                {!collapsed && (
                  <div className="flex items-center gap-2">
                    <span className={`${SidebarTextStyling}`}>CMS</span>
                    <div className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-sm">
                      New
                    </div>
                  </div>
                )}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${cmsSection ? "rotate-90 text-[#6A73FA]" : ""
                    }`}
                />
              )}
            </div>

            {!collapsed && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${cmsSection ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/cms-content" className={`${SubMenuTextStyling}`}>
                    - Content
                  </Link>
                  <Link to="/cms-menu" className={`${SubMenuTextStyling}`}>
                    - Menus
                  </Link>
                  <Link to="/cms-email-template" className={`${SubMenuTextStyling}`}>
                    - Email Template
                  </Link>
                  <Link to="/cms-add-content" className={`${SubMenuTextStyling}`}>
                    - Add Content
                  </Link>
                  <Link to="/cms-blog" className={`${SubMenuTextStyling}`}>
                    - Blog
                  </Link>
                  <Link to="/cms-add-email" className={`${SubMenuTextStyling}`}>
                    - Add Email
                  </Link>
                  <Link to="/cms-add-blog" className={`${SubMenuTextStyling}`}>
                    - Add Blog
                  </Link>
                  <Link to="/cms-blog-category" className={`${SubMenuTextStyling}`}>
                    - Blog Category
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Charts */}
          <div className="w-full">
            <div
              onClick={() => setChartsSection(!chartsSection)}
              className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <RiSignalCellular3Fill size={18} className={`transition-colors duration-300 group-hover:text-[#6A73FA] ${chartsSection ? "text-[#6A73FA]" : ""}`} />
                {!collapsed && <span className={`${SidebarTextStyling}`}>Charts</span>}
              </div>
              {!collapsed && (
                <RiPlayMiniFill
                  size={16}
                  className={`transition-all duration-300 group-hover:text-[#6A73FA] ${chartsSection ? "rotate-90 text-[#6A73FA]" : ""}`}
                />
              )}
            </div>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${chartsSection ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col pl-10 gap-3 pb-3">
                  <Link to="/charts-flot" className={`${SubMenuTextStyling}`}>- Flot</Link>
                  <Link to="/charts-morris" className={`${SubMenuTextStyling}`}>- Morris</Link>
                  <Link to="/charts-chartjs" className={`${SubMenuTextStyling}`}>- Chartjs</Link>
                  <Link to="/charts-chartist" className={`${SubMenuTextStyling}`}>- Chartist</Link>
                  <Link to="/charts-sparkline" className={`${SubMenuTextStyling}`}>- Sparkline</Link>
                  <Link to="/charts-peity" className={`${SubMenuTextStyling}`}>- Peity</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* COMPONENTS SECTION */}
        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-[500]">COMPONENTS</small>}
        </div>

        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          {/* Bootstrap */}
          <div onClick={() => { setBootstrapSection(!bootstrapSection) }} className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiGlobalLine size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Bootstrap</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />}

          </div>
          {!collapsed && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${bootstrapSection ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col pl-10 gap-3 pb-3">
                {bootstrapMenuItems.map((item, index) => (
                  <Link key={index} to={item.to} className={`${SubMenuTextStyling}`}>
                    - {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Plugins */}
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiFileAddLine size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Plugins</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />}
          </div>
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiComputerLine size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Widget</span>}
            </div>
          </div>
        </div>

        {/* FORMS */}
        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[#737B8B] text-[0.8375rem] font-[500]">FORMS</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiFileTextLine size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Forms</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />}
          </div>
        </div>

        {/* TABLE */}
        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-[500]">TABLE</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2 border-b border-gray-200 pb-5">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiLayoutGrid2Line size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Table</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />}
          </div>
        </div>

        {/* EXTRA */}
        <div className={`pt-3 pb-2 mr-4 ${collapsed ? 'hidden' : 'ml-8 text-gray-500'}`}>
          {!collapsed && <small className="text-[70%] font-[500]">EXTRA</small>}
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className={`group flex items-center ${collapsed ? 'justify-center' : 'justify-between w-[90%] mx-auto'} py-3 text-[#5a5a5ac9] text-[12px] font-semibold cursor-pointer`}>
            <div className="flex items-center gap-4">
              <RiFileTextLine size={18} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />
              {!collapsed && <span className={`${SidebarTextStyling}`}>Pages</span>}
            </div>
            {!collapsed && <RiPlayMiniFill size={16} className="transition-colors duration-300 group-hover:text-[#6A73FA]" />}
          </div>
        </div>

        <div className={`px-4 py-8 text-[15px] text-gray-400 leading-relaxed ${collapsed ? 'hidden' : ''}`}>
          {!collapsed && (
            <p>Edumin Saas Admin © 2023 All <br /> Rights Reserved <br /> Made with <RiHeartFill size={10} className="inline text-red-500" /> by DexignLab</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;