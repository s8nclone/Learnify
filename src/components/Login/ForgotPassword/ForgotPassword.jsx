import React from 'react'
import './forgotPassword.css'
import ForgotPasswordPath from './ForgotPasswordPath'
import { Outlet } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function ForgotPassword() {
  return (
    <>
        <aside className="forgot-pass-page">
            <div className="forgot-pass-go-back"><AiOutlineArrowLeft /></div>
            <ForgotPasswordPath />
            <Outlet />
        </aside>
    </>
  )
}

export default ForgotPassword