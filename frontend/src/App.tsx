import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import AttendancePage from './Pages/AttendancePage'
import EmployeeInfo from './Pages/EmployeeInfo'
import './App.css'
import { Route, Routes } from 'react-router-dom'  
import Layout from './Layout/Layout'
import LeaveManagement from './Pages/Leave/LeaveManagement'


function App() {
  

  return (
    <Routes>  
      <Route path='login' element={<Login/>}/>


      <Route path='/' element={<Layout/>}>  
        <Route index element={<Dashboard/>}/>
        <Route path='attendance' element={<AttendancePage/>}/>
        <Route path='employee' element={<EmployeeInfo/>}/>
        <Route path='leave-apply' element={<LeaveManagement/>}/>
      </Route>



    </Routes>
  )
}

export default App
