import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import Breakfast from './Pages/Menus/Breakfast/Breakfast'
import Lunch from './Pages/Menus/Lunch/Lunch'
import Add from './Pages/add/Add'
import Dinner from './Pages/Menus/Dinner/Dinner'
import Menu from './Pages/Menu/Menu'
import AboutUs from './Pages/Aboutus/Aboutus'
import Report from './Pages/Report/Report'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <NavBar />
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/menus/breakfast' element={<Breakfast />} />
          <Route path='/menus/lunch' element={<Lunch />} />
          <Route path='/menus/dinner' element={<Dinner />} />
          <Route path='/add' element={<Add />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/report' element={<Report />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )


}

export default App
