import './Navbar.css'
import Arrow from '../../assets/forwardArrow.svg'
import { NavLink, Link, useLocation } from 'react-router-dom';
import ProfileButton from '../Profile/ProfileButton';
import searchIcon from '../../assets/search-icon.svg'
import bell from '../../assets/notificationComponent.svg'
import { useContext } from 'react';
import { AuthContext } from '../../hooks/context.jsx';


function Navbar() {
    const {isLoggedIn} = useContext(AuthContext);

    const location = useLocation();

    const isCoursesOpen = location.pathname === "/courses";

    return (
        <div className='container'>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>


            <div className='logo'>
                <h1><Link to={"/"}>Learnify</Link></h1>
            </div>
            
            <Link to={"signup"}><button className='forfree nav-btn mobile-screen'>Start for free</button></Link>

            <div className='pages'>
                <ul>
                    {/* <li><NavLink to={"Home"}>Home</NavLink></li> */}


                    <li><NavLink to={"/courses"}>Courses</NavLink>
                        <div className="dropdown">
                            <ul>
                                <li><NavLink to={"#"}><h5>Development </h5><img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>IT & Software</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Cyber Security</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"/courses"}><h5>Design</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Data Science</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Software Testing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Product Management</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>No-code Dev</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Cloud Computing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                                <li><NavLink to={"#"}><h5>Technical writing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></NavLink></li>
                            </ul>
                        </div>
                    </li>

                    {isLoggedIn && <li><NavLink to={"dashboard"}>Dashboard</NavLink></li>}
                    <li>About us </li>
                    <li>Pricing</li>

                </ul>
                
                {isLoggedIn 
                ? (
                    <div className="courses-nav-btn">
                        {isCoursesOpen && <button className="searchBtn button"><img src={searchIcon} alt="search icon" /></button>}
                        <button className="notifyBtn button"><img src={bell} alt="notification icon" /></button>
                        <ProfileButton />
                    </div>
                )
                : (
                    <div className='btn-container'>
                        <Link to={"login"}><button className='login nav-btn'>Log in</button></Link>
                        <Link to={"signup"}><button className='forfree nav-btn'>Start for free</button></Link>
                    </div>
                    )
                }
            </div>
            
        </div>
    )
};


export default Navbar;

