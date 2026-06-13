
import { Routes,Route } from 'react-router-dom'
import Dashboard1 from './pages/Dashboard1.jsx'
import Dashboard2 from './pages/Dashboard2.jsx'
import Dashboard3 from './pages/Dashboard3.jsx'
import EventManagement from './pages/EventManagement.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/event-management" element={<EventManagement/>} />
      </Routes>
    </div>
  )
}

export default App