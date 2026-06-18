
import { Routes,Route } from 'react-router-dom'
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



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/event-management" element={<EventManagement/>} />
        <Route path="/all-professors" element={<Professors/>} />
        <Route path="/add-professor" element={<AddProfessor/>} />
        <Route path="/edit-professor" element={<EditProfessor/>} />
        <Route path="/professor-profile" element={<ProfessorProfile/>} />
        <Route path="/all-students" element={<Students/>} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/edit-student" element={<EditStudent/>} />
        <Route path="/about-student" element={<StudentProfile/>} />
        <Route path="/all-courses" element={<AllCourse/>} />
        <Route path="/add-course" element={<AddCourse/>} />
        <Route path="/edit-course" element={<EditCourse/>} />
        <Route path="/about-course" element={<AboutCourse/>} />
        <Route path="/all-library" element={<Library/>} />
        <Route path="/add-library" element={<AddLibrary/>} />
        <Route path="/edit-library" element={<EditLibrary/>} />
      </Routes>
    </div>
  )
}

export default App