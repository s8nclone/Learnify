import React from 'react'
import Login from '../Components/Login/Login'
import LoginImageSide from '../components/Login/LoginImageSide'
import { Outlet } from 'react-router-dom'

export default function LoginPage() {
  return (
    <section style={{display: "flex", height: "100vh"}}>
      <LoginImageSide />
      <Outlet />
    </section>
  )
}

