import './Navbar.css'


function Navbar() {

    return (
        <div className='container'>


            <div className='logo'>
                <h1>Learnify</h1>
            </div>

            <div className='pages'>
                <ul>
                    <li>Home</li>


                    <li><select name="" id="">
                            <option >Courses</option>
                             <option value="">#</option>
                            <option value="">#</option>
                            <option value="">#</option>
                           
                        </select>
                    </li>

                    <li>About </li>
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

