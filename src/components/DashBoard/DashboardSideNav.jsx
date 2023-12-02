import React from 'react'
import { MdOutlineDashboard, MdOutlineSettings, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { GiBookCover } from 'react-icons/gi'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { IoIosPeople, IoIosAdd, IoMdArrowDropdown } from 'react-icons/io'
import { FaCouch } from 'react-icons/fa'

function DashboardSideNav() {
  return (
    <>
      <nav className="dash_sideNav">
        <div className="dash_header">
          <h2 className="dash_logo">Learnify</h2>
          <MdKeyboardDoubleArrowRight />
        </div>
        <div className="dash_links">
          <a className="dash_linkItems"><MdOutlineDashboard /> Dashboard</a>
          <a className="dash_linkItems"><GiBookCover /> All Courses</a>
          <a className="dash_linkItems"><BiBriefcaseAlt2 /> Free Resources</a>
          <a className="dash_linkItems"><MdOutlineSettings /> Settings</a>
          <a className="dash_linkItems"><IoMdArrowDropdown /> Learnify connect</a>
          <div>
            <a className="dash_linkItems"><IoIosPeople /> General</a>
            <a className="dash_linkItems"><FaCouch /> Chatroom</a>
            <a className="dash_linkItems"><IoIosAdd /> Add Team</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DashboardSideNav