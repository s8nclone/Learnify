import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ReviewFrame from './Components/ReviewSection/ReviewFrame'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection />
      <ReviewFrame/>
      <Outlet />
      
    </>
  )
}

export default App
