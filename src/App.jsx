import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <Outlet />
      
    </>
  )
}

export default App
