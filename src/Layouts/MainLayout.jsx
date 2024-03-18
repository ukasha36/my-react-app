 
 import { Outlet } from 'react-router-dom'
import NavBar from '../Components/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
    <NavBar/> 
    <Outlet/>
    
 </>

  )
}

export default MainLayout