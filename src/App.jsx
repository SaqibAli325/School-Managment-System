
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
        <Route path="*" element={<Dashboard1 />} />
      </Routes>
    </div>
  )
}

export default App