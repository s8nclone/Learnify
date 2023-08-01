import './Navbar.css'
import Arrow from '../../assets/forwardArrow.svg'
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <div className='container'>


            <div className='logo'>
                <h1><Link to={"/"}>Learnify</Link></h1>
            </div>

            <div className='pages'>
                <ul>
                    {/* <li><NavLink to={"Home"}>Home</NavLink></li> */}


                    <li>Courses
                        <div class="dropdown">
                            <ul>
                                <li><a href="#"><h5>Development </h5><img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>IT & Software</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Cyber Security</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Design</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Data Science</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Software Testing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Product Management</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>No-code Dev</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Cloud Computing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                                <li><a href="#"><h5>Technical writing</h5> <img src={Arrow} alt="front arrow" style={{maxWidth:"2.5rem"}}/></a></li>
                            </ul>
                        </div>
                    </li>

                    <li>About us </li>
                    <li>Pricing</li>

                </ul>
                
                <div className='btn-container'>
                    <button className='login btn'>Log in</button>
                    <button className='forfree btn'>Start for free</button>
                </div>
            </div>
            

        </div>
    )
};


export default Navbar;

