
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
