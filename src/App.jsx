
import { Routes, Route } from 'react-router-dom'
import Dashboard1 from './pages/Dashboard1.jsx'
import Dashboard2 from './pages/Dashboard2.jsx'
import Dashboard3 from './pages/Dashboard3.jsx'
import EventManagement from './pages/EventManagement.jsx'
import Professors from './pages/Professors.jsx'
import AddProfessor from './components/Professors/AddProfessor.jsx'
import EditProfessor from './components/Professors/EditProfessor.jsx'
import ProfessorProfile from './components/Professors/ProfessorProfile.jsx'
import Students from './pages/Students.jsx'
import AddStudent from './components/Students/AddStudent.jsx'
import EditStudent from './components/Students/EditStudent.jsx'
import StudentProfile from './components/Students/AboutStudent.jsx'
import AllCourse from './components/Courses/AllCourse.jsx'
import AddCourse from './components/Courses/AddCourse.jsx'
import EditCourse from './components/Courses/EditCourse.jsx'
import AboutCourse from './components/Courses/AboutCourse.jsx'
import Library from './pages/Library.jsx'
import AddLibrary from './components/Library/AddLibrary.jsx'
import EditLibrary from './components/Library/EditLibrary.jsx'
import AllDepartments from './components/Departments/AllDepartments.jsx'
import AddDepartments from './components/Departments/AddDepartments.jsx'
import EditDepartments from './components/Departments/EditDepartments.jsx'
import Staff from './pages/Staff.jsx'
import AddStaff from './components/Staff/AddStaff.jsx'
import EditStaff from './components/Staff/EditStaff.jsx'
import StaffProfile from './components/Staff/StaffProfile.jsx'
import Holiday from './pages/Holiday.jsx'
import AddHoliday from './components/Holidays/AddHoliday.jsx'
import EditHoliday from './components/Holidays/EditHoliday.jsx'
import HolidayCalendar from './components/Holidays/HolidayCalender.jsx'
import FeesSection from './pages/Fees.jsx'
import AddFees from './components/Fees/AddFees.jsx'
import FeesReciept from './components/Fees/FeesReciept.jsx'
import ProfilePage from './pages/AppSection.jsx'
import PostDetails from './components/App/PostDetails.jsx'
import EditAppProfile from './components/App/EditAppProfile.jsx'
import ComposeEmail from './components/App/Email/Compose.jsx'
import Inbox from './components/App/Email/inbox.jsx'
import Read from './components/App/Email/Read.jsx'
import AppCalender from './components/App/AppCalender.jsx'
import ProductGrid from './components/App/Shop/ProductGrid.jsx'
import ProductList from './components/App/Shop/ProductList.jsx'
import ProductDetails from './components/App/Shop/ProductDetails.jsx'
import Order from './components/App/Shop/Order.jsx'
import Checkout from './components/App/Shop/Checkout.jsx'
import Customers from './components/App/Shop/Customers.jsx'
import AllContent from './components/CMS/AllContent.jsx'
import Menu from './components/CMS/Menus.jsx'
import EmailTemplate from './components/CMS/EmailTemplate.jsx'
import AllBlog from './components/CMS/AllBlog.jsx'
import AddContent from './components/CMS/AddContent.jsx'
import AddBlog from './components/CMS/AddBlog.jsx'
import BlogCategory from './components/CMS/BlogCategory.jsx'
import AddEmail from './components/CMS/AddEmail.jsx'
<<<<<<< HEAD
=======
import ChartsFlot from './pages/ChartsFlot.jsx'
import ChartsMorris from './pages/ChartsMorris.jsx'
import ChartsChartjs from './pages/ChartsChartjs.jsx'
import ChartsChartist from './pages/ChartsChartist.jsx'
import ChartsSparkline from './pages/ChartsSparkline.jsx'
import ChartsPeity from './pages/ChartsPeity.jsx'
<<<<<<< HEAD
>>>>>>> Customize
=======
import BootstrapAccordion from './components/Bootstrap/Accordion.jsx'
import BootstrapAlert from './components/Bootstrap/Alert.jsx'
import BootstrapBadge from './components/Bootstrap/Badge.jsx'
import BootstrapButton from './components/Bootstrap/Button.jsx'
import BootstrapModal from './components/Bootstrap/Modal.jsx'
import ButtonGroup from './components/Bootstrap/ButtonGroup.jsx'
import ListGroup from './components/Bootstrap/ListGroup.jsx'
import MediaObject from './components/Bootstrap/MediaObject.jsx'
import BootstrapCards from './components/Bootstrap/BootstrapCards.jsx'
import BootstrapCarousel from './components/Bootstrap/Carousel.jsx'
>>>>>>> Customize

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/all-professors" element={<Professors />} />
        <Route path="/add-professor" element={<AddProfessor />} />
        <Route path="/edit-professor" element={<EditProfessor />} />
        <Route path="/professor-profile" element={<ProfessorProfile />} />
        <Route path="/all-students" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/about-student" element={<StudentProfile />} />
        <Route path="/all-courses" element={<AllCourse />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course" element={<EditCourse />} />
        <Route path="/about-course" element={<AboutCourse />} />
        <Route path="/all-library" element={<Library />} />
        <Route path="/add-library" element={<AddLibrary />} />
        <Route path="/edit-library" element={<EditLibrary />} />
        <Route path="/all-departments" element={<AllDepartments />} />
        <Route path="/add-department" element={<AddDepartments />} />
        <Route path="/edit-department" element={<EditDepartments />} />
        <Route path="/all-staff" element={<Staff />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/edit-staff" element={<EditStaff />} />
        <Route path="/staff-profile" element={<StaffProfile />} />
        <Route path="/all-holiday" element={<Holiday />} />
        <Route path="/add-holiday" element={<AddHoliday />} />
        <Route path="/edit-holiday" element={<EditHoliday />} />
        <Route path="/holiday-calendar" element={<HolidayCalendar />} />
        <Route path="/fees-collection" element={<FeesSection />} />
        <Route path="/add-fees" element={<AddFees />} />
        <Route path="/fees-reciept" element={<FeesReciept />} />
        <Route path="/app-profile" element={<ProfilePage />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/edit-app-profile" element={<EditAppProfile />} />
        <Route path='/compose-email' element={<ComposeEmail />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/read' element={<Read />} />
        <Route path='/app-calender' element={<AppCalender />} />
        <Route path='/product-grid' element={<ProductGrid />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/order' element={<Order />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/cms-content' element={<AllContent />} />
        <Route path='/cms-menu' element={<Menu />} />
        <Route path='/cms-email-template' element={<EmailTemplate />} />
        <Route path='/cms-blog' element={<AllBlog />} />
        <Route path='/cms-add-content' element={<AddContent />} />
        <Route path='/cms-add-blog' element={<AddBlog />} />
        <Route path='/cms-blog-category' element={<BlogCategory />} />
        <Route path='/cms-add-email' element={<AddEmail />} />
<<<<<<< HEAD
=======
        <Route path='/charts-flot' element={<ChartsFlot />} />
        <Route path='/charts-morris' element={<ChartsMorris />} />
        <Route path='/charts-chartjs' element={<ChartsChartjs />} />
        <Route path='/charts-chartist' element={<ChartsChartist />} />
        <Route path='/charts-sparkline' element={<ChartsSparkline />} />
        <Route path='/charts-peity' element={<ChartsPeity />} />
<<<<<<< HEAD
>>>>>>> Customize
=======
        <Route path='/bootstrap/accordion' element={<BootstrapAccordion />} />
        <Route path='/bootstrap/alert' element={<BootstrapAlert />} />
        <Route path='/bootstrap/badge' element={<BootstrapBadge />} />
        <Route path='/bootstrap/button' element={<BootstrapButton />} />
        <Route path='/bootstrap/modal' element={<BootstrapModal />} />
        <Route path='/bootstrap/button-group' element={<ButtonGroup />} />
        <Route path='/bootstrap/list-group' element={<ListGroup />} />
        <Route path='/bootstrap/media-object' element={<MediaObject />} />
        <Route path='/bootstrap/cards' element={<BootstrapCards />} />
        <Route path='/bootstrap/carousel' element={<BootstrapCarousel />} />
>>>>>>> Customize
        <Route path="*" element={<Dashboard1 />} />
      </Routes>
    </div>
  )
}

export default App